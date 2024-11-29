---
aliases:
  - LSP
tags: 
modified: 2024-09-20 13:13 PM +07:00
created: 2024-01-14 23:53 PM +07:00
---
#cs/algo/string
# What
Find the longest suffix which is also prefix in a string.
# Idea
- Calculate the [[dynamic programming|DP]] array `lsp[i]` = length of the lsp ends at `i`
- To calculate `lsp[i + 1]`, use previous `lsp` :
	- `lsp[i]` is the longest match so far
	- `lsp[lspp[i]]` is the second longest
	- ... so on
# Implementation
```python
def compute_lsp(s):
	n = len(s)
	lsp = [0] * n
	for i in range(1, n):
		j = i - 1
		while j > 0 and s[i] != s[lsp[j]]:
			j = lsp[j] - 1
		if s[i] == s[lsp[j]]:
			lsp[i] = lsp[j] + 1
	return lsp
```
# Complexity
- Time: $O(n)$
- Space: $O(n)$
# Application
- Use in [[KMP - Knuth-Morris-Pratt]] for linear time pattern matching: `compute_lsp(p + sep + t)`
- Find the longest prefix palindrome: `compute_lsp(t + sep + t[: : -1])`
# Misc
- This has a similar spirit to [[Z-function]].