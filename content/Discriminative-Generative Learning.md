---
aliases: 
tags: 
modified: 2024-06-28 06:00 AM +07:00
created: 2024-06-28 05:52 AM +07:00
---
#idea/research 

- base on these hypothesis ![[Mixture-of-Distribution learning#hypothesis]]
- design a model that learn the sub-distributions in the data while also ensure those sub-distributions are separated
	- the distance between the distributions of latent vectors (at some middle layer or any part of network) and the distributions of the final output must be similar/proportional/equivalent
		- datasets can be artificially created to fit this description, i.e. the separation are known, and inductive bias can be used to design the algorithm
		- then try to make the algorithm learn to cluster the data without inductive bias