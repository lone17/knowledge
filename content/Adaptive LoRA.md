---
aliases: 
tags: 
modified: 2024-07-22 13:39 PM +07:00
created: 2024-07-09 05:01 AM +07:00
---
#cs/ai/ml/nlp/llm/training #idea/research

# Motivation
- [[LoRA]] tries to approximate the weights update matrices using 2 lower-ranked matrices
  $$\Delta W_{m \times n} ~ \approx A_{m \times r} \cdot B_{n \times r}^T$$
- the choice of $r$ affects how well the approximation can be and is fixed

# Idea
Dynamically change $k$ during training
- Separately for each layer
- Start with a reasonable $k$, during training
	- Lower $r$ (remove columns) when are redundant columns
	- Increase $r$ (add columns) when approximation score is low for too long
		- how to evaluate approximation score ? #question
		- how long is too long ? #question
		- must be so that 
- Adding/removing columns must not change the approximation significantly. How ? #question