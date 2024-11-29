---
aliases: 
tags: 
modified: 2024-07-26 02:32 AM +07:00
created: 2023-12-04 01:44 AM +07:00
---
#cs/algo/sort
# properties
- $O(n^2)$ in worst case
- $O(1)$ extra space
- stable
- adaptive: $O(n)$ time when the list is nearly sorted
- low overhead: good for modern CPU and caches as it accesses continuous blocks of memory in increasing order (source: [algorithm - Is there ever a good reason to use Insertion Sort? - Stack Overflow](https://stackoverflow.com/questions/736920/is-there-ever-a-good-reason-to-use-insertion-sort#comment548549_736927))
# benefits
- good for nearly sorted lists
- good for small sizes
- often used as the recursive base case (when the problem size is small) for divide-and-conquer sort algorithms that have higher overhead like [[quick sort]] or [[merge sort]].
# implementation
```python
def bubble_sort(low, high):
	for end in range(high, low, -1):
		swap = False
		for i in range(low, end - 1):
			if nums[i] > nums[i + 1]:
				swap = True
				nums[i], nums[i + 1] = nums[i + 1], nums[i]
		if not swap:
			return
```