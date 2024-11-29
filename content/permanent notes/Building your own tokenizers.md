---
aliases: 
tags: 
created: 2023-12-23 06:23 AM +07:00
---
#cs/ai/ml/nlp
# Pros
- for ad-hoc cases where the tokens are very different than in natural language text, e.g. codes
- for languages that are not well represented in existing models (i.e. non-English), the tokens and the vocabs could be very different 
# Cons
- maybe your data doesn't represent what people are going to use the model for, it might not be as efficient and as effective at processing that kind of data.

# Advices
- compare against a good general purpose tokenizer (e.g. [[GPT-NeoX]]) to make sure that it works better
	- not all the tokenizer created at Mosaic is better than the generic one ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182232-what-should-you-train)) 
- The size of vocab has not been definitively studied and there's no good heuristic for choosing vocab size. ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182964-q-a))
	- vocab size will impact the efficiency of the model
	- bigger vocab will be less efficient, but have more tokens so it's more token efficient (a piece of text may fit into fewer tokens)
	- OpenAI tends to go with very big vocab
	- vary by domain quite a bit
	- a standard ~50k tends to be popular
		- but in production there has been down to 25k or up to over 100k before
		- none of them has been making the model much better or much less efficient
		- somewhere in that range should be a safe choice