---
aliases: 
tags: 
created: 2025-06-30 03:10 AM +07:00
modified: 2025-07-03 10:52 +07:00
---
#idea/research 

Inspired by 
- [[Training Large Language Models to Reason in a Continuous Latent Space]]
- [[Reasoning by Superposition - A Theoretical Perspective on Chain of Continuous Thought]]
the residual stream contains multiple features and explores them at the same time

So if we can find the direction for multiple problem solving strategies, and suppose that we know a problem can be attack using certain approaches, then we can preload those "problem solving strategy" directions into the residual stream.

Take competitive programming for example, if we have the feature direction for dfs, bfs, binary search, dynamic programming, etc., we can load some of them to the residual stream to make the model explores those directions explicitly.

