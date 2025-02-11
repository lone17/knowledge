---
aliases: 
tags: 
modified: 2025-02-04 10:34 +07:00
created: 2025-02-03 18:52 +07:00
---
#idea/research #hypothesis #cs/ai/ml/nlp/llm 

- the direction representing opposite concepts (e.g. `A is true` and `A is false`) are not represented by opposite directions
- Hence, they can co-occur and the model can detect this either by
	- an overlapping (non-zero scalar projection) of the 2 directions
	- or a "logical conflict" direction which is the difference of the 2 said directions (I prefer this hypothesis)
- then it would trigger a "rethink" direction that makes the model "backtrack" its reasoning 