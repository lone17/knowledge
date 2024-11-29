---
aliases: 
tags: 
created: 2024-01-24 04:12 AM +07:00
modified: 2024-09-20 11:53 AM +07:00
---
#cs/algo/string  
# What
- A [[pattern searching]] algorithm that uses [[rolling hash]] to quickly filter out positions of the text that cannot match the pattern, and then checks for a match at the remaining positions.
- [[polynomial rolling hash]] are usually used for the [[hash]] function.

# Idea
- Compares the hash of a string `p` (pattern) with substrings of `t` (target) of length `len(p)`
- Check for exact match after found, so the worst case can still be $O(mn)$.
	- hashing is used as a heuristic to narrow down the search space.

# Properties
- Can be used to find matches for multiple (`k`) patterns simultaneously.
	- In $O(k)$ space.
- Finding multiple matches has expected time of the combined length of all matches.

# Complexity 
- Time: 
	- Average: $O(m + n)$
	- Worst: $O(mn)$
- Space: $O(1)$