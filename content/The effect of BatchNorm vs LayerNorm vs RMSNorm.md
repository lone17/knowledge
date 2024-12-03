---
aliases: 
tags: 
modified: 2024-12-03 22:24 PM +07:00
created: 2024-11-19 22:06 PM +07:00
---
#cs/ai/ml/theory #hypothesis

# Input normalization in ML
- The purpose of normalization is to make the distribution of the input (to any layer) stable
	- To prevent *internal covariate shift* where the input distribution changes as the previous layers are updated[^1]
	- Uncontrolled growth of activations in unnormalized networks[^1]

- Previously, people use BatchNorm but nowadays LayerNorm and RMSNorm is more popular
	- RMSNorm is more preferred over LayerNorm

# BatchNorm vs LayerNorm and RMSNorm 
#intuition 
- **BatchNorm** acts across the batch dimension, making the input distribution to be an estimate of the data distribution
	- Treating data points as samples from a distribution
	- Cares about how the data is distributed
	- Captures the dynamic between data points (inter-sample dynamic): for each feature, how importance a data point is compared to other data points
	- Might explain why stochastic batch is needed so that the samples in a batch have a similar distribution as the whole dataset
- **LayerNorm** and **RMSNorm** acts across the feature dimension, making the input to be a collection of distributions
	- Treating each data point as a distribution of features
	- Cares about how the features are distributed in each data point
	- Each feature is a sample from that distribution
	- Captures the dynamic between features of a data point (inter-feature dynamic): for each data point, how importance a feature is compared to other data points
	- Might explain why Curriculum Learning is better for LLM[^2]
		- Data for the same task/domain are variance of some distribution
		- Using batches of data for the same task/domain might also introduce inter-sample dynamic, which is better for learning

# LayerNorm vs RMSNorm
- **LayerNorm** normalizes the features by mean shifting and std scaling
	- This does not change the distribution of features in a data point
	- But over time, due to the skip connections, activations are added together over and over again
	- Due to the [[Central Limit Theorem]], the activations will eventually become Gaussian regardless of the initial distribution
		- although the initial distribution might already be Gaussian #question
- **RMSNorm** normalizes the features by scaling by RMS ^53c1d6
	- This essentially convert the activations to unit vectors
	- Which means the features have standard distribution
# references
[^1]: [[Root Mean Square Layer Normalization]]
[^2]: [[Instruction Tuning with Human Curriculum]]