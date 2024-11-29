---
aliases: 
tags: 
created: 2024-07-30 11:07 AM +07:00
modified: 2024-07-30 11:07 AM +07:00
---
- Uses in [BERT](https://huggingface.co/docs/transformers/en/model_doc/bert), [DistilBERT](https://huggingface.co/docs/transformers/en/model_doc/distilbert), and [Electra](https://huggingface.co/docs/transformers/en/model_doc/electra)
- Very similar to BPE but instead of choosing the most frequent symbol pair, it chooses the pair that maximizes likelihood of the training data
- Choose the pair such that $\frac{P(x1x2)}{P(x1)P(x2)}$  is the greatest amongst all $(x1, x2)$ pairs.
	- Intuitively, it evaluates what it *loses* by merging 2 symbols to ensure it's *worth* it.