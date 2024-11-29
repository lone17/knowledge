---
aliases: 
tags: 
created: 2024-02-15 02:00 AM +07:00
modified: 2024-08-14 14:32 PM +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/quantization  #todo/read
# what
A python package for LLMs quantization based on [[GPTQ]].
> **by the time v1.0.0 is officially released, AutoGPTQ will be able to serve as an extendable and flexible quantization backend that supports all GPTQ-like methods and automatically quantize LLMs written by Pytorch**.

# features
- python API
- quantize Pytorch models
- load GPTQ quantized models
- supported evaluation tasks: `LanguageModelingTask`, `SequenceClassificationTask` and `TextSummarizationTask`
	- see https://github.com/AutoGPTQ/AutoGPTQ?tab=readme-ov-file#supported-evaluation-tasks
# properties
- not all models are supported
	- see https://github.com/AutoGPTQ/AutoGPTQ?tab=readme-ov-file#supported-models
- not all evaluation tasks are supported
	- see https://github.com/AutoGPTQ/AutoGPTQ?tab=readme-ov-file#supported-evaluation-tasks
# resources
repo: https://github.com/PanQiWei/AutoGPTQ)
