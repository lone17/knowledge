---
aliases: 
tags: 
created: 2024-07-26 02:30 AM +07:00
modified: 2024-07-26 02:31 AM +07:00
---
#cs/algo/sort 
# implementation
```python
def insertion_sort(low, high):
	for cur in range(low + 1, high):
		for i in range(cur - 1, low - 1, -1):
			if nums[i] > nums[i + 1]:
				nums[i], nums[i + 1] = nums[i + 1], nums[i]
			else:
				break
```