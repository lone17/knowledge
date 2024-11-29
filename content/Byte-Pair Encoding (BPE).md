---
aliases: 
tags: 
created: 2024-07-30 11:04 AM +07:00
modified: 2024-07-30 11:04 AM +07:00
---

- Introduced in [Neural Machine Translation of Rare Words with Subword Units (Sennrich et al., 2015)](https://arxiv.org/abs/1508.07909)
# How it works
- Relies on pre-tokenization:
	- can be simple as space tokenization, e.g. GPT-2, RoBERTa
	- or more advanced like rule-based tokenization, e.g.g XLM, FlauBERT which uses Moses, GPT which uses spaCy and ftfy to count the word frequency in the training corpus
- Pre-tokenization gives a set of unique words with frequency
- Creates a base vocab consists of all symbols that occur in the set of unique words 
- Learns merge rules to form new symbols from 2 symbols such that to maximize symbol pair frequency
- It does so until attaining the desired vocab size