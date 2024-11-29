---
aliases: 
tags: 
modified: 2023-12-31 07:15 AM +07:00
created: 2023-12-23 02:05 AM +07:00
---
#cs/ai/ml/nlp/llm/training 

# How much memory ?
- 2 bytes per parameter for the weights
- 4 bytes per parameter for the optimizer state (for Adam, first and second moment estimates)
	- Optimizer state often stores up to 2 full copies of the model
- 2 bytes per parameter for the gradients
- e.g. For a 7B model: 8 * 7e9 = 5.6e10 = 52GB
	- doesn't even include the activations

# What to do ? - Distribute.
- [[Data parallelism]] -> Nope. Can't one model copy per GPU.
- [[Tensor parallelism]]
- [[Pipeline parallelism]]