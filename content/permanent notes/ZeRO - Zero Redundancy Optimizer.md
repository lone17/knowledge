---
created: 2023-12-23 03:11 AM +07:00
modified: 2024-01-20 16:51 PM +07:00
---
source: 
- [Zero Redundancy Optimizer - DeepSpeed](https://www.deepspeed.ai/tutorials/zero/)
- https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182168-memory-usage

DeepSpeed pioneered a really great implementation. Today, people tend to use [[FSDP - Fully Sharded Data Parallel]]
# What
- ZeRo reduces the memory consumption of each GPU by partitioning the various model training states (weights, gradients, and optimizer states) across the available devices (GPUs and CPUs) in the distributed training hardware. 
- implemented as incremental stages of optimizations, where optimizations in earlier stages are available in the later stages.

# How

## Stage 1 - Optimizer states sharding
>The optimizer states (e.g., for [Adam optimizer](https://arxiv.org/abs/1412.6980), 32-bit weights, and the first, and second moment estimates) are partitioned across the processes, so that each process updates only its partition.

- optimizer states are not needed until the very end
- while doing the passes on the network, shard the optimizer states: break it up (let say we are training on 64 GPUs) into 64 pieces and keep one piece in each GPU
	- => reduce the optimizer state per GPU by 64x
	- => save a bunch of memory
- there is a cost: must use and update the optimizer in a distributed way

## Stage 2 - Gradients sharding (corresponding to optimizer states)
>The reduced 32-bit gradients for updating the model weights are also partitioned such that each process retains only the gradients corresponding to its portion of the optimizer states.  

- After stage 1, each GPU will only have a part of the optimizer so it only needs the part of the gradients that corresponds to that.
	- => share the gradients, shard them among all the GPUs
	- => save a bunch more of memory

## Stage 3 - Model sharding (one layer at a time)
>The 16-bit model parameters are partitioned across the processes. ZeRO-3 will automatically collect and partition them during the forward and backward passes.

- If you use a layer of the network, every GPU must have that layer. Otherwise it can't compute the forward pass.
- But once you are done with that layer, you can shard it (divide it into 64 pieces and keep one on each GPU).
- Then collect all the pieces of the next layer on each GPU, use it and then shard it again.
	-> spread the model weights over all the GPUs
	==-> like treating all the GPUs like one big shared memory== instead of different individual memory