---
created: 2023-10-19 19:19 PM +07:00
---
#cs/computer-architecture/signed-integer

# 2's complement
```
0 1 2 3 -4 -3 -2 -1 
------------------>
```
- naming rationale: for n-bit integer, sum `(x + -x)  = 2^n`, which is all 0s in n-bit.
	- `-x` is a complement of `x` with respect to `2^n`
- representation: `sX = -s * 2^(n - 1) + X`
	- first bit represents `-2^(n - 1)` (`s`)
	- all other bits are normal binary representation (`X`)
- conversion: `0000 1011`
	- flip all bits `1111 0100`
	- then add 1 `1111 0101`
```
  0000 1011 = 15
  1111 0101 = -15 = -2^7 + 117 (=111 0101)
-----------
1|0000 0000 = 0 (= 2^8 in unsigned)
```
- Pros:
	- arithmetic behaves normally (since there's only 1 zero)