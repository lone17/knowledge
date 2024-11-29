---
modified: 2024-02-25 04:15 AM +07:00
created: 2024-02-25 02:06 AM +07:00
---
#maths/algebra #maths/analysis/calculus #intuition

# intuition
- functions here only refer to those that are continuous on the real line
- functions are vectors of infinite components
    - → dot product are integral $f \cdot g = \int{f(t)g(t)dt}$
    - in fact, the definition of a [[vector space]] is ![[vector space#what]]
- for [[Fourier Transform]]:
    - the $sin$ and $cos$ functions are basis functions, each frequency is a basis
        - each $sin$ function is like a $[1,0,1,0,1, ...]$ vector, different frequencies means different gap size between $0$ and $1$
            - these are odd functions
        - likewise, each $cos$ function is like a $[0,1,0,1,0,...]$
            - these are even functions
        - we can use [[Euler's identity formula]] to combine them to span the whole function space
    - any function $f$ is a linear combination of them, just like any vector is a linear combination of the basis vectors
    - to know how much a basis vector contribute to a vector $v$, we project $v$ to the basis vector 
        - → thus to know how much a basis function (frequency) contribute to $f$, we project $f$ to the basis function
# references
- [Functions are vectors - YouTube](https://www.youtube.com/watch?v=LSbpQawNzU8)