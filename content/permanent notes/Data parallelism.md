---
aliases: 
tags: 
created: 2023-12-23 02:10 AM +07:00
modified: 2024-09-02 17:10 PM +07:00
---
#cs/ai/ml/training/distributed


# What

![[assets/Data parallelism/attachment.jpg]]
- multiple GPUs
- a separate copy of the model on each GPU
- feed different data on each GPU
- average the gradients when done

# Hence
- speed up training