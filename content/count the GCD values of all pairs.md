---
aliases: 
tags:
  - cs/algo/math
  - maths/number-theory
created: 2024-07-29 10:14 AM +07:00
modified: 2024-10-06 19:21 PM +07:00
---
# idea
- uses the inclusion-exclusion approach
- count of $(a, b)$ such that $a \mod d = 0$ and $b \mod d = 0$ 
  == count of $(a, b)$ such that $gcd(a, b) \mod d = 0$
- `dp[d]` = count of pairs with GCD == d, to calculate `dp[d]`:
	1. first count the number of pairs having a common divisor == d
	2. then subtract all `dp[d * k] (k > 1)
# implementation
```python
def count_gcd_of_pairs(nums: list[int]) -> list[int]:
	n = len(nums)
	max_val = max(nums)

	count = [0] * (max_val + 1)
	for x in nums:
		count[x] += 1
	
	# dp[d] = number of pairs with gcd == d
	dp = [0] * (max_val + 1)
	for d in range(max_val, 0, -1):
		cnt = 0 # count of a that a % d == 0
		for dk in range(d, max_val + 1, d):
			cnt += count[dk]
		
		# count of pairs with a common divisor == d (a and b % d == 0)
		# == coutdnt of pairs gcd that is a multiple of d (gcd(a, b) % d == 0)
		# why: if a % d == 0 and b % d == 0 then gcd(a, b) % d == 0
		dp[d] = cnt * (cnt - 1) // 2

		# subtract the count of pairs with gcd == d * k with k > 0
		for dk in range(d * 2, max_val + 1, d):
			dp[d] -= dp[dk]
	
	return dp
```