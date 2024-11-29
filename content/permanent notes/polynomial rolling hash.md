---
aliases: 
tags: 
modified: 2024-09-17 00:33 AM +07:00
created: 2024-01-24 03:05 AM +07:00
---
#cs/algo #maths

# What
- A [[rolling hash]] algorithm where the hash is a polynomial function with the input values as coefficients.
- Uses only multiplications and additions.

# Formula
$$
\begin{align}
H(s[1 \cdots k]) 
	&= \sum_{i=1}^{k}s_i*p^{k - i} &\mod m \\
	&= s_1*p^{k - 1} + s_2*p^{k - 2} + \cdots + s_k*p^{0} &\mod m
\end{align}
$$
where:
- $s[1 \cdots k]$ :  the substring of s from $1$ to $k$
- $k$: the window size
- $p$ and $m$: are some positive integers
	- modulo $m$ was done to avoid huge $H$ values
	- the choice of $p$ and $m$ affects the performance and the security of the hash function
		- $p$ should be chosen to have a [[modular multiplicative inverse]]
			- for lower-case only strings, $p = 31$ is a good choice.
			- competitive programmers prefer a larger value of $p$: $29791$, $11111$, $111111$.
		- $p$ should be greater than the alphabet size (number of possible values for $s_i$)
		- $m$ is typically a prime number.
			- should be large since the colliding probability is $\frac{1}{m}$.
			- $10^9 + 7$ and $10^9 + 9$ are widely used.

Note:
- avoid converting $s[i] \rightarrow 0$ (e.g. $a \rightarrow 0$) because then the hashes for `a, aa, aaa, ...` are all 0
- the power series can be in reverse, i.e. 
  $$s_1*p^{0} + s_2*p^{1} + \cdots + s_k*p^{k-1}$$

To move window to the right:
$$
H(s[2 \cdots k+1]) = (H[1 \cdots k] - s_1*p^{k - 1})*p + s_{k+1} \mod m
$$
To move window to the left:
$$
H(s[0 \cdots k-1]) = (H[1 \cdots k] - s_k)*p^{-1} + s_0*p^{k - 1} \mod m
$$
- $p^{-1}$ is a [[modular multiplicative inverse]] of $p$ by which $H$ can be multiply to get the result of modulo division without actually performing a division.
	- $p^{-1} \equiv p^{m - 2} \mod m$ if m is prime and $p$ is coprime to $m$
	- In python, use the built in `pow` to calculate modular exponentiation efficiently: 
```python
pow(p, m - 2, m)
```

# Implementation
```python
class PolynomialRollingHash:
    M = 10**9 + 9
    P = 29791  # 31, 53, 29791, 11111, 111111
    P_INV = pow(P, M - 2, M)
    POWS = [1]

    def __init__(self, sequence=""):
        self.sequence = deque()
        self.hash = 0
        for element in sequence:
            self.append(element)

    def get_pow(self, i) -> int:
        while len(self.POWS) <= i:
            self.POWS.append(self.POWS[-1] * self.P % self.M)

        return self.POWS[i]

    def encode(self, element) -> int:
        """
        Encode a single element

        Note: avoid producing an encoding of 0.
        E.g. a -> 0 then the hashes for a, aa, aaa, ... are all 0.
        """

        # for lower-cased str inputs
        return ord(element) - 96

    def appendleft(self, element) -> int:
        x = self.encode(element)
        p = self.get_pow(len(self.sequence))
        self.sequence.appendleft(element)

        self.hash = (x * p + self.hash) % self.M

        return self.hash

    def popleft(self) -> int:
        element = self.sequence.popleft()
        x = self.encode(element)
        p = self.get_pow(len(self.sequence))

        self.hash = (self.hash - x * p) % self.M

        return self.hash

    def append(self, element) -> int:
        x = self.encode(element)
        self.sequence.append(element)

        self.hash = (self.hash * self.P + x) % self.M

        return self.hash

    def pop(self) -> int:
        element = self.sequence.pop()
        x = self.encode(element)

        self.hash = ((self.hash - x) * self.P_INV) % self.M

        return self.hash
```
# Applications
- usually used in the [[Rabin-Karp]] string search algorithm.