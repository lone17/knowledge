---
aliases: 
tags: 
modified: 2024-09-10 16:28 PM +07:00
created: 2024-09-03 17:00 PM +07:00
---
#idea

# what
A [[knowledge graph]] containing a person's
- characteristics
- life events
- experience
- traumas
- thoughts
- perspectives
- traits
- etc.
and these things related to each other (e.g. how an event influence a personality trait).

# application
Can be used to build virtual characters
- Store the embeddings of each node in the graph.
- On each query, retrieve the top k the closest nodes.
- Extract the sub-graphs surrounding each retrieved node within a certain radius.
- Process the extracted sub-graph to build context for generation.
- Maybe fine-tune the LLM to generate using sub-graph results directly
	- process sub-graph to context as above
	- use the processed context for generation
	- use the generation output as training data

