---
aliases: 
tags: 
modified: 2024-02-24 23:06 PM +07:00
created: 2024-02-16 21:27 PM +07:00
---
#maths/discrete/combinatorics 

# what
a.k.a. the _derangement_ number

$!n$: How many ways to arrange the $n$ objects, excluding any permutation where an object is in its original position.

# formula
## as sum
$$
\begin{align}
!n 
&= n!\,\sum_{k = 0}^{n} \frac{(-1)^k}{k!} \tag{1} \\
&= \sum_{k = 0}^{n} \frac{n!\, (-1)^{n - k}}{(n-k)!} \tag{2} \\
&= \sum_{k = 0}^{n} k!\, (-1)^{n - k}\, \binom{n}{k} \tag{3}
\end{align}
$$
where $\binom{n}{k}$ is the [[combination]]. 
## as recursion
$$
\begin{align}
!n &= n \cdot !(n - 1) + (-1)^n \tag{4} \\
\\
!n &= (n - 1) \big(\,!(n - 2) \,+\, !(n - 1) \big) \tag{5}

\end{align}
$$
## transformation between formulas
### $(4) \to (5)$  
$$
\begin{align}
!n 
&= n \,\cdot\, !(n-1) + (-1)^n \tag{4} \\
&= n \cdot \big( (n - 1) \,\cdot\, !(n-2) + (-1)^{n-1} \big) + (-1)^n \\
&= n(n-1) \,\cdot\, !(n-2) + n(-1)^{n-1} + (-1)^{n-1}(-1) \\
&= n(n-1) \,\cdot\, !(n-2) + (n-1)(-1)^{n-1} \\
&= (n-1)(n \,\cdot\, !(n-2) + (-1)^{n-1}) \\
&= (n-1) \big( (n-1) \,\cdot\, !(n-2) \,+\, !(n-2) + (-1)^{n-1} \big) \\
&= (n-1) \big(\,!(n-1) \,+\, !(n-2) \big) \tag{5}
\end{align}
$$
### $(4) \to (1)$
$$
\begin{align}
!n 
&= n \,\cdot\, !(n-1) + (-1)^n \tag{4} \\
&= n \cdot (n - 1)! \cdot \sum^{n-1}_{k=0} \frac{(-1)^k}{k!} + (-1)^n \\
&= n! \cdot \sum^{n-1}_{k=0} \frac{(-1)^k}{k!} + (-1)^n\frac{n!}{n!} \\
&= n! \cdot \bigg( \sum^{n-1}_{k=0} \frac{(-1)^k}{k!} + \frac{(-1)^n}{n!}\bigg) \\
&= n! \cdot \sum^{n}_{k=0} \frac{(-1)^k}{k!} \tag{1}
\end{align}
$$
### $(5) \to (1)$
$$
\begin{align}
!n 
&= (n-1) \big(\,!(n-1) \,+\, !(n-2) \big) \tag{5} \\
&= (n-1) \bigg((n-1)! \cdot \sum^{n-1}_{k=0}\frac{(-1)^k}{k!} + (n-2)! \cdot \sum^{n-2}_{k=0}\frac{(-1)^k}{k!} \bigg) \\
&= (n-1)(n-1)! \cdot \sum^{n-1}_{k=0}\frac{(-1)^k}{k!} + (n-1)(n-2)! \cdot \sum^{n-2}_{k=0}\frac{(-1)^k}{k!} \\
&= n(n-1)!\cdot\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} - (n-1)!\cdot\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} + (n-1)!\cdot\sum^{n-2}_{k=0}\frac{(-1)^k}{k!} \\
&= n!\cdot\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} - (n-1)!\cdot \bigg(\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} - \sum^{n-2}_{k=0}\frac{(-1)^k}{k!}\bigg) \\
&= n!\cdot\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} - (n-1)!\cdot\frac{(-1)^{n-1}}{(n-1)!} \\
&= n!\cdot\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} - n!\cdot\frac{(-1)^{n-1}}{n!} \\
&= n!\cdot \big(\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} - \frac{(-1)^{n-1}}{n!}\big) \\
&= n!\cdot \big(\sum^{n-1}_{k=0}\frac{(-1)^k}{k!} + \frac{(-1)^{n}}{n!}\big) \\
&= n!\cdot \sum^{n}_{k=0}\frac{(-1)^k}{k!} \tag{1} 
\end{align}
$$