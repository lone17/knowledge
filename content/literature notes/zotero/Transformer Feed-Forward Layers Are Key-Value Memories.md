---
aliases:
  - "@geva2021"
tags:
  - integration/zotero
modified: 2024-12-04 14:08 PM +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> Geva, Mor, et al. _Transformer Feed-Forward Layers Are Key-Value Memories_. arXiv:2012.14913, arXiv, 5 Sept. 2021. _arXiv.org_, [http://arxiv.org/abs/2012.14913](http://arxiv.org/abs/2012.14913).

> [!info] Metadata
> **Title**: Transformer Feed-Forward Layers Are Key-Value Memories
> **Authors**: Mor Geva, Roei Schuster, Jonathan Berant, Omer Levy
> **Cite key**: geva2021

>[!info] Links
>
> - [Online Link](http://arxiv.org/abs/2012.14913)
> - [Zotero PDF Link](zotero://select/library/items/VAZCGKLP)

> [!info] Abstract
> Feed-forward layers constitute two-thirds of a transformer model's parameters, yet their role in the network remains under-explored. We show that feed-forward layers in transformer-based language models operate as key-value memories, where each key correlates with textual patterns in the training examples, and each value induces a distribution over the output vocabulary. Our experiments show that the learned patterns are human-interpretable, and that lower layers tend to capture shallow patterns, while upper layers learn more semantic ones. The values complement the keys' input patterns by inducing output distributions that concentrate probability mass on tokens likely to appear immediately after each pattern, particularly in the upper layers. Finally, we demonstrate that the output of a feed-forward layer is a composition of its memories, which is subsequently refined throughout the model's layers via residual connections to produce the final output distribution.

# Notes
## From Obsidian
_(As notes and annotations from Zotero are one-way synced, this section include a link to another note within Obsidian to host further notes)_
![[literature notes/papers/Transformer Feed-Forward Layers Are Key-Value Memories]]
## From Zotero
_(one-way sync from Zotero)_

# Annotations
![[Highlight Colour Codings#Highlighting colour codes]]
## From Zotero
_(one-way sync from Zotero)_
**Imported: 2024-12-04**^e0c377

>[!quote] <mark style="background: #FFF3A3A6;">Note</mark> | [View in local Zotero: page 1](zotero://open-pdf/library/items/6WKI6PAN?page=1&annotation=EZC7WP8Y)
>![[assets/Transformer Feed-Forward Layers Are Key-Value Memories/zotero-image-undefined-x302-y292.png]] ^ezc7wp8y


>[!quote] <mark style="background: #FFF3A3A6;">Note</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/6WKI6PAN?page=2&annotation=5GADBC4W)
>![[assets/Transformer Feed-Forward Layers Are Key-Value Memories/zotero-image-2-x69-y255.png]] ^5gadbc4w


>[!quote] <mark style="background: #FFF3A3A6;">Note</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/6WKI6PAN?page=2&annotation=UA44MGXC)
>![[assets/Transformer Feed-Forward Layers Are Key-Value Memories/zotero-image-2-x303-y611.png]] ^ua44mgxc


>[!quote] <mark style="background: #ADCCFFA6;">Claim</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/6WKI6PAN?page=2&annotation=WRLBEILC)
>“We conjecture that each key vector ki captures a particular pattern (or set of patterns) in the input sequence (Section 3), and that its corresponding value vector vi represents the distribution of tokens that follows said pattern (Section 4).” ^wrlbeilc


>[!quote] <mark style="background: #D2B3FFA6;">Important</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/6WKI6PAN?page=6&annotation=PFIPJRIZ)
>“the layer-level prediction is typically not the result of a single dominant memory cell, but a composition of multiple memories.” ^pfipjriz


>[!quote] <mark style="background: #D2B3FFA6;">Important</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/6WKI6PAN?page=6&annotation=9J3ENWYP)
>“We further analyze cases where at least one memory cell agrees with the layer’s prediction, and find that (a) in 60% of the examples the target token is a common stop word in the vocabulary (e.g. “the” or “of”), and (b) in 43% of the cases the input prefix has less than 5 tokens.” ^9j3enwyp


>[!quote] <mark style="background: #D2B3FFA6;">Important</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/6WKI6PAN?page=7&annotation=VTP822LJ)
>![[assets/Transformer Feed-Forward Layers Are Key-Value Memories/zotero-image-7-x65-y568.png]] ^vtp822lj


>[!quote] <mark style="background: #D2B3FFA6;">Important</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/6WKI6PAN?page=7&annotation=QI8ZFU6U)
>“a multi-layer model uses the residual connection r to sequentially compose predictions to produce the model’s final output” ^qi8zfu6u


>[!quote] <mark style="background: #D2B3FFA6;">Important</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/6WKI6PAN?page=7&annotation=LX5TNW3J)
>“the model uses the sequential composition apparatus as a means to refine its prediction from layer to layer, often deciding what the prediction will be at one of the lower layers.” ^lx5tnw3j


