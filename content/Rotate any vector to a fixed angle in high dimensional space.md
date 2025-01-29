---
aliases: 
tags: 
modified: 2025-01-30 05:06 +07:00
created: 2025-01-30 03:28 +07:00
---
#maths/algebra 

# Problem statement
In an n-dimensional, given a 2D subspace $P$ and a target direction (unit vector) $d \in P$, how to rotate a random vector $x$ along $P$ such that the projection of $x_{rotated}$ on to $P$ aligned with $d$.

# Idea
## Naive approach
A naive approach would be to [[Rotate any vector to a fixed angle in high dimensional space]], which involves the following steps:
1. Project $v$ onto the $\mathbb{R}^2$ mapping of $P$ to get $proj^x_P$
2. Find the angle $\theta$ between $proj^x_P$ and $d$
3. Calculate the rotation matrix  $R$ using ![[Rotate from one vector to another vector in high dimensional space#^e160cf]]
4. Apply $R$ on $v$

Each of these steps will involve 1 matrix multiplication, except for step 3 (if using eq. (2) with precomputed values), resulting in 3 matrix multiplications in total. This is not efficient and we can do better.

## Rotation with only 1 matrix multiplication
Looking at eq. (1) from above, $[u \; v] \, R_\theta \,[u \; v]^T$ computes the to-be-rotated component of $x$ by
- map down to $\mathbb{R}^2$
- do the rotation by $\theta$
- then map back up

Since this transformation preserves the norm, we can instead precompute this for the unit vector, then scale the result by $|proj^x_P|$.

Thus, the transformation becomes:
$$
\begin{align}
proj^x_P  &= (uu^T + vv^T) \cdot x \\
\\
R \cdot x &= x - proj^x_P + |proj^x_P| \cdot [u\;v] \; R_{\theta + \theta_x} \; [1\;0]^T
\end{align}
$$
with $\theta_x$ be the angle between $proj^x_P$ and the unit vector $[1 \; 0]$.

As the result, only one matrix multiplication is needed to compute $proj^x_P$, other multiplications can be precomputed.
# Implementation
```python
def rotate_to_target(x, target_degree, basis1, basis2):      
    assert len(basis1.shape) == 1
    assert len(basis2.shape) == 1
    assert basis1.shape == basis2.shape

    n = basis1.shape[-1]

    # ensure bases are orthonormal
    u = basis1 / np.linalg.norm(basis1)
    v = basis2 - (basis2 @ u) * u
    v /= np.linalg.norm(v)

    theta = np.deg2rad(target_degree)
    cos_theta = np.cos(theta)
    sin_theta = np.sin(theta)

    P = np.outer(u, u) + np.outer(v, v)

    # rotate counter-clockwise
    R_theta = [
        [cos_theta, -sin_theta],
        [sin_theta, cos_theta]
    ]

    uv = np.column_stack([u, v])

    rotated_component = uv @ R_theta @ np.array([1, 0])
    Px = x @ P
    scale = np.linalg.norm(Px, axis=-1, keepdims=True)

    result = x - Px + scale * rotated_component

    return result
```