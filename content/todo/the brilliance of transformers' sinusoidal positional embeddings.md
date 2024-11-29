---
modified: 2024-02-25 22:32 PM +07:00
created: 2024-02-02 23:22 PM +07:00
---
#cs/ai/ml/nlp 

# intuition
- uses multiple sinusoidal waves of different frequency at time $t$
    - related to the idea that [[(some) functions are vectors]] and [[Fourier Transform]], where 
        - functions in the frequency domain is laid out as row vectors
        - then the functions in the time domain is column vectors 
            - these are the positional embeddings
- it is like using a number system but with infinite digits, which are real numbers between -1 and 1
	- each wave is a number place and its values are the digits
	- each number place changes value at a different rate
		- thus it has an exponential scale instead of linear (the relative distance grows exponentially)
	- so it also behaves like a number system with some linearity properties
		- #todo/write 