---
created: 2024-01-23 17:31 PM +07:00
modified: 2024-02-14 04:31 AM +07:00
---
#idea 

- do we always need full nxn attention ?
	- [[(2x2)D attention]] 
	- can we randomly pick pxp ? p < n
		- already done in [DropAttention](https://arxiv.org/pdf/1907.11065.pdf)
			- they tried dropping columns (keys) and entries of the attention matrix
- same idea as drop out
	- drop out is based on how the brain works
	- the connection in the brain is bidirectional, transformers in some way mimic that with self attention
		- can we extend it further ?
		- given a large amount of neurons, each iteration take a random p neuron and do pxp attention
		- the neurons dont need to take the same kind of input
			- as long as it turns the input into a vector of the same dimension 
			- first layer will be specialized, because the input varies
				- brain has different neuron dedicated for different task ?
				- later layers can mix and swap input since now every thing has the same shape
			- sounds like a graph net, but here the nodes are randomly connected