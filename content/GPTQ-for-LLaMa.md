---
aliases: 
tags: 
modified: 2024-08-14 14:34 PM +07:00
created: 2024-02-15 02:19 AM +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/quantization #cs/ai/ml/nlp/llm/backend 

# what
- A python package for quantizing and running 4 bits quantization of LLaMA using [[GPTQ]].
- Discontinued, the author recommends [[AutoGPTQ]] instead.

# features
- `--act-order`: heuristically quantizing columns in order of decreasing activation size
	- dramatically improves [[GPTQ]]'s accuracy on the OPT-66B outlier model
	- very slow
- `--true-sequential`: performing sequential quantization even within a single Transformer block
- `--act-order` and `--true-sequential`
	-  fix [[GPTQ]]'s ![[GPTQ#^7b67a2]]
	- improve [[GPTQ]] slightly on most models/settings in general

# properties
- `--act-order` is very slow
- only supports linux
# resources
- repo: https://github.com/qwopqwop200/GPTQ-for-LLaMa