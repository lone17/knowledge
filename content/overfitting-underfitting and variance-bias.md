---
aliases: 
tags: 
modified: 2024-11-30 17:38 PM +07:00
created: 2024-02-12 01:30 AM +07:00
---
#cs/ai/ml/theory 

source: [overfitting - Relation between "underfitting" vs "high bias and low variance" - Data Science Stack Exchange](https://datascience.stackexchange.com/a/117211)

# Underfitting
- refers to a model that is not complex enough to capture the underlying trend in the data.
	- It is not able to capture the patterns in the data well and as a result, it performs poorly on both the training and the test sets.

# High bias
- [[Intuition on understanding the meaning of variance and bias for Machine Learning#^77bb63|Bias]] refers to the tendency of a model to consistently make the same types of errors, regardless of the input data. 
	- A model with high bias pays little attention to the training data and oversimplifies the model, leading to poor performance on the training and test sets.

# [[#High bias]] and [[#Underfitting]]
- [[#Underfitting]] is often caused by a model with [[#High bias]], which means that it is oversimplifying the problem and is not able to capture the complexity of the data.

# Overfitting
- refers to a model that is too complex and fits the noise in the training data, rather than the underlying trend.
	- It performs well on the training set, but poorly on the test set.

# High variance
- [[Intuition on understanding the meaning of variance and bias for Machine Learning#^b2ae1e|Variance]] refers to the sensitivity of the model to small fluctuations in the training data.
	- A model with high variance pays too much attention to the training data and ends up learning the noise in the data, rather than the underlying trend.

# [[#High variance]] and [[#Overfitting]]
- [[#Overfitting]] is often caused by a model with [[#High variance]], which means that it is too sensitive to the noise in the training data and is not able to generalize well to unseen data.