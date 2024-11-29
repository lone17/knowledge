---
created: 2023-12-24 03:48 AM +07:00
modified: 2023-12-31 07:15 AM +07:00
---
#cs/ai/ml/nlp/llm/training 

- Checkpoints are really big
	- optimizer states (2x for Adam) + model (1x) + gradients (1x) = 4x the size
- take a long time to save and load checkpoints
- might not fit on the memory of a single node
- PyTorch has support for [[Sharded checkpointing]]