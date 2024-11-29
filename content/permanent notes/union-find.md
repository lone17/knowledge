---
modified: 2024-02-24 20:55 PM +07:00
created: 2024-02-24 19:48 PM +07:00
---
#cs/data-structure 

# what
a.k.a: _disjoint set_

# implementation
## functional
```python
parent = list(range(n))
rank = [1] * n

def find(u, parent):
    while u != parent[u]:
        parent[u] = parent[parent[u]]
        u = parent[u]

    return u

def union(u, v, parent, rank):
    pu = find(u, parent)
    pv = find(v, parent)
    
    if pu == pv:
        return

    parent[pu] = pv
    
    # if rank[pu] > rank[pv]:
    #     parent[pv] = pu
    # elif rank[pu] < rank[pv]:
    #     parent[pu] = pv
    # else:
    #     parent[pu] = pv
    #     rank[pv] += 1
    
    # if rank[pu] > rank[pv]:
    #     parent[pv] = pu
    #     rank[pu] += rank[pv]
    # else:
    #     parent[pu] = pv
    #     rank[pv] += rank[pu]
```
## oop
```python
class UnionFind:
    def __init__(self, n: int):
        # Initialize parent and rank arrays
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x: int) -> int:
        # Find the parent of node x. Use Path Compression
        while x != self.parent[x]:
            self.parent[x] = self.parent[self.parent[x]]
        return x

    def unite(self, x: int, y: int) -> None:
        # Unite two nodes x and y, if they are not already united
        px = self.find(x)
        py = self.find(y)
        if px == py:
            return
        
        self.parent[px] = py

        # # Union by Rank Heuristic
        # if self.rank[px] > self.rank[py]:
        #     self.parent[py] = px
        # elif self.rank[px] < self.rank[py]:
        #     self.parent[px] = py
        # else:
        #     self.parent[py] = px
        #     self.rank[px] += 1

        # # Union by Count Heuristic
        # if self.rank[px] > self.rank[py]:
        #     parent[py] = px
        #     rank[px] += rank[py]
        # else:
        #     parent[px] = py
        #     rank[py] += rank[px]

    def is_connected(self, x: int, y: int) -> bool:
        # Check if two nodes x and y are connected or not
        return self.find(x) == self.find(y)
```