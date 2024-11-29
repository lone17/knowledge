---
created: 2023-10-19 19:19 PM +07:00
---
#cs/computer-architecture/signed-integer

# offset binary
- representation: 
	- using binary representation of `0 -> 2^n - 1` to represent values from `-k -> 2^n - k - 1`
	- `k` is the offset/bias
- 2's complement is offset with `k = 2^(n - 1)` with negated most significant bit

```
		 1101 = -3 = -2^3 + 5
	abcd 1101      = a*-(2^7) + b*2^6 + c*2^5 + d*2^4 + 
					 2^3 + 5

=> -2^3 = 2^3 + a*-(2^7) + b*2^6 + c*2^5 + d*2^4 + 2^3
```

15112004 = 15 11 20 04
					04 20 11 15

1010 * 2^(1100) -> 010[1] * 2^(1101)
1010 -> mantissa/Significand -> **right-most bit = 1**
1100 -> exponent
2 -> base

exponent:
 0  1  2  3  4 5 6 7
-3 -2 -1 0  1 2 3 4

0 010 10
s: 0 -> +
e: 010 -> 2 -> 2 - bias = -1
f: 10 -> 1.10 (normalized has an implicit leading 1) 
	   -> 1.5 (= 2^0 + 2^-1)
=> 1.5 * 2^-1 = 0.75