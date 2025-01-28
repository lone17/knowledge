---
aliases: 
tags: 
modified: 2024-10-09 16:06 PM +07:00
created: 2024-06-28 05:36 +07:00
---
#idea/research #cs/ai/ml 
# what
- Learn to fit each sub-distribution in the data in parallel using separate set of weights 
- This could be as a learning paradigm, with another paradigm being [[Exploiting the Bias-Variance trade-off for data fitting]]
# hypothesis
1. real-life distributions are combinations of sub-distributions
2. MLP can learn to fit sub-regions (sub-distributions) of the data
# methodology
- (1) is tricky to prove, but we can artificially create datasets that fit that description and perform experiment on it:
	- e.g. a multi-task dataset where each task represents a sub-distribution
- need to prove (2) starting with simple MLP
	- use a shallow MLP to approximate a simple function e.g. 1 period of the sine wave
		- show that MLP can be trained to fit segments of the function
		- show the effect of different activation functions: 
			- ReLU: like a linear gated unit
			- SELU: similar to ReLU but can be smoother
			- Tanh: smooth curves
			- ...
		- analyse the effect on multiple period of sine
- discuss how [[Universal Approximation Theorems]] relate to this
- discuss how [[KAN]] relate to this
- explore the idea of [[Discriminative-Generative Learning]]
- analyse the effect of depth vs width

# related papers
- Beyond neural scaling laws - beating power law scaling via data pruning ![[Beyond neural scaling laws - beating power law scaling via data pruning#Annotations|no-h1]]

