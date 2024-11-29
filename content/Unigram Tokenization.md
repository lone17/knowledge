---
aliases: 
tags: 
created: 2024-07-30 11:07 AM +07:00
modified: 2024-07-30 11:21 AM +07:00
---
# Background
- Introduced in [Subword Regularization: Improving Neural Network Translation Models with Multiple Subword Candidates (Kudo, 2018)](https://arxiv.org/pdf/1804.10959.pdf)
- Not usually used directly, but used in conjunction with [[SentencePiece]]
# How it works
- Initializes the base vocab to a large number of symbols
	- could be all pre-tokenized words and the most common substrings
- Defines a loss (often log-likelihood) over the training data given the current vocab and a unigram language model
- For each symbol in the vocab, computes how much the loss would increase if the symbol was to be removed
- It removes 10-20% of the symbols that least affect the overall loss over the training data
- Repeats until reached the desired size.
- Always keeps the base characters so that any word can be tokenized.
# Notes
- Since the algorithm is not based on merge rules, it has several ways of tokenizing a text
	- picks the most likely tokenization
	- but also sample a possible tokenization according to their probabilities