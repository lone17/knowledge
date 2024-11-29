---
aliases: 
tags: 
modified: 2024-09-23 14:41 PM +07:00
created: 2024-07-07 12:43 PM +07:00
---
#cs/data-structure #cs/algo/string

# what
- An advanced [[pattern searching]] algorithm for finding all occurrences of a set of strings $p_1, p_2, \ldots, p_k$ inside a target string $t$.
- Based on a [[trie]] with added links:
	- *suffix links*: point to the node represents the longest suffix of the current query.
	- *output links*: point to the node represents the longest suffix of the current query which is also a terminal node.
# complexity
For 
- $m = |t|$ is the length of the target string
- $n = |p_1| + |p_2| + \ldots + |p_k|$  is the total length of the patterns
- $z$ is the total number of matches

Time: $O(n + m + z)$
- $O(n)$ for constructing the trie
- $O(n)$ for constructing the *suffix links* and *output links*
- $O(m + z)$ for finding all the matches
	- or $O(z_i \cdot m)$ with $z_i$ is the number of matches at each position of $t$
# usage
- Great for cases where the **patterns are fixed** and the **target text changes**.
# implementation
```python
from typing import List

class AhoCorasick:
    def __init__(self, patterns: List[str]):
        self.trie = dict()
        self.vocab = set('qwertyuiopasdfghjklzxcvbnm')
        root = self.trie

        # contruct the trie
        for p in patterns:
            cur = root
            for c in p:
                if c not in cur:
                    cur[c] = {}
                cur = cur[c]
            cur['$'] = p

        # construct suffix links and output links using BFS
        root['suffix'] = None
        root['output'] = None
        q = deque([root])
        while q:
            for _ in range(len(q)):
                cur = q.popleft()
                for c, child in cur.items():
	                # skip 'suffix', 'output' and '$'
                    if c not in self.vocab:
                        continue

                    # find the longest suffix of cur
                    # each time the pointer moves back, the depth decreases by at least 1

                    suffix = cur['suffix']
                    while suffix and c not in suffix:
                        suffix = suffix['suffix']
                    if suffix:
                        # construct the suffix for child based on the suffix of cur
                        child['suffix'] = suffix[c]
                        # output links always point to the longest proper suffix
                        if '$' in child['suffix']:
                            child['output'] = child['suffix']
                        else:
                            child['output'] = child['suffix']['output']
                    else:
                        # default values
                        child['suffix'] = root
                        child['output'] = None

                    q.append(child)


    def match(self, target: str):
        # returns all matches at each position of target
        cur = self.trie
        for c in target:
            # find the longest suffix that contains c
            while c not in cur and cur['suffix']:
                cur = cur['suffix']

            # visit the next node
            if c in cur:
                cur = cur[c]

            matches = []
            if '$' in cur:
                matches.append(cur['$'])
            out = cur['output']

            # follow the linked list of output links to get all the matches
            while out:
                matches.append(out['$'])
                out = out['output']

            yield matches
```
# references
- [Aho-Corasick algorithm - Algorithms for Competitive Programming](https://cp-algorithms.com/string/aho_corasick.html)
- https://web.stanford.edu/class/archive/cs/cs166/cs166.1166/lectures/02/Slides02.pdf