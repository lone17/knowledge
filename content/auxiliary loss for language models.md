---
aliases: 
tags: 
modified: 2024-09-02 17:01 PM +07:00
created: 2024-03-04 04:55 AM +07:00
---
#idea #cs/ai/ml/nlp 

- CNN models have auxiliary loss at different depths of the model
  ![[assets/auxiliary loss for language models/attachment.jpg]]
    - original motivation was to reduce vanishing gradient
    - these losses can be the same
    - which means the model can perform the same task at different depth, albeit with different performance level
- Can we apply the same idea for language models ? #question 
    - different depths of the model can perform the same task