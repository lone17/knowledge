---
aliases: 
tags: 
created: 2024-06-14 17:14 PM +07:00
modified: 2024-08-29 18:51 PM +07:00
---
#cs/ai/ml/theory 

# what
A mechanism to store vectors and allow retrieving them approximately

$$
M = v_0 k_0^T + v_1 k_1^T + v_2 k_2^T + ...
$$
where
- $M$ is the associative memory matrix, which is a running sum of dot products of pairs of unit vectors
- $k_i$ and $v_i$ are unit vectors

# how it works
In order to retrieve $v_i$ (approximately), multiply $M$ with $k_i$. This works because:
- $k_i k_i = 1$
- $k_i k_j \approx 0 \quad (i \neq j)$ : because of [[random unit vectors in high dimension are nearly orthogonal]]
Hence:
$$
\begin{align}
M \cdot k_i 
&= v_0 k_0^T k_i + v_1 k_1^T k_i + v_2 k_2^T k_i + \cdots + v_i k_i^T k_i + \cdots \\
&\approx v_0 \cdot 0 \enspace\: + v_1 \cdot 0 \enspace\: + v2 \cdot 0 \enspace\: + \cdots + v_i \cdot 1 \enspace\: + \cdots \approx v_i
\end{align}
$$
