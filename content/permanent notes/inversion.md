---
created: 2024-01-27 19:47 PM +07:00
modified: 2024-02-17 06:21 AM +07:00
---
#maths/discrete/combinatorics 

# What
A pair of positions $(i, j)$ of a [[permutation]] $a$ such that $i < j$ and $a(i) > a(j)$.

# Distribution
The number of [[permutation]]s of length $n$ with $k$ [[inversion]]s is the same as the number of [[permutation]]s of length $n$ with [[major index]] equal to $k$.

## Calculation
Can be calculated using dynamic programming.
See: [LeetCode 629](https://leetcode.com/problems/k-inverse-pairs-array/)