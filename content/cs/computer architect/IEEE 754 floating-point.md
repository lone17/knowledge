---
aliases: 
tags: 
modified: 2024-08-14 12:17 PM +07:00
created: 2023-10-19 19:19 PM +07:00
---
#cs/computer-architecture/floating-point

source: [IEEE Standard 754 Floating-Point](https://steve.hollasch.net/cgindex/coding/ieeefloat.html)

# problems of fixed-point representation:
- has a fixed window of representation -> limit representing very large and very small numbers
- prone to loss of precision during division on large numbers

# floating-point representation:
- uses scientific notation, with a base number and an exponent: 
$$
mantissa \cdot base^{exponent}
$$
- employs a sort of "dynamic window" of precision appropriate to the scale of the number: the smaller the the exponent, the higher the precision 

# storage layout
`[sign (1)][exponent (5/8/11)][fraction (11/23/52)]`

```
Helf (16bit):   S|EEEEE|FF FFFFFFFF
Single (32bit): S|EEEEEEE E|FFFFFFF FFFFFFFF FFFFFFFF
Double (64bit): S|EEEEEEE EEEE|FFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF
```

- sign: 0 = positive, 1 = negative
- exponent: 
	- use [[offset binary]] with bias = 127 (2^7 - 1) for 32bit and 1023 (2^10 - 1) for 64bit
	- all 0s (-127/-1023) and all 1s (+128/+1024) are reserved for special numbers.
- mantissa:
	- aka significand
	- composed of the fraction and an implicit leading digit
	- usually stored in *normalized* form: 
		- puts the radix point after the 1st non-zero digit
		- in binary, there is only 1 possible non-zero digit 
			-> assume the leading digit of 1 for optimization
			-> 32bit number effectively has 24 bits of mantissa (53 for 64bit).
	- There is also [denormalized](#Denormalized) formed

# Unrepresentable ranges
- negatives number less than −(2−2^−23) × 2^127 (negative overflow)
- negative numbers greater than −2^−149 (negative underflow)
- [zero](#zero)
- positive numbers less than 2^−149 (positive underflow)
- positive numbers greater than (2−2^−23) × 2^127 (positive overflow)

# special numbers
### denormalized
- aka subnormal (denormal numbers are renamed *subnormal numbers* in [IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754-2008))
- When the exponent is all 0s
- Now has an assumed leading 0
- the exponent is now -126 for 32bit (instead of -127)
	- Why ? Because normalized form closest to 0 at `+-2^-126`
- loses precision as it gets smaller (as left bits of the fraction become 0s)
- Operations on denormalized floating-point can be ***tens to hundreds of times slower*** than on normalized floating-point ([source](https://stackoverflow.com/a/9314926) in 2012)
### zero
- a [denormalized](#denormalized) number (exponent is all 0s) with fraction is all 0s (including implicit leading 0)
- -0 and +0 are distinct values but compare as equal.
### infinity
- denoted with exponent of all 1s
- fraction of all 0s
- *Being able to denote infinity as a specific value is useful because it allows operations to continue past overflow situations.*
- *Operations with infinite values are well defined in IEEE floating point.*
### NaN
- not a number
- exponents of all 1s
- non-zero fraction
- 2 type of NaN:
	- QNaN (quiet NaN): denotes *indeterminate* operations
		- most significant fraction bit = 1
		- propagate freely through most arithmetic operations (the program won't complain)
		- generated from an operation when the result is not mathematically defined
	- SNaN (signalling NaN): denotes *invalid* operations
		- most significant fraction bit = 0
		- used to signal an exception when used in operations
		- can be handy to assign to uninitialized variables to trap premature usage.

#### sample questions
```
1. What is the smallest positive non-zero value that can be represented as a normalized double-precision number? How much larger is the next smallest value?

[sign (1)][exponent (8/11)][fraction (23/52)]

	smallest: 2^-1022
	- fraction: all 0s -> 1
	- exponent: only the least significant bit is 1 -> -1022
	
	next smallest: (1 + 2^-52) * 2^-1022
	- fraction: only least significant bit is 1 -> 1 + 2^-52
	- exponent: only the least significant bit is 1 -> -1022

2. What is the smallest positive non-zero value that can be represented as a denormalized double-precision number? How much greater than this is the next smallest value?

	smallest: 2^-52 * 2^-1022 = 2^-1074
	- fraction: only least significant bit is 1 -> 2^-52
	- exponent: all 0s -> -1022
	
	next smallest:2^-1073
	- fraction: only second least significant bit is 1 -> 2^-51
	- exponent: all 0s -> -1022
```