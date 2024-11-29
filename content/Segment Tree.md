---
aliases: 
modified: 2024-09-27 02:34 AM +07:00
tags:
  - cs/data-structure
created: 2024-09-27 02:30 AM +07:00
---
# resources
- [Segment Tree - Algorithms for Competitive Programming](https://cp-algorithms.com/data_structures/segment_tree.html)
# implementation
## point update
```python
from math import gcd, inf, lcm

class SegmentTree:
    def __init__(self, nums: List[int], mode="sum", target=None):
        self.mode = mode
        self.target = target
        self.n = len(nums)
        self.nums = nums
        self.tree = [None] * (2 * self.n)
        self.build(1, 1, self.n)

    def __left_child(self, idx, tree_left, tree_right):
        # simple indexing: O(4*n)
        # return idx * 2

        # advanced indexing: O(2*n)
        # order the nodes in in-order traversal order
        # (root <nodes in left tree> <nodes in right tree>)
        # left node is idx + 1, and there are (mid - left + 1) leaves in the left tree
        # hence there are 2 * (mid - left + 1) - 1 nodes in the left tree
        # thus right node is at `idx + 2 * (mid - left + 1)`
        return idx + 1

    def __right_child(self, idx, tree_left, tree_right):
        # simple indexing:
        # return idx * 2 + 1

        # advanced indexing:
        # order the nodes in in-order traversal order
        # (root <nodes in left tree> <nodes in right tree>)
        # left node is idx + 1, and there are (mid - left + 1) leaves in the left tree
        # hence there are 2 * (mid - left + 1) - 1 nodes in the left tree
        # thus right node is at `idx + 2 * (mid - left + 1)`
        mid = (tree_left + tree_right) // 2
        return idx + 2 * (mid - tree_left + 1)

    def __combine(self, left, right):
        left_val, left_count = left
        right_val, right_count = right
        if self.mode == "sum":
            return (left_val + right_val, left_count + right_count)
        elif self.mode == "prod":
            return (left_val * right_val, left_count + right_count)
        elif self.mode == "gcd":
            return (gcd(left_val, right_val), left_count + right_count)
        elif self.mode == "lcm":
            return (lcm(left_val, right_val), left_count + right_count)
        elif self.mode == "max":
            if left_val > right_val:
                # if target is not specified, count the max value instead
                if self.target is None:
                    return left
                else:
                    return (left_val, left_count + right_count)
            elif left_val < right_val:
                # if target is not specified, count the max value instead
                if self.target is None:
                    return right
                else:
                    return (right_val, left_count + right_count)
            else:  # left_val == right_val
                return (left_val, left_count + right_count)
        elif self.mode == "min":
            if left_val < right_val:
                # if target is not specified, count the min value instead
                if self.target is None:
                    return left
                else:
                    return (left_val, left_count + right_count)
            elif left_val > right_val:
                # if target is not specified, count the min value instead
                if self.target is None:
                    return right
                else:
                    return (right_val, left_count + right_count)
            else:  # left_val == right_val
                return (left_val, left_count + right_count)

    def build(self, tree_idx, tree_left, tree_right):
        # leaf node
        if tree_left == tree_right:
            if self.target is None:
                self.tree[tree_idx] = (self.nums[tree_left - 1], 1)
            else:
                self.tree[tree_idx] = (
                    self.nums[tree_left - 1],
                    int(self.nums[tree_left - 1] == self.target),
                )
            return

        mid = (tree_left + tree_right) // 2

        # get indices of left and right children
        left_idx = self.__left_child(tree_idx, tree_left, tree_right)
        right_idx = self.__right_child(tree_idx, tree_left, tree_right)

        # recursively build the tree
        self.build(left_idx, tree_left, mid)
        self.build(right_idx, mid + 1, tree_right)

        # combine the left and right children
        self.tree[tree_idx] = self.__combine(self.tree[left_idx], self.tree[right_idx])

    def __query(self, tree_idx, tree_left, tree_right, query_left, query_right):
        if query_left > query_right:
            if self.mode == "sum":
                return (0, 0)
            if self.mode == "prod":
                return (1, 0)
            if self.mode == "gcd":
                return (0, 0)
            if self.mode == "lcm":
                return (1, 0)
            elif self.mode == "max":
                return (-inf, 0)
            elif self.mode == "min":
                return (inf, 0)

        # span is perfectly covered by a node
        if tree_left == query_left and tree_right == query_right:
            return self.tree[tree_idx]

        mid = (tree_left + tree_right) // 2

        # get indices of left and right children
        left_idx = self.__left_child(tree_idx, tree_left, tree_right)
        right_idx = self.__right_child(tree_idx, tree_left, tree_right)

        # recursively query the left and right subtrees
        tree_left = self.__query(
            left_idx, tree_left, mid, query_left, min(mid, query_right)
        )
        tree_right = self.__query(
            right_idx, mid + 1, tree_right, max(mid + 1, query_left), query_right
        )

        # combine the left and right subtrees
        return self.__combine(tree_left, tree_right)

    def query(self, left, right):
        return self.__query(1, 1, self.n, left + 1, right + 1)

    def __update(self, pos, val, tree_idx, tree_left, tree_right):
        # leaf node
        if tree_left == tree_right:
            if self.target is None:
                self.tree[tree_idx] = (val, 1)
            else:
                self.tree[tree_idx] = (val, int(val == self.target))
            return

        mid = (tree_left + tree_right) // 2

        # get indices of left and right children
        left_idx = self.__left_child(tree_idx, tree_left, tree_right)
        right_idx = self.__right_child(tree_idx, tree_left, tree_right)

        # recursively update the left or right subtrees
        if pos <= mid:
            self.__update(pos, val, left_idx, tree_left, mid)
        else:
            self.__update(pos, val, right_idx, mid + 1, tree_right)

        self.tree[tree_idx] = self.__combine(self.tree[left_idx], self.tree[right_idx])

    def update(self, pos, val):
        self.nums[pos] = val
        self.__update(pos + 1, val, 1, 1, self.n)

    def __find_kth(self, k, tree_idx, tree_left, tree_right):
        if tree_left == tree_right:
            return tree_left - 1

        mid = (tree_left + tree_right) // 2

        left_idx = self.__left_child(tree_idx, tree_left, tree_right)
        right_idx = self.__right_child(tree_idx, tree_left, tree_right)

        _, left_count = self.tree[left_idx]

        if k <= left_count:
            return self.__find_kth(k, left_idx, tree_left, mid)
        else:
            return self.__find_kth(k - left_count, right_idx, mid + 1, tree_right)

    def find_kth(self, k):
        if k <= 0:
            return -1
        _, total_count = self.tree[1]
        if total_count < k:
            return -1

        return self.__find_kth(k, 1, 1, self.n)


segtree = SegmentTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mode="sum", target=10)
print(segtree.query(1, 5))
segtree.update(5, 10)
print(segtree.query(1, 5))

segtree = SegmentTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mode="max")
print(segtree.query(1, 5))
segtree.update(5, 10)
print(segtree.query(1, 5))

segtree = SegmentTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mode="min")
print(segtree.query(1, 5))
segtree.update(5, 1)
print(segtree.query(1, 5))

segtree = SegmentTree([1, 1, 3, 4, 1, 6, 7, 1, 9, 10], mode="prod", target=1)
print(segtree.query(1, 5))
segtree.update(5, 1)
print(segtree.query(1, 5))

segtree = SegmentTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mode="lcm", target=10)
print(segtree.query(1, 5))
segtree.update(5, 1)
print(segtree.query(1, 5))

segtree = SegmentTree([1, 1, 3, 4, 1, 6, 7, 1, 9, 10], mode="prod", target=1)
print(segtree.query(1, 5))
segtree.update(5, 1)
print(segtree.query(1, 5))
```