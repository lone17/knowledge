---
aliases: 
tags: 
created: 2024-07-26 02:23 AM +07:00
modified: 2024-07-26 02:33 AM +07:00
---
#cs/algo/sort 
# what
- 3-way quick sort: partition into 3 segments
# implementation
```python
def quick_sort(l, r):
	if l >= r:
		return

	start, end = l, r
	pivot = nums[l]
	m = l + 
	i = m

	while m <= r:
		if nums[m] > pivot:
			nums[m], nums[r] = nums[r], nums[m]
				r -= 1
		elif nums[m] < pivot:
			nums[m], nums[l] = nums[l], nums[m]
			l += 1
			m += 1
		else:
			m += 1

	return l, r
```
