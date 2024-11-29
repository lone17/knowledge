---
aliases: 
tags: 
modified: 2024-09-20 11:55 AM +07:00
created: 2024-01-15 00:16 AM +07:00
---
#cs/algo/string

# What
An [[pattern searching]] algorithm in linear time that uses [[dynamic programming]].
# Idea
- Calculate the [[LSP - Longest Suffix which is also a prefix]] for `p` (pattern)
- Match each character of `t` (target)
- If there is a mismatch, use the LSP to know which next character to match.
# Implementation
Trick: equivalent to calculating `lsp(p + sep + t)` where `sep` is a character not in `t` or `p`
# Complexity
- Time: $O(m + n)$
- Space: $O(m)$
# Properties
- Matches multiple (`k`) pattern take $O(k(m + n))$ time.
- Finding multiple matches does not increase complexity.
