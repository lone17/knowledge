---
created: 2023-12-19 03:55 AM +07:00
---
#cs/ai/ml/nlp/llm #cs/ai/ml/evaluation 

# Pros
- measures meaningful skills (coding)
- automated evaluation (using unitest)
- mitigates problems of older approaches, e.g.:
	- BLEU (match-based, uses reference solutions) punishes candidates with very short length (brevity penalty).

# Cons
- small size, prone to overfitting
- limited scope (python, single function)
- potential contamination (models trained on new Github scrapes) because the dataset is available on Github