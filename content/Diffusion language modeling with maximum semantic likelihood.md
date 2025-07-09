---
aliases: 
tags: 
modified: 2025-07-10 03:48 +07:00
created: 2025-07-08 15:38 PM +07:00
---
#idea/research #cs/ai/ml/nlp/llm #cs/ai/ml/diffusion 

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
	- an objective that _minimize the divergence/distance of the sentence embedding between 2 consecutive steps_. Some ideas are:
		- could use the distance between the 2 embeddings  #todo/experiment
		- learn the metric on the go #idea
		- we can apply this "semantic distance" metric with RL for preference tuning #idea
		- KL-divergence/OT distance between the prob dist of newly generated tokens #idea
	- an encoder model to compute $P(\text{sequence in step k})$ and $P(\text{sequence in step k+1})$ and use them to compute a metric 
		- If the encoder is an AR LLM, this can be framed as a method to ![[distill from AR LM to diffusion LM]]
		-  however, _training would be heavy_ as we need to serve 2 models and need to wait for the processing of the scorer at each step. 
			- But hopefully there will be some engineering tricks to improve this, and also the computation saved from distillation would make up for the heavy training


#### denoising process
- each step _generate new tokens that doesn't change the some metric (e.g. semantic) too much_
	- restrict on generating only at positions next to existing tokens. How ? #question 
		- Filter out only positions that next to a token ? #todo/experiment 
		- Make the generate-able positions dynamic #idea e.g. the current sequence: `a quick brown fox` -> generate-able slots:`_ a _ _ quick _ _ brown _ _ fox _` (2 slots in between every 2 consecutive tokens)
		  -> _the sequence length is not fixed_. How to implement this ? #question
	- Always add generate-able positions at the beginning and ending of the sequence to make generation expandable on both ends #idea
		- Again, the sequence length is not fixed. -> Needs some smart engineering for the case of dynamic sequence length #question  
	- How to measure the change of semantic ? #question
		- Use the same metric from as in the noising process ?
		- This can be used to control the "creativeness" of generation #idea
- _How to stop generation when the sequence length is not fixed_ ? #question some ideas:
	- Use a special token like in AR models ? -> doesn't really make sense for this case as generation can be extended in both directions
	- Set a threshold for predicted probs: If the logits of new tokens are all lower than a threshold then stop generation. #idea
	- Set a threshold for the "semantic" of the sequence: If $P(sequence)$ is higher than a certain value then stop generation. #idea
