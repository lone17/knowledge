---
aliases:
  - "@turner2024"
tags:
  - integration/zotero
modified: 2024-12-04 14:08 PM +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> Turner, Alexander Matt, et al. _Steering Language Models With Activation Engineering_. arXiv:2308.10248, arXiv, 10 Oct. 2024. _arXiv.org_, [http://arxiv.org/abs/2308.10248](http://arxiv.org/abs/2308.10248).

> [!info] Metadata
> **Title**: Steering Language Models With Activation Engineering
> **Authors**: Alexander Matt Turner, Lisa Thiergart, Gavin Leech, David Udell, Juan J. Vazquez, Ulisse Mini, Monte MacDiarmid
> **Cite key**: turner2024

>[!info] Links
>
> - [Online Link](http://arxiv.org/abs/2308.10248)
> - [Zotero PDF Link](zotero://select/library/items/T38THD4A)

> [!info] Abstract
> Prompt engineering and finetuning aim to maximize language model performance on a given metric (like toxicity reduction). However, these methods do not fully elicit a model's capabilities. To reduce this gap, we introduce activation engineering: the inference-time modification of activations in order to control (or steer) model outputs. Specifically, we introduce the Activation Addition (ActAdd) technique, which contrasts the intermediate activations on prompt pairs (such as "Love" versus "Hate") to compute a steering vector (Subramani et al. 2022). By tactically adding in e.g. the "Love" - "Hate" steering vector during the forward pass, we achieve SOTA on negative-to-positive sentiment shift and detoxification using models including LLaMA-3 and OPT. ActAdd yields inference-time control over high-level output properties (like topic and sentiment) while preserving performance on off-target tasks. ActAdd is lightweight: it does not require any machine optimization and works with a single pair of data points, which enables rapid iteration over steering. ActAdd demonstrates the power of activation engineering.

# Notes
## From Obsidian
_(As notes and annotations from Zotero are one-way synced, this section include a link to another note within Obsidian to host further notes)_
![[literature notes/papers/Steering Language Models With Activation Engineering]]
## From Zotero
_(one-way sync from Zotero)_

# Annotations
![[Highlight Colour Codings#Highlighting colour codes]]
## From Zotero
_(one-way sync from Zotero)_