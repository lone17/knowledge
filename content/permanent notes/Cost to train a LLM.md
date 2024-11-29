---
aliases: 
tags: 
created: 2023-12-23 00:42 AM +07:00
modified: 2024-10-20 18:45 PM +07:00
---
#cs/ai/ml/nlp/llm/training 

source: https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/44579584-hardware-requirements

N: number of parameters
D: number of data

- Approximation for the number of FLOPs needed to train a LLM 
	`FLOPs = 6 * N * D`
	- ignoring self-attention because it is negligible ([[Choosing architecture for training LLM]])

- Optimal amount of data needed according to the [[Chinchilla scaling laws]]
	`D = 20 * N`

- Speed of GPUs (approximately)
	- A100: 312 TFLOP/s = 312e12 FLOP/s
	- H100: 989 TFLOP/s

> => training a 7B model using 64 A100s with Chinchilla optimal amount of data takes  around 3.4 days

- In practice, GPUs are not always fully utilized
	`Actual FLOPs = FLOPs * MFU` ([[MFU - Model FLOPs Utilization]])

- Another computation of utilization is [[HFU - Hardware FLOPs Utilization]]

- [MosaicML benchmark table](https://github.com/mosaicml/llm-foundry/tree/main/scripts/train/benchmarking)
	- Only apply for MosaicML codebase but should give a sense.

- ==A typical really good utilization is around 50%.==