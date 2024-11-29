---
created: 2024-02-06 15:06 PM +07:00
modified: 2024-02-07 18:44 PM +07:00
---
#cs/ai/ml/nlp/llm/backend #cs/ai/ml/nlp/llm/inference

source: [GitHub - ggerganov/llama.cpp: Port of Facebook's LLaMA model in C/C++](https://github.com/ggerganov/llama.cpp)

# what
- Port of [[LLaMa]] for inference in pure C/C++

# features
- Plain C/C++ implementation without any dependencies
- ==Apple silicon is a first-class citizen==
- AVX, AVX2 and AVX512 support for x86 architectures
- 2-bit, 3-bit, 4-bit, 5-bit, 6-bit, and 8-bit integer quantization for faster inference and reduced memory use
- Custom CUDA kernels for running LLMs on NVIDIA GPUs (support for AMD GPUs via HIP)
- Vulkan, SYCL, and (partial) OpenCL backend support
	- [support Intel GPU with SYCL](https://github.com/ggerganov/llama.cpp/blob/master/README-sycl.md)
- ==CPU+GPU hybrid inference== to partially accelerate models larger than the total VRAM capacity
- ==No longer supports [[GGML]] ==