---
aliases: 
tags: 
modified: 2025-04-14 12:24 +07:00
created: 2025-03-06 23:37 PM +07:00
---
#physics/quantum

[Something Strange Happens When You Trust Quantum Mechanics - YouTube](https://youtu.be/qJZ1Ez28C-A?si=EcQURIOEoj76UzEP)

- light travels in all possible paths to get from A to B
- each path ends at different phrase
- The path that we see is the one where the phrase are constructively overlapped
	- this path minimize the Action (the law of least action)
	- can we connect this idea to #cs/ai/ml/mechanistic-interpretability ? #question
- other paths are cancelled out by each others

$$
\begin{align}
% Orthonormal basis vectors
\\
\mathbf{u} = \frac{\mathbf{u}}{\|\mathbf{u}\|}
\\
\mathbf{v} = \frac{\mathbf{v} - (\mathbf{v}^T\mathbf{u})\mathbf{u}}{\|\mathbf{v} - (\mathbf{v}^T\mathbf{u})\mathbf{u}\|}

  

% Projection matrix
\\
P = \mathbf{u}\mathbf{u}^T + \mathbf{v}\mathbf{v}^T

  

% Rotation matrix
\\
R_\theta = \begin{pmatrix}

\cos\theta & -\sin\theta \\

\sin\theta & \cos\theta

\end{pmatrix}

  

% Rotated component
\\
\mathbf{r} = [\mathbf{u} \; \mathbf{v}] R_\theta \begin{pmatrix} 1 \\ 0 \end{pmatrix}

  

% Final transformation (non-adaptive mode)
\\
\mathbf{h}' = \mathbf{h} - P\mathbf{h} + \|P\mathbf{h}\|\mathbf{r}

  

% Adaptive mode mask
\\
\mathbf{m} = \mathbb{1}\{\mathbf{h}^T\mathbf{d} > 0\}

\\  
% Final transformation (adaptive mode)

\mathbf{h}' = \mathbf{h} + \mathbf{m} \odot (\|P\mathbf{h}\|\mathbf{r} - P\mathbf{h})
\end{align}
$$