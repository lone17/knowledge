---
aliases: 
title: Memory-efficient Model Weight Loading
source: https://www.linkedin.com/in/sebastianraschka/
author: 
published: 
created: 2024-11-14 00:00 AM +07:00
description: 
tags: 
modified: 2024-12-01 16:22 PM +07:00
---

[Jupyter Notebook](https://github.com/rasbt/LLMs-from-scratch/raw/refs/heads/main/ch05/08_memory_efficient_weight_loading/memory-efficient-state-dict.ipynb)

# Memory-efficient Model Weight Loading

- This notebook provides tips for loading larger pretrained or finetuned models when GPU (or CPU) memory is limited
- Specifically, it focuses on cases where you saved the model using `torch.save(model.state_dict(), "model.pth")` (for example, in chapters 5-7) and want to load it in a new session later for continued pretraining or additional finetuning
- While the example uses an LLM, the methods explained in this notebook are general and apply to loading any PyTorch model, not just LLMs

![](https://camo.githubusercontent.com/dc11e697ec6efb19c88af72829dfed8d76c5c7c1070a061c3b227ebb5d1fe419/68747470733a2f2f73656261737469616e72617363686b612e636f6d2f696d616765732f4c4c4d732d66726f6d2d736372617463682d696d616765732f626f6e75732f6d656d6f72792d656666696369656e742d6c6f6164696e672f6d656d6f72792d656666696369656e742d6c6f6164696e672e77656270)

```python
from importlib.metadata import version

pkgs = [
    "torch",
]
for p in pkgs:
    print(f"{p} version: {version(p)}")

```
```sh
memory_profiler version: 0.61.0
torch version: 2.4.1+cu121
```

## 1. Benchmark utilities

- First, let's define some utility code to track VRAM (GPU memory)
- Later, we will also introduce a tool to track the main system RAM (CPU memory)
- The purpose of these functions will become clear when we apply them later

```python
import gc
import time
import torch

def start_memory_tracking():
    """Initialize GPU memory tracking."""
    if torch.cuda.is_available():
        torch.cuda.reset_peak_memory_stats()
    else:
        print("This notebook is intended for CUDA GPUs but CUDA is not available.")

def print_memory_usage():
    max_gpu_memory = torch.cuda.max_memory_allocated() / (1024 ** 3)  # Convert bytes to GB
    print(f"Maximum GPU memory allocated: {max_gpu_memory:.1f} GB")

def cleanup():
    gc.collect()
    torch.cuda.empty_cache()
    time.sleep(3)  # some buffer time to allow memory to clear
    torch.cuda.reset_peak_memory_stats()
    max_memory_allocated = torch.cuda.max_memory_allocated(device) / (1024 ** 3)
    print(f"Maximum GPU memory allocated: {max_memory_allocated:.1f} GB")
```

## 2. Model setup

- This code section sets up the model itself
- Here, we use the "large" GPT-2 model to make things more interesting (you may use the "gpt2-small (124M)" to lower the memory requirements and execution time of this notebook)

```python
from previous_chapters import GPTModel

BASE_CONFIG = {
    "vocab_size": 50257,     # Vocabulary size
    "context_length": 1024,  # Context length
    "drop_rate": 0.0,        # Dropout rate
    "qkv_bias": True         # Query-key-value bias
}

model_configs = {
    "gpt2-small (124M)": {"emb_dim": 768, "n_layers": 12, "n_heads": 12},
    "gpt2-medium (355M)": {"emb_dim": 1024, "n_layers": 24, "n_heads": 16},
    "gpt2-large (774M)": {"emb_dim": 1280, "n_layers": 36, "n_heads": 20},
    "gpt2-xl (1558M)": {"emb_dim": 1600, "n_layers": 48, "n_heads": 25},
}

CHOOSE_MODEL = "gpt2-xl (1558M)"

BASE_CONFIG.update(model_configs[CHOOSE_MODEL])
```

- Now, let's see the GPU memory functions in action:

```python
start_memory_tracking()

model = GPTModel(BASE_CONFIG)
device = torch.device("cuda")
model.to(device)

print_memory_usage()
```
```sh
Maximum GPU memory allocated: 6.4 GB
```

- Additionally, let's make sure that the model runs okay by passing in some example tensor

```python
# Test if the model works (no need to track memory here)
test_input = torch.tensor([[1, 2, 3]]).to(device)
model.eval()

with torch.no_grad():
    model(test_input)
```

- Next, imagine we were pretraining the model and saving it for later use
- We skip the actual pretraining here for simplicity and just save the initialized model (but the same concept applies)

```python
# Training code would go here...

model.train()
torch.save(model.state_dict(), "model.pth")
```

- Lastly, we delete the model and example tensor in the Python session to reset the GPU memory

```python
del model, test_input
cleanup()
```
```sh
Maximum GPU memory allocated: 0.0 GB
```

## 3. Weight loading

- Now begins the interesting part where we load the pretrained model weights
- Let's see how much GPU memory is required to load the previously saved model

```python
# Then load pretrained weights

start_memory_tracking()

model = GPTModel(BASE_CONFIG)
model.to(device)

model.load_state_dict(
    torch.load("model.pth", map_location=device, weights_only=True)
)
model.to(device)
model.eval();

print_memory_usage()
```
```sh
Maximum GPU memory allocated: 12.8 GB
```

- Notice that the memory is 2x as large as in the previous session
- This is because we have the same model in memory twice, for a short period of time:
    - The first time via `model.to(device)`
    - The second time via the code line `model.load_state_dict(torch.load("model.pth", map_location=device, weights_only=True))`; eventually, the loaded model weights will be copied into the model, and the `state_dict` will be discarded, but for a brief amount of time, we have both the main model and the loaded `state_dict` in memory
- The remaining sections focus on addressing this
- But first, let's test the model and reset the GPU memory

```python
# Test if the model works (no need to track memory here)
test_input = torch.tensor([[1, 2, 3]]).to(device)
model.eval()

with torch.no_grad():
    model(test_input)

del model, test_input
cleanup()
```
```sh
Maximum GPU memory allocated: 0.0 GB
```

## 4. Loading weights sequentially

- One workaround for the problem of having the model weights in GPU memory twice, as highlighted in the previous section, is to load the model sequentially
- Below, we:
    - first load the model into GPU memory
    - then load the model weights into CPU memory
    - and finally copy each parameter one by one into GPU memory

```python
start_memory_tracking()

model = GPTModel(BASE_CONFIG).to(device)

state_dict = torch.load("model.pth", map_location="cpu", weights_only=True)

print_memory_usage()

# Sequentially copy weights to the model's parameters
with torch.no_grad():
    for name, param in model.named_parameters():
        if name in state_dict:
            param.copy_(state_dict[name].to(device))
        else:
            print(f"Warning: {name} not found in state_dict.")

print_memory_usage()
```
```sh
Maximum GPU memory allocated: 6.4 GB
Maximum GPU memory allocated: 6.7 GB
```

- As we can see above, the memory usage is much lower than before
- Notice that the memory increases from 6.4 to 6.7 GB because initially, we only have the model in memory, and then we have the model plus 1 parameter tensor in memory (we temporarily move the parameter tensor to the GPU so we can assign it using `".to"` the model)
- Overall, this is a significant improvement
- Again, let's briefly test the model and then reset the GPU memory for the next section

```python
# Test if the model works (no need to track memory here)
test_input = torch.tensor([[1, 2, 3]]).to(device)
model.eval()

with torch.no_grad():
    model(test_input)

del model, test_input, state_dict, param
cleanup()
```
```sh
Maximum GPU memory allocated: 0.0 GB
```

## 5. Loading the model with low CPU memory

- In the previous session, we reduced GPU memory use by loading the weights (`state_dict`) into CPU memory first before copying them one-by-one into the model
- However, what do we do if we have limited CPU memory?
- This section uses PyTorch's so-called `"meta"` device approach to load a model on machines with large GPU memory but small CPU memory
- But first, let's define a convenience function to monitor CPU memory

```python
import os
import psutil
from threading import Thread

def memory_usage_in_gb(func, *args, **kwargs):
    process = psutil.Process(os.getpid())

    # Measure the baseline memory usage before running the function
    baseline_mem = process.memory_info().rss / 1024 ** 3  # in GB

    # Start monitoring memory in a separate thread
    mem_usage = []
    done = False

    def monitor_memory():
        while not done:
            mem_usage.append(process.memory_info().rss / 1024 ** 3)  # Convert to GB
            time.sleep(0.1)

    t = Thread(target=monitor_memory)
    t.start()

    # Run the function
    func(*args, **kwargs)

    # Stop monitoring
    done = True
    t.join()

    peak_mem_usage_gb = max(mem_usage) - baseline_mem
    return peak_mem_usage_gb
```

- To start with, let's track the CPU memory of the sequential weight loading approach from the previous section

```python
def load_sequentially():
    start_memory_tracking()

    model = GPTModel(BASE_CONFIG).to(device)

    state_dict = torch.load("model.pth", map_location="cpu", weights_only=True)

    print_memory_usage()

    # Sequentially copy weights to the model's parameters
    with torch.no_grad():
        for name, param in model.named_parameters():
            if name in state_dict:
                param.copy_(state_dict[name].to(device))
            else:
                print(f"Warning: {name} not found in state_dict.")

    print_memory_usage()

peak_memory_used = memory_usage_in_gb(load_sequentially)
print(f"-> Maximum CPU memory allocated: {peak_memory_used:.1f} GB")
```
```sh
Maximum GPU memory allocated: 6.4 GB
Maximum GPU memory allocated: 6.7 GB
-> Maximum CPU memory allocated: 6.3 GB
```

- Now, suppose we have a machine with low CPU memory but large GPU memory
- We can trade off CPU memory and GPU memory usage by introducing PyTorch's so-called "meta" device
- PyTorch's meta device is a special device type that allows you to create tensors without allocating actual memory for their data, effectively creating "meta" tensors
- This is useful for tasks like model analysis or architecture definition, where you need tensor shapes and types without the overhead of memory allocation

```python
def load_sequentially_with_meta():
    start_memory_tracking()

    with torch.device("meta"):
        model = GPTModel(BASE_CONFIG)

    model = model.to_empty(device=device)

    state_dict = torch.load("model.pth", map_location=device, weights_only=True)

    print_memory_usage()

    # Sequentially copy weights to the model's parameters
    with torch.no_grad():
        for name, param in model.named_parameters():
            if name in state_dict:
                param.copy_(state_dict[name])
            else:
                print(f"Warning: {name} not found in state_dict.")

    print_memory_usage()

peak_memory_used = memory_usage_in_gb(load_sequentially_with_meta)
print(f"-> Maximum CPU memory allocated: {peak_memory_used:.1f} GB")
```
```sh
Maximum GPU memory allocated: 12.8 GB
Maximum GPU memory allocated: 12.8 GB
-> Maximum CPU memory allocated: 1.3 GB
```

- As we can see above, by creating the model on the meta-device and loading the weights directly into GPU memory, we effectively reduced the CPU memory requirements
- One might ask: "Is the sequential weight loading still necessary then, and how does that compare to the original approach?"
- Let's check the simple PyTorch weight loading approach for comparison (from the first weight loading section in this notebook):

```python
def baseline():
    start_memory_tracking()

    model = GPTModel(BASE_CONFIG)
    model.to(device)

    model.load_state_dict(torch.load("model.pth", map_location=device, weights_only=True))
    model.to(device)
    model.eval();

    print_memory_usage()

peak_memory_used = memory_usage_in_gb(baseline)
print(f"-> Maximum CPU memory allocated: {peak_memory_used:.1f} GB")
```
```sh
Maximum GPU memory allocated: 12.8 GB
-> Maximum CPU memory allocated: 4.4 GB
```

- As we can see above, the "simple" weight loading without the meta device uses more memory
- In other words, if you have a machine with limited CPU memory, you can use the meta device approach to directly load the model weights into GPU memory to reduce peak CPU memory usage

## 6. Using `mmap=True` (recommmended)

- As an intermediate or advanced `torch.load` user, you may wonder how these approaches compare to the `mmap=True` setting in PyTorch
- The `mmap=True` setting in PyTorch enables memory-mapped file I/O, which allows the tensor to access data directly from disk storage, thus reducing memory usage by not loading the entire file into RAM if RAM is limited
- Also, see the helpful comment by [mikaylagawarecki](https://github.com/rasbt/LLMs-from-scratch/issues/402)
- At first glance, it may look less efficient than the sequential approaches above:

```python
def best_practices():
  with torch.device("meta"):
      model = GPTModel(BASE_CONFIG)

  model.load_state_dict(
      torch.load("model.pth", map_location=device, weights_only=True, mmap=True),
      assign=True
  )

  print_memory_usage()

peak_memory_used = memory_usage_in_gb(best_practices)
print(f"-> Maximum CPU memory allocated: {peak_memory_used:.1f} GB")
```
```sh
Maximum GPU memory allocated: 6.4 GB
-> Maximum CPU memory allocated: 5.9 GB
```

- The reason why the CPU RAM usage is so high is that there's enough CPU RAM available on this machine
- However, if you were to run this on a machine with limited CPU RAM, the `mmap` approach would use less memory

## 7. Other methods

- This notebook is focused on simple, built-in methods for loading weights in PyTorch
- The recommended approach for limited CPU memory cases is the `mmap=True` approach explained enough
- Alternatively, one other option is a brute-force approach that saves and loads each weight tensor separately:

```python
model = GPTModel(BASE_CONFIG)
# Assume `model` is your trained model
state_dict = model.state_dict()

# Create a directory to store individual parameter files
os.makedirs("model_parameters", exist_ok=True)

# Save each parameter tensor separately
for name, param in state_dict.items():
    torch.save(param.cpu(), f"model_parameters/{name}.pt")

del model
```

```python
def load_individual_weights():

    start_memory_tracking()

    with torch.device("meta"):
        model = GPTModel(BASE_CONFIG)

    model = model.to_empty(device=device)

    print_memory_usage()
    param_dir = "model_parameters"

    with torch.no_grad():
        for name, param in model.named_parameters():
            weight_path = os.path.join(param_dir, f"{name}.pt")
            if os.path.exists(weight_path):
                param_data = torch.load(weight_path, map_location="cpu", weights_only=True)
                param.copy_(param_data)
                del param_data  # Free memory
            else:
                print(f"Warning: {name} not found in {param_dir}.")

    print_memory_usage()

peak_memory_used = memory_usage_in_gb(load_individual_weights)
print(f"-> Maximum CPU memory allocated: {peak_memory_used:.1f} GB")
```
```sh
Maximum GPU memory allocated: 6.4 GB
Maximum GPU memory allocated: 6.4 GB
-> Maximum CPU memory allocated: 0.3 GB
```