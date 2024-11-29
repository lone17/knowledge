---
aliases: 
tags:
  - "#cs/algo/sort"
created: 2024-07-26 02:32 AM +07:00
modified: 2024-11-29 21:58 PM +07:00
---
# what
- combining [[quick sort]], [[bubble sort]] / [[insertion sort]]
# implementation
```python
def hybrid_sort():
	# check for trivial case
	check = True
	for i in range(len(nums) - 1):
		if nums[i] > nums[i + 1]:
			check = False
			break
	if check:
		return
	
	shuffle(nums)
	stack = [(0, len(nums) - 1)]
	while stack:
		l, r = stack.pop()
		if r - l <= 5:
			# insertion_sort(l, r + 1)
			bubble_sort(l, r + 1)
		else:
			m1, m2 = quick_sort(l, r)
			stack.append((l, m1 - 1))
			stack.append((m2 + 1, r))
```