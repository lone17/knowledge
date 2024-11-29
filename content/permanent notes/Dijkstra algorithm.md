---
aliases: 
tags: 
modified: 2024-07-27 13:01 PM +07:00
created: 2024-07-27 12:05 PM +07:00
---
#cs/algo/graph/shortest-path
# what
- a graph search algorithm that finds the shortest path between 2 vertices
- only work with non-negative edge weights

# idea
- use a greedy strategy:
	- maintain the set of vertices whose shortest distance from the source is known
	- at each step, add the closest vertex to the set
# implementation
1. **Initialization**: 
	- Set the distance from source vertex $s$ to itself as 0 and to other vertices as $inf$
	- Use a [[priority queue]] to process vertices based on their shortest distance
2. **Relaxation**: 
	- Get the closest vertex $u$ in the priority queue and add it to the set
	- For each of $u$'s neighbouring vertex $v$, if the path $s \rightarrow u \rightarrow v$ is shorter than the current path $s \rightarrow v$, update the shortest path and add $v$ to the queue
	
```python
from math import inf
from heapq import heappush, heappop
def dijkstra(root):
    h = [(0, root)]
    dp = [inf] * n
    
    while h:
        d, u = heappop(h)
        if d > dp[u]:
            continue
        
        dp[u] = d
        for v, w in neighbours[u]:
            if dp[u] + w < dp[v]:
                dp[v] = dp[u] + w
                heappush(h, (dp[v], v))
    
    return dp
```
# complexity
- Time: $O(|E| \cdot log(|E|)$
	- $O(|E|)$ because we have to process all the edges
	- $O(log|E|)$ because the priority queue has maximum size of $O(|E|)$
		- This can be improved to $O(log|V|)$ using an augmented priority queue which uses a `dict` to store the index of each vertex in the heap, allowing removal by value.
- Space: $O(|E| + |V|)$

# note
- Time complexity can be improved to $O(|E| + |V| \cdot log|V|)$ using [[fibonacci heap]]