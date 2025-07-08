---
aliases:
  - "@zhu2025Reasoning"
tags:
  - integration/zotero
modified: 2025-02-12 00:33 +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> Zhu, Hanlin, et al. _Reasoning by Superposition: A Theoretical Perspective on Chain of Continuous Thought_. arXiv:2505.12514, arXiv, 18 May 2025. _arXiv.org_, [https://doi.org/10.48550/arXiv.2505.12514](https://doi.org/10.48550/arXiv.2505.12514).

> [!info] Metadata
> **Title**: Reasoning by Superposition: A Theoretical Perspective on Chain of Continuous Thought
> **Authors**: Hanlin Zhu, Shibo Hao, Zhiting Hu, Jiantao Jiao, Stuart Russell, Yuandong Tian
> **Cite key**: zhu2025Reasoning

>[!info] Links
>
> - [Online Link](http://arxiv.org/abs/2505.12514)
> - [Zotero PDF Link](zotero://select/library/items/UPRRRD8L)

> [!info] Abstract
> Large Language Models (LLMs) have demonstrated remarkable performance in many applications, including challenging reasoning problems via chain-of-thoughts (CoTs) techniques that generate ``thinking tokens'' before answering the questions. While existing theoretical works demonstrate that CoTs with discrete tokens boost the capability of LLMs, recent work on continuous CoTs lacks a theoretical understanding of why it outperforms discrete counterparts in various reasoning tasks such as directed graph reachability, a fundamental graph reasoning problem that includes many practical domain applications as special cases. In this paper, we prove that a two-layer transformer with $D$ steps of continuous CoTs can solve the directed graph reachability problem, where $D$ is the diameter of the graph, while the best known result of constant-depth transformers with discrete CoTs requires $O(n^2)$ decoding steps where $n$ is the number of vertices ($D<n$). In our construction, each continuous thought vector is a superposition state that encodes multiple search frontiers simultaneously (i.e., parallel breadth-first search (BFS)), while discrete CoTs must choose a single path sampled from the superposition state, which leads to sequential search that requires many more steps and may be trapped into local solutions. We also performed extensive experiments to verify that our theoretical construction aligns well with the empirical solution obtained via training dynamics. Notably, encoding of multiple search frontiers as a superposition state automatically emerges in training continuous CoTs, without explicit supervision to guide the model to explore multiple paths simultaneously.

# Notes
## From Obsidian
_(As notes and annotations from Zotero are one-way synced, this section include a link to another note within Obsidian to host further notes)_
![[literature notes/papers/Reasoning by Superposition - A Theoretical Perspective on Chain of Continuous Thought]]
## From Zotero
_(one-way sync from Zotero)_
**Imported: 2025-06-25**
Comment: 26 pages, 7 figures
[View in local Zotero](zotero://open-pdf/library/items/PN9GTWXV)


# Annotations
![[Highlight Colour Codings#Highlighting colour codes]]
## From Zotero
_(one-way sync from Zotero)_