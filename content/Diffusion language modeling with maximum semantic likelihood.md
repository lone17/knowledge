---
aliases: 
tags: 
modified: 2025-07-08 19:19 +07:00
created: 2025-07-08 15:38 PM +07:00
---
#idea/research #cs/ai/ml/nlp/diffusion-lm

# idea
#### noising process
- remove least semantically significant tokens first
- the most semantically significant tokens (in sequence) are the ones that most effectively summarize the meaning of the input. E.g.:
```
a quick brown fox jumps over the lazy dog
_ quick brown fox jumps over ___ lazy dog
_ _____ brown fox jumps over ___ ____ dog
_ _____ _____ fox jumps ____ ___ ____ dog
```
- The selection can be based on #question
	- a statistical model
	- an objective that minimize the divergence of the sentence embedding between 2 consecutive steps
		- could use a pretrained encoder like [[Harnessing the Universal Geometry of Embeddings]]
		- learn the metric on the go
	- a semantic distance between 2 consecutive steps
		- KL-divergence/OT distance between the prob dist of newly generated tokens


#### denoising process
- each step generate new tokens that doesn't change the semantic too much
	- restrict on generating only at positions next to existing tokens. How ? #question 
		- Filter out only positions that next to a token ?
		- Make the generate-able positions dynamic, e.g.
		  The current sequence: `a quick brown fox`
		  Generate-able positions: `_ a _ quick _ brown _ fox _`
		  -> the sequence length is not fixed. How to implement this ? #question
	- Always add generate-able positions at the beginning and ending of the sequence to make generation expandable on both ends
		- Again, the sequence length is not fixed -> heavy engineering needed #question
	- How to measure the change of semantic ? #question
		- Use the same metric from as in the noising process ?
		- This can be used to control the "creativeness" of generation
- How to stop generation when the sequence length is not fixed ? #question 
	- Use a special token like in AR models ? -> doesn't really make sense for this case as generation can be extended in both directions
	- Set a threshold for predicted probs: If the logits of new tokens are all lower than a threshold then stop generation.
	- Set a threshold for the "semantic" of the sequence: If $P(sequence)$ is higher than a certain value then stop generation.

#### ideas and challenges
- Needs some smart engineering for the case of dynamic sequence length #question 
- When the noising and denoising process is guided using some "semantic gain" metrics, one can apply RL for preference tuning #idea