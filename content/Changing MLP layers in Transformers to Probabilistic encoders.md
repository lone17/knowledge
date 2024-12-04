---
aliases: 
tags: 
created: 2024-11-22 15:21 PM +07:00
modified: 2024-12-04 15:09 PM +07:00
---
#idea

In [[Transformer Feed-Forward Layers Are Key-Value Memories]], the interaction between the input $x$ and each column $k_i$ of the first parameter matrix is viewed as a conditional distribution of $k_i$ given $x$:
![[Transformer Feed-Forward Layers Are Key-Value Memories#^ua44mgxc]]

What if we employ the idea of VAE and make $x$ parameterizing $p(k_i|x)$ as Gaussian, something like:
$$
\begin{align}
\mu_x &= M(x) \\
\\
p(k_i|x) &\propto e^{\frac{-1}{2} (k_i - \mu_x)^2}
\end{align}
$$
which is a Gaussian with mean give by $x$ and a fixed std.

The intuition is, given an input $x$ that produces $\mu_x$, if $k_i$ is distributed near $\mu_x$ then it is more likely to be related to $x$. This will force the model to learn $k_i$ such that it's distributed near $\mu_x$.

But perhaps the MLP already has this property ? As $x \cdot k_i$ is bigger when $x$ and $k_i$ are more co-linear, the "almost co-linear" region surrounding $x$ can be seen as a distribution parameterized (partly or entirely) by $x$.