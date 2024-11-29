---
aliases: 
tags: 
created: 2023-12-23 01:27 AM +07:00
modified: 2024-02-21 16:52 PM +07:00
---
#cs/ai/ml/nlp/llm/training 

# what
- ==how many flops of those available flops are used properly==
    - i.e. the utilization from the floating point operations required for a single forward/backwards pass of the model
    - only cares about the actual FLOPs that effectively train the model (the number that is counted in the first operation)
    - ======does not account for the additional compute== required for other implementation details (such as activation checkpointing)
        - not every operation is actually productive in moving the model forward
            - e.g. [[Activation Checkpointing]], some of the FLOPs are not being used productively, they are just being used for re-computation.
# calculation
- run the model and count the number of FLOPs in the first operation
- run the model for a while and calculate the tokens per second (every token is doing the number of FLOPs calculated above)
# note
- `nvidia-smi` does not tell the MFU

# references
- [MosaicML benchmarking](https://github.com/mosaicml/llm-foundry/tree/main/scripts/train/benchmarking#dfu)

```ad-quote
Per token, each parameter is used for a MAC (2 FLOPS) per network operation. Neural Network training has 3 network operations: forward pass, backward pass, and computation of parameter gradient.
    
The attention mechanism the forward pass FLOPS are: 
`attn_flops_per_seq = n_layers * 2 * 2 * (d_model * (seq_len**2))`

    ```
    flops_per_token = 2 * n_params
    flops_per_seq = flops_per_token * seq_len
    mfu* = 3 * flops_per_seq * seq_per_sec / (gpu_num * GPU_AVAILABLE_FLOPS)
    
    attn_flops_per_seq = n_layers * 2 * 2 * (d_model * (seq_len**2))
    mfu = (3 * flops_per_seq + 3 * attn_flops_per_seq) * seq_per_sec / (gpu_num * GPU_AVAILABLE_FLOPS)
    ```
```

