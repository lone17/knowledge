---
aliases: 
tags:
  - cs/ai/ml/mechanistic-intepretation
  - "#thought"
  - cs/ai/ml/theory
created: 2024-10-29 17:08 PM +07:00
modified: 2024-11-14 10:08 AM +07:00
---
# consecutive matrix transformations are series of change of basis in activation space
- initial vector space with basis `[1, 0], [0, 1]`, the yellow region indicates ReLU operation
  ![[assets/The effects of neural net layers on activation space/attachment.jpg|320]]
- the vector space after changed to basis `[2, -1], [0, 2]`
   ![[assets/The effects of neural net layers on activation space/attachment_1.jpg|320]]
# NNs are series of change of basis
- multiplying with a matrix is changing the basis of the vectors (data) space
- skip connection is combining the 1st orthant of the spaces spanned by multiple basis
- applying ReLU is to discard everything but the 1st _orthant/hyperoctant_ (all component is non-negative)

- For a transformer layer: ^8c2a5f
	- The skip connection is indeed maintain the geometry
	- In self-attention:
		- When $d == dv$, the values $V$ is $X$ but with different basis vectors (by matrix transformation $W_v$)
			- Each row (token) in $Z$ is a linear combination of each row (token) in $V$ (with the coefficients decided in $A$)
				- Hence $Z$ have the same basis as $V$
			- Hence $X$ and $Z$ are both in Euclidean space but with different basis
			- Hence even with a softmax operation, transformer blocks are still a change of basis operation
	- So the attention layer learn a set of basis based on the tokens within the attention window
	- By applying the skip connection, the output activations can be seen as combinations by 2 set of basis (with and without attention)
		- as layer went deeper, the activations become the combinations of more and more basis vectors, each of which might represent different knowledge/behaviour #hypothesis
	![[attachment_2.jpg]]
# transformer layers expand and "untangle" the activation space
![[Control LLM generation#transformer layers expand and "untangle" the activation space]]