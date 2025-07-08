---
aliases: 
tags: 
modified: 2025-05-03 14:41 +07:00
created: 2025-05-02 13:57 PM +07:00
---
#cs/ai/ml/nlp/llm #research #idea #hypothesis 

- Most computation in LLMs are in self attention and MLP block.
- But inputs to these blocks have fixed length
- That means the vector length is a degree of freedom that is not used to for representation capability. So what is it used for ?

Hypothesis: It's a filter mechanism. Suppose that an activation is a weighted sum of related features: $a = \Sigma_i c_i{f_i}$