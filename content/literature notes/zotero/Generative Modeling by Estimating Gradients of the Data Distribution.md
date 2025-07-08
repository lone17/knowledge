---
aliases:
  - "@song2020Generative"
tags:
  - integration/zotero
modified: 2025-02-12 00:33 +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> Song, Yang, and Stefano Ermon. _Generative Modeling by Estimating Gradients of the Data Distribution_. arXiv:1907.05600, arXiv, 10 Oct. 2020. _arXiv.org_, [https://doi.org/10.48550/arXiv.1907.05600](https://doi.org/10.48550/arXiv.1907.05600).

> [!info] Metadata
> **Title**: Generative Modeling by Estimating Gradients of the Data Distribution
> **Authors**: Yang Song, Stefano Ermon
> **Cite key**: song2020Generative

>[!info] Links
>
> - [Online Link](http://arxiv.org/abs/1907.05600)
> - [Zotero PDF Link](zotero://select/library/items/D67TGEWA)

> [!info] Abstract
> We introduce a new generative model where samples are produced via Langevin dynamics using gradients of the data distribution estimated with score matching. Because gradients can be ill-defined and hard to estimate when the data resides on low-dimensional manifolds, we perturb the data with different levels of Gaussian noise, and jointly estimate the corresponding scores, i.e., the vector fields of gradients of the perturbed data distribution for all noise levels. For sampling, we propose an annealed Langevin dynamics where we use gradients corresponding to gradually decreasing noise levels as the sampling process gets closer to the data manifold. Our framework allows flexible model architectures, requires no sampling during training or the use of adversarial methods, and provides a learning objective that can be used for principled model comparisons. Our models produce samples comparable to GANs on MNIST, CelebA and CIFAR-10 datasets, achieving a new state-of-the-art inception score of 8.87 on CIFAR-10. Additionally, we demonstrate that our models learn effective representations via image inpainting experiments.

# Notes
## From Obsidian
_(As notes and annotations from Zotero are one-way synced, this section include a link to another note within Obsidian to host further notes)_
![[literature notes/papers/Generative Modeling by Estimating Gradients of the Data Distribution]]
## From Zotero
_(one-way sync from Zotero)_
**Imported: 2025-06-25**
Comment: NeurIPS 2019 (Oral)
[View in local Zotero](zotero://open-pdf/library/items/7DIUNQ29)


# Annotations
![[Highlight Colour Codings#Highlighting colour codes]]
## From Zotero
_(one-way sync from Zotero)_