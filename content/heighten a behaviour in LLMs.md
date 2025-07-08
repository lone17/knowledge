---
aliases: 
tags: 
modified: 2025-06-08 17:11 +07:00
created: 2025-05-02 13:48 PM +07:00
---
#idea #cs/ai/ml/nlp/llm #research #hypothesis

Hypothesis: The process of expressing some behaviour is
- there is some trigger features corresponding to the target feature
- a distribution in the activation space that corresponded to the desired output
- the trigger features bring out the target features (could be different or the same), then said features steered the model to the desired distribution.

So 3 things: triggers, steerer, distribution. If we have 2 of them, we can induce the 3rd. 

Application:
- make a feature available on a base model without the need for finetuning
- analyze the triggers of a behaviour