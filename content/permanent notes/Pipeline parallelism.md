---
aliases: 
tags: 
created: 2023-12-23 02:36 AM +07:00
modified: 2024-09-02 17:09 PM +07:00
---
#cs/ai/ml/training/distributed 

# What 

![[assets/Pipeline parallelism/attachment.jpg]]
- have each layer of the network on a different GPU
- constantly sending data forward and backward through the GPUs

# Hence
- a very complicated strategy
- very scalable
- bubbles (low utilization):
	- all other GPUs is idle when the 1st batch is in the 1st GPU
	- the GPUs become idle as the last batch is passed through
	- need to do a lot of data before this makes sense because these bubbles cause cost a lot of utilization