---
created: 2023-12-19 02:45 AM +07:00
---
#cs/ai/ml/nlp/llm/sampling  
- finds the smallest number of tokens with total probability  > p
- then samples from these tokens.

i.e.
- sort the tokens by probability in descending order
- take all tokens until prefix sum > p

![[temperature-vs-nucleus-sampling.excalidraw#^area=LQivECaGHCynCm573z0dk]]