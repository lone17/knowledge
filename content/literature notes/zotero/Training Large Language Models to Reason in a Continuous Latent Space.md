---
aliases:
  - "@hao2024"
tags:
  - integration/zotero
modified: 2025-01-29 21:50 +07:00
created: 2024-07-23 16:20 +07:00
---
> [!Cite]
> Hao, Shibo, et al. _Training Large Language Models to Reason in a Continuous Latent Space_. arXiv:2412.06769, arXiv, 11 Dec. 2024. _arXiv.org_, [https://doi.org/10.48550/arXiv.2412.06769](https://doi.org/10.48550/arXiv.2412.06769).

> [!info] Metadata
> **Title**: Training Large Language Models to Reason in a Continuous Latent Space
> **Authors**: Shibo Hao, Sainbayar Sukhbaatar, DiJia Su, Xian Li, Zhiting Hu, Jason Weston, Yuandong Tian
> **Cite key**: hao2024

>[!info] Links
>
> - [Online Link](http://arxiv.org/abs/2412.06769)
> - [Zotero PDF Link](zotero://select/library/items/B4JF8NK8)

> [!info] Abstract
> Large language models (LLMs) are restricted to reason in the "language space", where they typically express the reasoning process with a chain-of-thought (CoT) to solve a complex reasoning problem. However, we argue that language space may not always be optimal for reasoning. For example, most word tokens are primarily for textual coherence and not essential for reasoning, while some critical tokens require complex planning and pose huge challenges to LLMs. To explore the potential of LLM reasoning in an unrestricted latent space instead of using natural language, we introduce a new paradigm Coconut (Chain of Continuous Thought). We utilize the last hidden state of the LLM as a representation of the reasoning state (termed "continuous thought"). Rather than decoding this into a word token, we feed it back to the LLM as the subsequent input embedding directly in the continuous space. Experiments show that Coconut can effectively augment the LLM on several reasoning tasks. This novel latent reasoning paradigm leads to emergent advanced reasoning patterns: the continuous thought can encode multiple alternative next reasoning steps, allowing the model to perform a breadth-first search (BFS) to solve the problem, rather than prematurely committing to a single deterministic path like CoT. Coconut outperforms CoT in certain logical reasoning tasks that require substantial backtracking during planning, with fewer thinking tokens during inference. These findings demonstrate the promise of latent reasoning and offer valuable insights for future research.

# Notes
## From Obsidian
_(As notes and annotations from Zotero are one-way synced, this section include a link to another note within Obsidian to host further notes)_
![[literature notes/papers/Training Large Language Models to Reason in a Continuous Latent Space]]
## From Zotero
_(one-way sync from Zotero)_

# Annotations
![[Highlight Colour Codings#Highlighting colour codes]]
## From Zotero
_(one-way sync from Zotero)_