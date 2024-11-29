---
created: 2023-12-24 03:19 AM +07:00
modified: 2024-01-01 22:11 PM +07:00
---
#cs/ai/ml/training 

# Loss spikes
- in billion-sized models, _you are going to run into loss spikes if you try to push your learning rate high enough to get SOTA results_ ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182973-training-observability))
- for reasons that people don't usually understand
## Resolution
- there are some algorithmic ones
- one of the most popular ones in the literature (in practical settings) is just: ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182973-training-observability))
	- roll back to a checkpoint
	- change the random seed
	- change the learning rate, lower it
	- retry

# Hardware failures
- GPUs die or run into different issues pretty frequently ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182973-training-observability))
- A persistent problem at MosaicML ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182973-training-observability))
## Consequences and Resolution
- once a GPU dies, the training job dies
	- ==-> need a fault-tolerant way to train==
	- just have to resume from a checkpoint
- usually dies in group of 8, because on major cloud providers they're solder to the mother board to get the fast multi-GPU interconnection.
	- can't just swap out 1, must swap the whole board or a whole node
- sometimes you cannot resume training if you have less GPUs:
	- maybe your checkpoint is divided into the number of GPUs
	- you might lose determinism
## Mitigation
- Automatic detection of failures
	- look for Nvidia errors
	- look for failure conditions, e.g.: the job suddenly gets really slow
	- identify the problems proactively
		- a lot of the time it won't just crash, it would just get really slow or get stuck somewhere
		- oftentimes the error messages can be cryptic if you just look at the command line
	- keep spare GPUs available:
		- use them for lower-priority stuff 
		- swap them in when they're needed
	- [[Sharded checkpointing]]
		- checkpoints are big ([[Checkpointing for LLM training]])
	- Data loaders with random access
		- after loading a checkpoint, you may have to go all the way to through the data loader to get back to where it were -> take a long time for large dataset
		- Data loaders from MosaicML ([[MosaicML Streaming Data Loader]]) allow random access