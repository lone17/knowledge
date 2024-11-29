---
aliases: 
tags: 
modified: 2024-08-15 12:37 PM +07:00
created: 2024-02-19 16:50 PM +07:00
---
#cs/data-structure 

```python
from heapq import _heappify_max, _heappop_max, _heappushpop_max, _siftdown_max

def _heappush_max(heap, item): 
"""Maxheap version of a heappush."""
    heap.append(item)
    _siftdown_max(heap, 0, len(heap) - 1)
```
