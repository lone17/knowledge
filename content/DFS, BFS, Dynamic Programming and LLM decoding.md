---
aliases: 
tags: 
modified: 2025-01-29 22:23 +07:00
created: 2025-01-29 21:45 +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/mechanistic-interpretability 

- The decoding process of LLMs can be thought as doing DFS
	- at each step, only the token with the highest logit (greedy search) is considered
	- there are methods that rescale the logits or add some randomness (e.g. beam search, top-p sampling, top-k sampling etc.), but they still have the spirit of DFS
	- we can't get away from DFS because at each step we need to pick one generated token to before moving to the next

- In [[Training Large Language Models to Reason in a Continuous Latent Space]], the authors use a special `<thought>` token to replace the CoT tokens before generating the answer tokens
	- The special thing is, when processing these `<thought>` tokens, the latent vectors are fed back to the model instead of having to do decoding (the `<thought>` token is not a part of the vocab as it's never needed to be decoded)
	- they found that when putting the latent vectors of these `<thought>` tokens through the unembedding layer, the output distribution has multiple big logits instead of 1 big one
		- to me, it seems like the model is doing something like exploring multiple paths in parallel
		- the mechanism could be BFS with Dynamic Programming

- The idea of letting the LLMs process directly on the continuous latent space is interesting
	- assuming the theory that concepts in LLMs are represented by directions; and the "thinking" process is iteratively choosing which directions to follow to get to a desired distribution
		- then processing on the latent space make that process more natural and fluid, without dealing with the proxy of natural language tokens
	- it also free us from the DFS-style decoding
	- I wonder if BFS, dynamic programming and other algorithmic framework can be applied here to make the generation process "smarter" ? #idea/research 
		- perhaps something like applying a Hidden Markov process ? [[Is an LLM a one giant Hidden Markov model ?]]