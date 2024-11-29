---
aliases: 
tags: 
modified: 2024-07-30 11:16 AM +07:00
created: 2024-07-30 10:25 AM +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/nlp/tokenizer

# references
- [Summary of the tokenizers](https://huggingface.co/docs/transformers/en/tokenizer_summary)
# sub-word tokenization
- A hybrid between word-level and character-level tokenization
	- less memory complexity and computation than word-level tokenization
	- better at learning context-independent representation than character-level tokenization
- Most LLMs nowadays uses sub-word tokenizers

# methods
- [[Byte-Pair Encoding (BPE)]]
- [[Byte-level BPE]]
- [[WordPiece]]
- [[Unigram Tokenization]]
- [[SentencePiece]]
