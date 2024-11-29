#cs/computer-architecture/signed-integer

# 1's complement

```
0 1 2 3 -3 -2 -1 -0
------------------>
```
- naming rationale:  sum `x + -x` = all 1s
- representation: `sX = (-1)^s * ~X`
	- first bit represents sign (`s`)
	- all other bits are flipped binary representation of (`~X`)
- conversion: flip all bits
```
0000 1011 = 11
1111 0100 = -11
---------
1111 1111 = -0
```
- Pros:
	- Quick conversion
- Cons:
	- 2 zeros: all ones (-0) and all zeros (+0)
- arithmetic is expensive