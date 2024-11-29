---
aliases: 
tags: 
created: 2024-07-30 11:16 AM +07:00
modified: 2024-07-30 11:23 AM +07:00
---
# Background
- Introduced in [SentencePiece: A simple and language independent subword tokenizer and detokenizer for Neural Text Processing (Kudo et al., 2018)](https://arxiv.org/pdf/1808.06226.pdf)
- [[Byte-Pair Encoding (BPE)]], [[Byte-level BPE]], [[WordPiece]], [[Unigram Tokenization]] have the same problem: assuming that the input text uses spaces to separate words.
# How it works
- Treats the input as a raw input stream
- thus including the space in the set of character to use
- then uses [[Byte-Pair Encoding (BPE)]] or [[Unigram Tokenization]] to construct the vocab
# Notes
- Decoding is easy since all tokens can just be concatenated
- All models in the transformers library that use [[SentencePiece]] use it in combination with [[Unigram Tokenization]]
	- e.g. [ALBERT](https://huggingface.co/docs/transformers/en/model_doc/albert), [XLNet](https://huggingface.co/docs/transformers/en/model_doc/xlnet), [Marian](https://huggingface.co/docs/transformers/en/model_doc/marian), and [T5](https://huggingface.co/docs/transformers/en/model_doc/t5).
