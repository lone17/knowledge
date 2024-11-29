---
aliases: 
tags: 
modified: 2024-08-14 14:30 PM +07:00
created: 2024-03-21 21:54 PM +07:00
---
#thought #idea #cs/ai/ml/representation-learning 

# motivation
- each piece of information has its own representation
- different tasks might require different amount of information
- it is not practical to represent all information in one latent space
    - information could be different in various characteristics: modality, domain, complexity
    - represent everything in one giant space is not efficient

Hence, the representations need to be combined losslessly
- from the combination, we should be able to get back each component
- one simple way is concatenation
- or using multiple modular modules

How to design an architecture that would be able to work with dynamic-sized representations ? #question
Do we still need, at some point, a unified latent space ?