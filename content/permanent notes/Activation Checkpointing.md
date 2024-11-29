---
created: 2023-12-23 01:18 AM +07:00
---
#cs/ai/ml/nlp/llm/training 

# Why
If the model is so big and there is not enough memory to store the activation. 

# How
 - Compute the activations then delete them for some layers to save some memory
 - then on the backward pass, recomputes those activations when needed using the activations that got saved.

# Hence
- Save some memory
- But need to do the forward pass twice for some layers, which costs some compute
