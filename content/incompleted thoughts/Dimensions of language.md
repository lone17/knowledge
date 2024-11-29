---
modified: 2024-06-14 04:19 AM +07:00
created: 2024-01-18 18:22 PM +07:00
---
#idea 

# Hypothesis
Language has many dimensions:
- grammar
- semantic
	- common sense
	- math
	- physics
	- ...
- emotion
- writing style
- ...

Some works that relevant to this:
- word2vec
- multi-headed attention: different heads learn different things
- FF layer of LLM is very sparse 
	- cite some work: ...
	- there are papers try to predict which neuron will be activate to load only them => reduce the computation and resource needed 
- ... ?
- is there any linguistic research support this ?
- in CV, it is believed that different channels and different filters learn different things

# Questions
- Can we decouple the dimension ?
	- Can we do it efficiently ?
	- How sparse should we do it ?
		- to individual dimension ?
		- or group of  dimension like in multi-headed
- Does decoupling give better performance than not doing so ?

# Implications
Language models are probabilistic models that generate the next most likely token. To make it more "creative", some token sampling strategies ([[LLM sampling strategy]]) are employed to introduce some more randomness to token selection.

If the dimensions are decouple, we can have more control over the generation. Depends on the goal, different dimensions will need more randomness while others don't:
- gibberish texts = random on all dimensions
- a newbie practicing English = not random on semantic dimensions and more random on grammar dimensions. (They might have  terrible grammar but what they say still make sense.)
- a novel idea on physics = not random on grammar and math but some random on physics