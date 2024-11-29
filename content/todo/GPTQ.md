---
aliases: 
tags: 
modified: 2024-09-10 23:57 PM +07:00
created: 2024-02-05 22:31 PM +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/quantization #todo/read

# what
An one-shot weight quantization method.
# features
- 2/3/4 bits quantization 
- a 3-bit quantized matrix full-precision vector product CUDA kernel
	- optimized for OPT-175B running on 1xA100 or 2xA6000
		- on the A100, e.g. 1.9x -> 3.25x generation speedup for OPT-175B
		- may thus yield suboptimal performance on smaller models or on other GPUs
	- activated via `--faster-kernel`
# properties
- Works really slow on CPU (for CPU, use [[GGLM]] or [[GUFF]])
- strangely bad performance on 7B models ^7b67a2
	- fixed by [[GPTQ-for-LLaMa]]'s `--act-order` and `--true-sequential`

# Dequantize
![[assets/GPTQ/attachment.jpg]]

# resources
- repo: https://github.com/IST-DASLab/gptq
- paper: [[2210.17323] GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers](https://arxiv.org/abs/2210.17323) #todo/read 