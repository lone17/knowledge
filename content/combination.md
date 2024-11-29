---
modified: 2024-02-17 05:50 AM +07:00
created: 2024-02-16 22:17 PM +07:00
---
#maths/discrete/combinatorics 

# what
The number of different ways to choose $k$ objects from $n$ objects.

# symbol
$$
\newcommand{\Comb}[2]{{}^{#1}C_{#2}}
\Comb{n}{k}
$$
or
$$
\binom {n}{k}
$$

# formula
$$
\newcommand{\Perm}[2]{{}^{#1}\!P_{#2}}
\newcommand{\Comb}[2]{{}^{#1}C_{#2}}

\begin{align}
\binom{n}{k} = \Comb{n}{k} &= \frac{n!}{k!(n-k)!} 
\\
\\
& = \frac{\Perm{n}{k}}{k !}
\end{align}
$$
where $\Perm{n}{k}$ is the [[permutation]].
