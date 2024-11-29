---
aliases:
  - BIT
  - Binary Index Tree
tags:
  - "#cs/data-structure"
created: 2024-09-15 02:37 AM +07:00
modified: 2024-09-15 03:38 AM +07:00
---
# what
- reference: [Fenwick Tree - Algorithms for Competitive Programming](https://cp-algorithms.com/data_structures/fenwick.html)
- exercices: [Problem List - LeetCode](https://leetcode.com/problem-list/binary-indexed-tree/)

# implementation
## for range sum
```python
class SumBIT:

    def __init__(self, nums: List[int]):
        n = len(nums)
        self.n = n
        self.nums = nums
        self.bit = [0] * n
        for i, x in enumerate(nums):
            self.bit[i] += x
            j = i | (i + 1)
            if j < n:
                self.bit[j] += self.bit[i]

    def update(self, i: int, val: int) -> None:
        d = val - self.nums[i]
        self.nums[i] = val
        while i < self.n:
            self.bit[i] += d
            i = i | (i + 1)
    
    def _sum(self, right):
        ans = 0
        while right >= 0:
            ans += self.bit[right]
            right = (right & (right + 1)) - 1
        
        return ans

    def sum_range(self, left: int, right: int) -> int:
        return self._sum(right) - self._sum(left - 1)
```

