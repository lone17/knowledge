---
aliases:
  - RoPE
tags:
  - "#cs/ai/ml/nlp/llm"
  - "#paper"
created: 2023-12-23 06:08 AM +07:00
modified: 2024-11-29 13:01 PM +07:00
paper_url: https://arxiv.org/pdf/2104.09864
---
# Intuition
$$
R^d_{\Theta, m} = 
\begin{bmatrix}
cos(m\theta_1) & -sin(m\theta_1) & 0 & 0 & \cdots & 0 & 0 \\
sin(m\theta_1) &  cos(m\theta_1) & 0 & 0 & \cdots & 0 & 0 \\
0 & 0 & cos(m\theta_2) & -sin(m\theta_2) & \cdots & 0 & 0 \\
0 & 0 & sin(m\theta_2) &  cos(m\theta_2) & \cdots & 0 & 0 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & 0 & 0 & \cdots & cos(m\theta_{d/2}) & -sin(m\theta_{d/2}) \\
0 & 0 & 0 & 0 & \cdots & sin(m\theta_{d/2}) &  cos(m\theta_{d/2})
\end{bmatrix}
$$
- RoPE applies rotation of different frequency on $d/2$ 2D subspaces
	- This treats the standard basis vectors as the bases
	- The generalization rotating on 2D spaces spanned by non-standard basis vectors is described in [[Rotate from one vector to another vector in high dimensional space]]
- " the intuition behind RoPE is that we can represent the token embeddings as complex numbers and their positions as pure rotations that we apply to them. If we shift both the query and key by the same amount, changing absolute position but not relative position, this will lead both representations to be additionally rotated in the same manner---as we will see in the derivation---thus the angle between them will remain unchanged and thus the dot product will also remain unchanged." [^1]
	-  Instead of working in the usual $R^d$, we will work in $C^{d/2}$ by considering consecutive pairs of elements of the query and key vectors to be a single complex number. Specifically, instead of viewing $q = (q_1, q_2, q_3, q_4, \cdots, q_d)$ as a d-dimensional real vector we view it as $q = (q_1 + iq_2, q_3 + iq_4, \cdots q_{d−1} + iq_d) \in C^{d/2}$.
# Notes
From [[Training and Fine-tuning LLMs - W&B course]]
- actually learn positional embeddings
- a popular choice
- tend to slow things down a little bit
- now there are lots of interesting ways of interpolating to get extrapolation with RoPE
- used by LLaMa, Adept.ai (for the 8B model)

[^1]: [Rotary Embeddings: A Relative Revolution | EleutherAI Blog](https://blog.eleuther.ai/rotary-embeddings/)