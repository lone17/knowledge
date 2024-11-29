---
modified: 2024-02-17 06:20 AM +07:00
created: 2024-01-27 19:25 PM +07:00
---
#maths/discrete/combinatorics

# What
The major index of a [[permutation]] $w$ is the sum of the positions of the [[descent]] of the [[permutation]].

$$
maj(w) = \sum_{w(i) > w(i + 1)}i
$$

Example: $w = 351624$ is a [[permutation]] of $\set{1, 2, 3, 4, 5, 6}$, there are 2 [[descent]]s at positions 2 (from 5 to 1) and 4 (from 6 to 2)  -> $maj(w) = 2 + 4 = 6$ 

Named after [Major Percy Alexander MacMahon](https://en.wikipedia.org/wiki/Percy_Alexander_MacMahon "Percy Alexander MacMahon").

# Distribution 
In [1913](https://en.wikipedia.org/wiki/Major_index#CITEREFMacMahon1913) that, MacMahon showed that:
	the distribution of the major index on all [[permutation]]s of a fixed length
is the same as 
	the distribution of [[inversion]]s.

Which means
	the number of permutations of length $n$ with major index equal to $k$)
is the same as
	the number of permutations of length $n$ with $k$ [[inversion]]s

(These numbers are known as _[[Mahonian numbers]]_, also in honor of MacMahon)

## Calculation
Calculated indirectly by calculating the distribution of [[inversion]]s.