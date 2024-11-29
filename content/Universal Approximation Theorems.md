---
aliases: 
tags: 
modified: 2024-07-22 16:25 PM +07:00
created: 2024-06-30 00:31 AM +07:00
---
#cs/ai/ml/theory 
# what
**Universal Approximation Theorems** are theorems of the following form: 
- For each function $f$ from a function space, there exists a neural network $\phi$ such that it approximates $f$ according to some criteria.
- They are **existence theorems**. They simply state that there *exists* a neural network but *do not provide* any way to actually *find* such neural network.
- They are **litmit theorems**. They state that, if there are *enough neurons*, there *exists* a neural network that approximate $f$ within a criterion of closeness $\epsilon > 0$. There is *no guarantee* that a *finite* size is enough.
