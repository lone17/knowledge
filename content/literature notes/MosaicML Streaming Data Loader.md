---
modified: 2024-01-15 15:26 PM +07:00
created: 2023-12-01 04:58 AM +07:00
---
#cs/ai/ml/nlp/llm/tools #cs/ai/ml/nlp/llm/data

[GitHub - mosaicml/streaming: A Data Streaming Library for Efficient Neural Network Training](https://github.com/mosaicml/streaming)

- Allow data to be **stored in many places** during training.
- **Ensure determinism** even when training crashes or the number of GPUs changes.
- Determinism is really tricky. Key ideas: 
	- The idea of virtual GPUs.
	- As part of spinning up streaming data loader, you actually set a number of virtual GPUs.
	- The number of virtual GPUs have to be divisible by the number of physical GPUs or vice versa.
	- Once the number of virtual GPUs are fixed, determinism is preserved.
	- **=> Virtual GPUs act as a layer of abstraction that determine the sequence that you look at data.**
- allow for elastic sharded checkpointing
	- allow `n` sharded of checkpoints to be able to resume using `m`  number of GPUs (`m != n`)
	- e.g. have a checkpoints for 512 GPUs and resumes just fine on 504 GPUs (or whatever the number)