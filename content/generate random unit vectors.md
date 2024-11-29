---
aliases: 
tags: 
modified: 2024-11-17 22:10 PM +07:00
created: 2024-06-12 05:59 AM +07:00
---
#maths/geometry #maths/statistics 

# How
- Draw from a standard distribution for each dimension.
- Do not draw from a uniform distribution.
	- Or will need to apply [[Box-Muller transform]]
# Implementation
```python
import numpy as np
import torch

# numpy
v = np.random.normal(0, 1, size)

# torch
v = torch.normal(torch.tensor([0.0] * size), torch.tensor([1.0] * size))
```
# Why that works
- Considering a 2D space, the probability of a point being at $(x, y)$ is $P(x)P(y)$
- The PDF for the standard distribution is $P(x) = \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2}$, which is roughly in the form of $e^{x^2}$
- Thus $P(x)P(y)$ is in the form of $e^{x^2 + y^2}$, which is a function of the distance to the origin
- So the resulting distribution is radially symmetric around the origin
# An intuitive explanation of why uniform sampling don't work
- Considering a 2D space, uniformly sampling from both dimension results in a square population
- Whereas a random distribution in 2D space should be a circle
- This is called the corner effect