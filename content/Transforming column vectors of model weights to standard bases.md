---
aliases: 
tags: 
modified: 2024-11-29 11:01 AM +07:00
created: 2024-11-27 10:49 AM +07:00
---
#cs/ai/ml/theory #hypothesis #idea/research #question

- Suppose that the column vectors of model weights $W$ are nearly orthogonal (unit ?) vectors
- That would mean if we apply a transformation $W^{d_{feat} \times d_{feat}}_{rot}$ such that 1 of those vectors become a standard basis, then all other vectors will align with other standard bases
  $$W' = W \cdot W_{rot}$$
- Then we would have a nearly sparse matrix $W'$ with a few nearly 1 but not exactly 1 and a lot of nearly 0 but not exactly 0
- Then take the delta of $W'$ with the sparse matrix
$$
\begin{align}
W^* &= round(W')\\
delta_W &= W^* - W'
\end{align}
$$
	$delta_W$ would be a matrix of near 0 values
- What if the values in $delta_W$ follows a Gaussian ? Then we have decomposed a weight matrix $W$ into
	- a lower-rank matrix $W_{rot}$ 
	- a sparse vector $W^*$
	- and a Gaussian representing $delta_W$
- Possible applications:
	- A more efficient way of storing model weights
	- We could force one of the column matrix to be a standard basis before training and then we would have a near-sparse weight matrix for free after training
	- If that works then we can instead of learning a weight matrix, we can learn a sparse matrix and a Gaussian
		- then we can look at this from a graphical modelling perspective or like a VAE 