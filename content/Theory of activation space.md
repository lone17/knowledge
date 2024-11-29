---
aliases: 
tags:
  - cs/ai/ml/mechanistic-intepretation
  - cs/ai/ml/theory
created: 2024-11-05 12:02 PM +07:00
modified: 2024-11-05 21:33 PM +07:00
---
# hypothesis
## activation space is Euclidean
- [[Control LLM generation#activations space can be analyzed using Euclidean metrics]]
## behaviours are represented by directions in the activation space
- [[*Refusal in LLMs is mediated by a single direction — LessWrong]]
- [[Control LLM generation#different directions have varying effects on refusal]]
## activation spaces of layers share similar geometric properties
- [[Control LLM generation#single refusal direction are applicable across layers]]
## different directions represents different behaviour or varying effects of one behaviour
- [[Control LLM generation#different directions have varying effects on refusal]]
# implications
## linear directions as behaviour toggles
- if some behaviours of the model can be represented as a single direction across layers, then that direction can be used as a key to lock/unlock certain regions in the activation space (can be see as knowledge) #idea
	- removing the direction = lock the access to some knowledge
	- adding back the direction = unlock knowledge
	- can be used to modularized the behaviours of the model #cs/ai/ml/modular-learning #idea
		- model weights can be distributed with only some "knowledge"/behaviours disabled, and can be enabled on demand later
		- we could force the model to "organize" some "knowledge" or behaviours in a specific direction, which means those "knowledge" or behaviours will be hidden away if said direction is not present in the activations
## on model merging
According to [[What Matters for Model Merging at Scale?]], these findings were presented:
1. Instruction-tuned models facilitate model merging.
	- this would make sense if instruction fine-tuning introduces new behaviour directions into the model weights #hypothesis
	- this might be related to ![[Control LLM generation#the use of chat template seems to be important]]
2. Model merging becomes easier with bigger models
- This can be explained that with bigger models, the activations have higher dimension, thus the basis from the matrix transformations at each layer are more separated (have lower cosine similarity) #hypothesis
	- Thus when merged, these directions are combined with less cancelling out effect
3. Merged models at scale generalize better
- Same reasoning as above, with higher dimension, the basis are more likely to be orthogonal #hypothesis
	- thus the model is able to represent more fine-grained "skill" vectors
	- the combination of some of these "skill" vectors might be beneficial for generalizing to new tasks
4. Bigger model sizes can merge more expert
- Also using the same reasoning, higher dimensional space can fit more orthogonal "skill" vectors