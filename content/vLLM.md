---
aliases: 
tags: 
modified: 2024-08-26 16:32 PM +07:00
created: 2024-05-09 17:06 PM +07:00
---
#cs/ai/ml/nlp/llm/backend  #cs/ai/ml/nlp/llm/inference 

# about
- vLLM is a fast and easy-to-use library for LLM **inference and serving**.
# resources
- repo: [GitHub - vllm-project/vllm: A high-throughput and memory-efficient inference and serving engine for LLMs](https://github.com/vllm-project/vllm)
- paper: [[2309.06180] Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180)
# features
### vLLM is fast with:
- State-of-the-art serving throughput
- Efficient management of attention key and value memory with [[Paged Attention]]
- Continuous batching of incoming requests
- Fast model execution with CUDA/HIP graph
- Quantization: [[GPTQ]], [[AWQ]], [[SqueezeLLM]], FP8 [[KV Cache]]
- Optimized CUDA kernels
### vLLM is flexible and easy to use with
- Seamless integration with popular **Hugging Face models**
- **High-throughput** serving with various decoding algorithms, including _parallel sampling_, _beam search_, and more
- **Tensor parallelism** support for distributed inference
- **Streaming** outputs
- **OpenAI-compatible API server**
- Support NVIDIA GPUs and AMD GPUs
- (Experimental) Prefix caching support
- (Experimental) Multi-lora support
### vLLM seamlessly supports many Hugging Face models