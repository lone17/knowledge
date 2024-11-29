---
created: 2024-04-25 23:31 PM +07:00
modified: 2024-04-25 23:41 PM +07:00
---
#idea #cs/ai/ml/nlp

- start with pairs of document in 2 different languages (e.g. books)
- force the embeddings of the mode for the target language to be aligned with that of the model for the source language
    - using extra encoders to aligned the encoded embeddings ?
        - document embeddings must be calculated using the token embeddings
    - using a reward model ?
    - 