---
aliases: 
tags: 
modified: 2024-09-01 11:36 AM +07:00
created: 2024-09-01 11:31 AM +07:00
---
#cs/algo/trie

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.zero = None
        self.one = None
 
class Trie:
 
    def __init__(self):
        self.root = Node(0)
 
    def insert(self, pre_xor):
        self.temp = self.root
        for i in range(31, -1, -1):
            val = pre_xor & (1<<i)
            if val == 1:
                if not self.temp.one:
                    self.temp.one = Node(0)
                self.temp = self.temp.one
            else:
                if not self.temp.zero:
                    self.temp.zero = Node(0)
                self.temp = self.temp.zero
 
        self.temp.data = pre_xor

    def query(self, xor):
        self.temp = self.root
 
        for i in range(31, -1, -1):
            val = xor & (1<<i)
            if val == 1:
                if self.temp.zero:
                    self.temp = self.temp.zero
                elif self.temp.one:
                    self.temp = self.temp.one
            else:
                if self.temp.one:
                    self.temp = self.temp.one
                elif self.temp.zero:
                    self.temp = self.temp.zero
 
        return xor ^ self.temp.data

    def max_subarray_xor(self, nums):
        self.insert(0)
        result = -float('inf')
        pre_xor = 0
        for x in nums:
            pre_xor = pre_xor ^ x
            self.insert(pre_xor)
            result = max(result, self.query(pre_xor))
        return result
```