---
aliases: 
tags: 
created: 2025-07-10 03:28 AM +07:00
modified: 2025-07-10 03:33 +07:00
---
#idea/research #cs/ai/ml/nlp/llm #cs/ai/ml/diffusion 

# implications
- This would be highly impactful as we can leverage existing powerful LLM and not having to start from scratch

- If it works then it means that we can **unify the activation space of AR LM and Diffusion LM**
	- This is supported by [[Harnessing the Universal Geometry of Embeddings]]
	- We can then apply all the analysis and steering techniques from AR LLM to apply on Diffusion LM

- It will also unify the 2 views:
	- [[LLM generation is path finding in activation space, each decoder block's processing is taking a step in said space]]
	- [[diffusion is path finding in gradient space of data distribution using Langevin sampling]]


- even if we can just distill from a 70B AR LM to a 7B diffusion LM, as long as it performs as good as a 7B LM but faster then it's a win