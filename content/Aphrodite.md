---
aliases: 
tags: 
modified: 2024-08-15 12:48 PM +07:00
created: 2024-08-15 12:37 PM +07:00
---
#cs/ai/ml/nlp/llm/backend #cs/ai/ml/quantization 

# what
- the official backend engine of [PygmalionAI](https://pygmalion.chat/)
- a LLM inference engine that integrates features from various projects
# feature
- [[Continuous Batching]]
- Efficient K/V management with [[PagedAttention]] from [[vLLM]]
- Optimized CUDA kernels for improved inference
- Quantization support via [[AQLM]], [[AWQ]], [[Bitsandbytes]], [[EXL2]], [[GGUF]], [[GPTQ]], [[QuIP#]], [[Smoothquant+]], and [[SqueezeLLM]]
- Distributed inference
- Variety of sampling methods ([[Mirostat]], [[Locally Typical Sampling]], [[Tail-Free Sampling]], etc)
- 8-bit [[KV Cache]] for higher context lengths and throughput, at both FP8 and INT8 formats.
# note
- the only engine as of now that supports [[GGUF]] quantization with [[Tensor parallelism]]