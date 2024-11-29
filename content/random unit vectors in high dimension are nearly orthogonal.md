---
aliases: 
tags: 
modified: 2024-11-05 18:30 PM +07:00
created: 2024-06-12 04:47 AM +07:00
---
#maths/algebra #cs/ai/ml/theory 

# why
For 2 n-dimensional unit vectors $x = [x_1, x_2, \ldots, x_n]$  and $y = [y_1, y_2, \ldots, y_n]$
- The $cosine$ of the angle between them is $\frac{x \cdot y}{\lVert x \rVert \lVert y \rVert} = \sum^{n}_{i=1} x_i y_i$
- By the [[Central Limit Theorem]], $\sum^{n}_{i=1} x_i y_i$ approximates a normal distribution with mean zero as $n \rightarrow \infty$
- So as $n \rightarrow \infty$, the $cosine$ is more likely to be around the mean which is 0, which means the 2 vectors are more likely to be orthogonal
# notes
- The vector must be sample from normal distribution, not uniform distribution. So one should use `np.rand.normal` and `torch.normal` instead of `np.rand.random` and `torch.random`
![[generate random unit vectors]]