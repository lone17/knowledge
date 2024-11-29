---
aliases:
  - "@sorscher2023"
tags:
  - "#literature-notes/paper"
modified: 2024-09-24 13:32 PM +07:00
read: false
read_date: 
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> Sorscher, Ben, et al. _Beyond Neural Scaling Laws: Beating Power Law Scaling via Data Pruning_. arXiv:2206.14486, arXiv, 21 Apr. 2023. _arXiv.org_, [https://doi.org/10.48550/arXiv.2206.14486](https://doi.org/10.48550/arXiv.2206.14486).

> [!info] Metadata
> **Title**: Beyond neural scaling laws: beating power law scaling via data pruning
> **Authors**: Ben Sorscher, Robert Geirhos, Shashank Shekhar, Surya Ganguli, Ari S. Morcos
> **Cite key**: sorscher2023

>[!info] Links
> - [Online Link](http://arxiv.org/abs/2206.14486)
> - [Zotero PDF Link](zotero://select/library/items/42T9P5JI)

> [!info] Abstract
> Widely observed neural scaling laws, in which error falls off as a power of the training set size, model size, or both, have driven substantial performance improvements in deep learning. However, these improvements through scaling alone require considerable costs in compute and energy. Here we focus on the scaling of error with dataset size and show how in theory we can break beyond power law scaling and potentially even reduce it to exponential scaling instead if we have access to a high-quality data pruning metric that ranks the order in which training examples should be discarded to achieve any pruned dataset size. We then test this improved scaling prediction with pruned dataset size empirically, and indeed observe better than power law scaling in practice on ResNets trained on CIFAR-10, SVHN, and ImageNet. Next, given the importance of finding high-quality pruning metrics, we perform the first large-scale benchmarking study of ten different data pruning metrics on ImageNet. We find most existing high performing metrics scale poorly to ImageNet, while the best are computationally intensive and require labels for every image. We therefore developed a new simple, cheap and scalable self-supervised pruning metric that demonstrates comparable performance to the best supervised metrics. Overall, our work suggests that the discovery of good data-pruning metrics may provide a viable path forward to substantially improved neural scaling laws, thereby reducing the resource costs of modern deep learning.

# Takeaways
- categorize data into hard and easy examples using prediction error difference between teacher and student models
- for unlabled data, cluster the data using embeddings from a pre-trained model, then categorize easy/hard samples using distance from centroid
# Related resources
- [Beyond neural scaling laws – Paper Explained - YouTube](https://www.youtube.com/watch?v=joZaCw5PxYs)
# Annotations
## Zotero

## PDF++