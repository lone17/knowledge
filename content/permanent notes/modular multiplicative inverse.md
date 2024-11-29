---
aliases: 
tags: 
created: 2024-01-24 03:51 AM +07:00
modified: 2024-01-24 04:07 AM +07:00
---
#maths/number-theory/arithmetic

# What
A [[modular multiplicative inverse]] of an integer $a$ is an integer $x$ such that the product $ax$ is congruent to 1 with respect to the modulus $m$:
$$
ax \equiv 1 \mod m
$$
# Computation
## Using [[Euler's theorem]]

If $m$ is prime and $a$ is coprime to $m$, then:
$$
a^{-1} \equiv a^{m - 2} \mod m
$$
