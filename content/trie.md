---
aliases: 
tags: 
modified: 2024-07-27 12:23 PM +07:00
created: 2024-02-18 21:08 PM +07:00
---
#cs/data-structure

# implementation
```python
trie = {}
for w in words:
    root = trie
    for c in w:
        if c not in root:
            root[c] = {}
        root = root[c]
        matched = root.get('$') > 0
    matched = root.get('$') > 0
    root['$'] = root.get('$', 0) + 1
```
## python trick for short implementation 
```python
trie = (T := lambda: defaultdict(T))()
for w in words:
    root = trie
    for c in w:
        root = root[c]
        matched = root.get('$') > 0
    matched = root.get('$') > 0
    root['$'] = root.get('$', 0) + 1
```