---
aliases: 
tags: 
modified: 2024-02-23 23:41 PM +07:00
created: 2024-02-23 23:13 PM +07:00
---
#idea 

learn the function `h()` such that:
```python
if A (obj)--x (relation)--> B (obj)
=> h(A, x) = h(B)
   h(A) = h(B, ~x)

if A --x1--> B --x2--> C
=> h(A, x1, x2) = h(B, x2) = h(C)
and if A --x2--> D -->x1--> C
=> h(A, x1, x2) != h(A, x2, x1) (order of relation matters)

not good, what if:
A --x--> B
A --x--> C
B --x--> D
```