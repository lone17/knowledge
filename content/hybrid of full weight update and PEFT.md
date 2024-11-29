---
modified: 2024-02-26 01:29 AM +07:00
created: 2024-02-26 01:26 AM +07:00
---
#idea #cs/ai/ml/nlp/llm/training 

- randomly perform full weight update while doing PEFT
- heuristically perform full weight update while doing PEFT
    - if the variance of the PEFT gradients are above some threshold, run the step again to perform a full weight update