---
aliases: 
tags: 
created: 2023-12-23 02:19 AM +07:00
modified: 2024-09-02 17:10 PM +07:00
---
#cs/ai/ml/training/distributed 

# What

![[assets/Tensor parallelism/attachment.jpg]]
- Matrix multiplication factorization
	- split matrix to create smaller matrices to do multiplication.
	- $Z = f(XA)B -> Z = f(XA_1)B_1 + f(XA_2)B_2$
- Do $A_1B_1$ on one GPU and $A_2B_2$ on another GPU, or both on the same GPU but separately

# Hence
- reduce the amount of memory needed for both the weights and activations