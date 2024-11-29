---
aliases: 
tags: 
modified: 2024-09-20 13:17 PM +07:00
created: 2024-02-10 18:25 PM +07:00
---
#cs/algo/string 

# longest prefix palindrome
- use [[LSP - Longest Suffix which is also a prefix|LSP]]: `compute_lsp(t + sep + t[: : -1])`

# count all palindromes
## idea
- start from `mid` , until `mid < n`
	- set up `left` and `right`
	```python
	left = mid - 1
	right = mid + 1
	```
	- expand to the `right` to cover duplicates
	```python
	right = mid + 1
	while right < n and s[right] == s[mid]:
		right += 1
	```
	- after that, `right` will be `mid` for the next iteration
	```python
	mid = right
	```
	- expand to both `left` and `right`
	```python
	while left >= 0 and right < n and s[left] == s[right]:
		left -= 1
		right += 1
	```

## implementation
```python
def count_palindromes(s: str) -> int:
	n = len(s)
	ans = 0
	
	mid = 0
	while mid < n:
		left = mid - 1
		right = mid + 1
		
		while right < n and s[mid] == s[right]:
			right += 1
		ans += (right - mid + 1) * (right - mid) // 2
		
		mid = right
		
		while left >= 0 and right < n and s[left] == s[right]:
			left -= 1
			right += 1
		ans += right - mid
	
	return ans
```
# complexity 
- Time: $O(n^2)$
- Space: $O(1)$

# find longest palindrome - Manacher's algorithm
## idea
- add a special character `.` in between all characters to make all palindrome of odd length and add special characters at start and end as sentinels
```python
s = '^.' + '.'.join(s) + '.$'
```
- calculate the [[dynamic programming|DP]] array `max_radius` where `max_radius[center]` = max radius of the palindrome at `center`
- after calculated `max_radius[center]`:
	- `max_radius` up to `center` are calculated
	- try to use it to calculate for `new_center` from  `center + 1` to `center + max_radius[center]`:
		- we can only use the palindromes that ends before or at `right_bound = center + max_radius[center]`
			- so maximum radius we can use for `new_center` is `radius_bound` is `right_bound - new_center`
		- use `mirror_center` which is the mirror of `new_center` over `center`
			- if longest palindrome at `mirror_center` is doesn't reach the bound (i.e. `max_radius[mirror_center] < radius_bound`) 
				- then longest palindrome at `new_center` must also be the same (i.e. `max_radius[new_center] = max_radius[mirror_center]`)
				- then increase `next_center` by 1
			- if longest palindrome at `mirror_center` is over the bound (i.e. `max_radius[mirror_center] > radius_bound`) 
				- then longest palindrome at `new_center` must ends at the bound (i.e. `max_radius[mirror_center] = radius_bound`)
				- then increase `next_center` by 1
			- if longest palindrome at `mirror_center` end right at the bound (i.e. `max_radius[mirror_center] == radius_bound`) 
				- then longest palindrome at `new_center` could ends at or over the bound (i.e. `max_radius[mirror_center] = radius_bound`)
				- so we update its `radius = radius_bound` and try to expand it in the next iteration
## implementation 
```python
def longest_palindrome(s: str) -> int:
	if s == s[::-1]:
		return s
	
	s = '^.' + '.'.join(s) + '.$'
	n = len(s)
	
	max_radius = [0] * n
	center = 1
	best_center = 0
	while center + max_radius[center] < n - 1:
		r = 1
		while s[center - r] == s[center + r]:
			r += 1
		max_radius[center] = r - 1
		
		if max_radius[center] > max_radius[best_center]:
			best_center = center
		
		right_bound = center + max_radius[center]
		mirror_center = center - 1
		center += 1
		
		while center <= right_bound:
			radius_bound = right_bound - center

			if max_radius[mirror_center] != radius_bound:
				max_radius[center] = min(radius_bound, max_radius[mirror_center])
				center += 1
				mirror_center -= 1
			else:
				max_radius[center] = radius_bound
				break
	
	r = max_radius[best_center]
	return s[best_center - r + 1 : best_center + r + 1: 2]
```

- a shorter implementation
```python
def longest_palindrome(s: str) -> int:
	if s == s[::-1]:
		return s
	
	s = '^.' + '.'.join(s) + '.$'
	n = len(s)
	radius = [0] * n

	best = 0
	l, r = 1 , 1
	for i in range(1, n - 1):
		radius[i] = max(0, min(r - i, radius[l + (r - i)]))
		while s[i - radius[i]] == s[i + radius[i]]:
			radius[i] += 1
		
		if i + radius[i] > r:
			l = i - radius[i]
			r = i + radius[i]
		
		if radius[best] < radius[i]:
			best = i
	
	return s[best - radius[best] + 2 : best + radius[best] : 2]
```
## complexity
- Time: $O(n)$
	- at each iteration, either `center` or `center + max_radius[center]` increases
- Space: $O(n)$
## misc
- similar idea to the [[Z-function]] algorithm.
- references:
	- [Manacher's Algorithm - Finding all sub-palindromes in O(N) - Algorithms for Competitive Programming](https://cp-algorithms.com/string/manacher.html)
	- [Manacher's Algorithm - VNOI](https://vnoi.info/wiki/algo/string/manacher.md)