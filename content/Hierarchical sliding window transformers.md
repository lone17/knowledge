---
aliases: 
tags: 
modified: 2024-06-14 04:19 AM +07:00
created: 2024-04-25 23:27 PM +07:00
---
#idea #cs/ai/ml/nlp 

- perform self attention like a sliding window (with overlap)
- calculate representative K, V for each window
- new token can attend to past windows
- extend this in a hierarchical manner when the context is even longer: sliding window over windows
    - then perform attention from top level windows to bottom level