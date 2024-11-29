---
created: 2023-12-01 06:10 AM +07:00
modified: 2024-01-01 22:11 PM +07:00
---
- just adds a bit of a bias to the attention operations of things that are further apart
- good at extrapolating
- automatically gives the model the ability to look at longer sequences than it was trained on.
- used at Moisac, because
	- faster
	- doesn't need to change anything about the network, just need to plug in a little bit of a bias into the attention