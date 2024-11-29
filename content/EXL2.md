---
aliases: 
tags: 
modified: 2024-08-14 14:33 PM +07:00
created: 2024-02-15 01:44 AM +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/quantization

# what
A quantization format 
- based on the same method as [[GPTQ]]
- supports 2,3,4,5,6 and 8-bit quantization.

# features
- supports 2,3,4,5,6 and 8-bit quantization
- allows for mixing quantization levels within a model 
	- to achieve any average bitrate between 2 and 8 bits per weight
	- possible to apply multiple quantization level to each linear layer
		- more important weights (columns) are quantized with more bits (akin to sparse quantization)
- automatic parameter selection
	- by quantizing each matrix multiple times
	- measuring the quantization error for each possible setting, per layer
	- return a combination that 
		- minimize the maximum quantization error over the entire model 
		- meet a target average bitrate