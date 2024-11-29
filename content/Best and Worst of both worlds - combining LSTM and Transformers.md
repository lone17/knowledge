---
aliases: 
tags: 
created: 2024-07-29 10:14 AM +07:00
modified: 2024-09-02 18:27 PM +07:00
---
#idea/research #cs/ai/ml/nlp/llm 


# context
- Transformers
	- pros:
		- Has bidirectional attention
		- each token can freely attend to any other token
		- parallel training
	- cons:
		- quadratic complexity
		- no recursive modelling
- LSTM
	- pros:
		- linear complexity
		- recursive modelling: e.g. can solve parity problem (given a binary string, count the number of 1s)
	- cons:
		- bottle-neck hidden state: info of the whole history is compressed into 1 state vector
		- each token only have access to the info stored in the hidden state
		- no parallel training

# motivation
Most people want to combine the pros of the 2 methods without bringing along the cons, but that hasn't work yet. Why don't we combine both the pros and cons ?
- pros:
	- bidirectional attention
	- each token can freely attend to any other token
	- recursive modelling
- cons:
	- quadratic complexity
	- maybe no parallel training
	- quadratic complexity

Even though there are more cons, there are also more pros. If accuracy is the more preferred over efficiency, this approach could produce models with greater modelling capability.
# method
- pair each transformers layer with a LSTM layer
	- first the features are computed using the transformers layer
	- then these features run through the LSTM layer 
	- or vice versa
	- or in parallel (different branches)
- there can be a router layer to choose when to use the either or both layer 
