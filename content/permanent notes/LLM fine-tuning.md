---
created: 2023-12-24 04:27 AM +07:00
modified: 2024-01-05 02:31 AM +07:00
---
- an umbrellas term on training LLMs for a specific task or domain
- [[SFT - Supervised Fine-tuning]]
	- becoming more popular and people start switching to it
- [[IFT - Instruction Fine-tuning]]
- on the order of tens of thousands will get it into the ballpark of LLaMa 2, as long as the quality is good
	- ==quality matters==
- [[RLHF]]
- [[LoRA]]

# Advices from Jonathan Fran
[source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49183080-q-a)
- _loss tells you almost nothing, evaluation is where is all began_ ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49183080-q-a))
	- _you have to know what's you're measuring and what's success looks like_
	- _until you know what you are measuring, don't even start training because you don't know why you are training_
	- has to be a down-stream task
	- loss is not enough
- [[BF16 - brain floating-point]]  is recommended over FP16


