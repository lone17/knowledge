---
created: 2023-12-19 03:02 AM +07:00
modified: 2024-01-03 18:43 PM +07:00
---
#cs/ai/ml/nlp/llm/sampling

![[temperature-vs-nucleus-sampling.excalidraw#^area=WeTLOBcRZBH03u6ZwBjjq]]

# idea
adjusts the probability distribution of the tokens so that they are more uniform (even out the distribution)
-> thus more likely to pick tokens with low probability 

# formula
$$P_i = \frac{e^\frac{y_i}{T}}{\sum^{V}_{j=1}e^\frac{y_j}{T}}$$
with:
- $P_i$ : <mark style="background: #ADCCFFA6;">the probability of the i-th token after rescaling using temperature </mark>
- $y_i$ : <mark style="background: #BBFABBA6;"> the logit of the i-th token</mark>
- $V$ : <mark style="background: #FFF3A3A6;">number of tokens in the vocab</mark>
- T : <mark style="background: #FF5582A6;">the temperature</mark>

-> higher temp = more diverse examples (more creative)

# choosing temperature for pass@k
- for small k, use low temp 
	- e.g. k = 1, temp = 0.2
- for bigger k, use smaller temp => to get more diverse examples
	- e.g. k = 100, temp = 0.8