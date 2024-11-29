---
aliases:
  - lorablated
tags: 
modified: 2024-08-15 15:26 PM +07:00
created: 2024-08-15 15:12 PM +07:00
---
#cs/ai/ml/nlp/llm/transfer #cs/ai/ml/nlp/llm/post-training 

# what
- a recipe for transfer uncensoring
- steps:
	1. **Extraction**: Extract a [[LoRA]] adapter by comparing two models: a censored model (e.g. Llama 3) and an [[uncensor LLMs|abliterated]] model.
	2. **Merge**: Merge this new [[LoRA]] adapter using [[task arithmetic]] to a censored Llama 3.1 to [[uncensor LLMs|abliterate]] it.