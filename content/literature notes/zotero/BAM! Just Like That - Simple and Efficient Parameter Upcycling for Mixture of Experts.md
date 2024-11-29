---
aliases:
  - "@zhang2024"
tags:
  - integration/zotero
modified: 2024-10-21 12:54 PM +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> Zhang, Qizhen, et al. _BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts_. arXiv:2408.08274, arXiv, 16 Aug. 2024. _arXiv.org_, [http://arxiv.org/abs/2408.08274](http://arxiv.org/abs/2408.08274).

> [!info] Metadata
> **Title**: BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts
> **Authors**: Qizhen Zhang, Nikolas Gritsch, Dwaraknath Gnaneshwar, Simon Guo, David Cairuz, Bharat Venkitesh, Jakob Foerster, Phil Blunsom, Sebastian Ruder, Ahmet Ustun, Acyr Locatelli
> **Cite key**: zhang2024

>[!info] Links
>
> - [Online Link](http://arxiv.org/abs/2408.08274)
> - [Zotero PDF Link](zotero://select/library/items/E34992I6)

> [!info] Abstract
> The Mixture of Experts (MoE) framework has become a popular architecture for large language models due to its superior performance over dense models. However, training MoEs from scratch in a large-scale regime is prohibitively expensive. Existing methods mitigate this by pre-training multiple dense expert models independently and using them to initialize an MoE. This is done by using experts’ feed-forward network (FFN) to initialize the MoE’s experts while merging other parameters. However, this method limits the reuse of dense model parameters to only the FFN layers, thereby constraining the advantages when "upcycling" these models into MoEs. We propose BAM (Branch-Attend-Mix), a simple yet effective method that addresses this shortcoming. BAM makes full use of specialized dense models by not only using their FFN to initialize the MoE layers but also leveraging experts’ attention parameters fully by initializing them into a soft-variant of Mixture of Attention (MoA) layers. We explore two methods for upcycling attention parameters: 1) initializing separate attention experts from dense models including all attention parameters for the best model performance; and 2) sharing key and value parameters across all experts to facilitate for better inference efficiency. To further improve efficiency, we adopt a parallel attention transformer architecture to MoEs, which allows the attention experts and FFN experts to be computed concurrently. Our experiments on seed models ranging from 590 million to 2 billion parameters demonstrate that BAM surpasses baselines in both perplexity and downstream task performance, within the same computational and data constraints.

# Notes
## From Zotero

## From Obsidian
![[literature notes/papers/BAM! Just Like That - Simple and Efficient Parameter Upcycling for Mixture of Experts]]
# Annotations
![[Highlight Colour Codings#Colour codes]]
## From Zotero
**Imported: 2024-10-21**^e0c377


<mark class="hltr-purple">Important</mark> | [View in local Zotero: page 1](zotero://open-pdf/library/items/63ZEKE8E?page=1&annotation=63IC95MS)
```ad-cite

> “Existing methods mitigate this by pre-training multiple dense expert models independently and using them to initialize an MoE. This is done by using experts’ feed-forward network (FFN) to initialize the MoE’s experts while merging other parameters.”




```


<mark class="hltr-yellow">Note</mark> | [View in local Zotero: page 1](zotero://open-pdf/library/items/63ZEKE8E?page=1&annotation=IA3YNYME)
```ad-cite

> “his method limits the reuse of dense model parameters to only the FFN layers, thereby constraining the advantages when "upcycling" these models into MoEs.”




```


<mark class="hltr-blue">Claim</mark> | [View in local Zotero: page 1](zotero://open-pdf/library/items/63ZEKE8E?page=1&annotation=EDXK2EQT)
```ad-cite

> “BAM makes full use of specialized dense models by not only using their FFN to initialize the MoE layers but also leveraging experts’ attention parameters fully by initializing them into a soft-variant of Mixture of Attention (MoA) layers.”




```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/63ZEKE8E?page=2&annotation=ZBNC9QXL)
```ad-cite


> ![[assets/BAM! Just Like That - Simple and Efficient Parameter Upcycling for Mixture of Experts/zotero-image-2-x57-y428.png]]



To me, there are 3 reasons why we would want to mix the experts:
1. To achieve better performance than each expert on its respective domain
2. To achieve similar performance to each expert on its respective domain but more efficient (e.g. easier to train, cheaper to do inference)
3. To generalize better to new related domains. The idea is that the model can combine the expertise in multiple domains to solve new tasks (e.g. combine expertise in math and reading comprehension to do investment analysis)

It appears to me that the author is aiming for the 2nd reason, because:
- they mentioned efficiency

- there is no out of domain evaluation
but they do not compare to the unmixed case, which we see later in the evaluation


If the experts are already specialized, why do we want to:

1. fine-tune them during MoE training, wouldn't it make the expert less specialized ?

2. use different routing for layers, wouldn't it under-utilize the speciality of the experts ? (note that evaluation is done on the same domain)

3. use different routing for FFN and Attention, again, wouldn't it under-utilize the speciality of the experts ?


So we need to identify whether mixing is better by:


1. freeze the experts, so we retain full specialization

2. try the same routing across layers so that the same expert is used in all layers (no inter-layer mixing)

3. try the same routing between Attention and FFN (no inter-expert mixing)

4. try the mixed model on out of domain data and compared with unmixed, this can show if mixing decreases specialization but in exchange for better generalization and adaptability, and whether the tradeoff is worth it.


5. Additionally, instead of uniform routing, we can try lowering the level of mixing. This can be done by making the router in a layer depends on the router of a previous layer (e.g. with a skip connection). Or we can use a loss that encourage the routing in different layers to be similar.


Trying uniform routing can be tricky because it's using per-token routing and can not see the whole example, especially during inference. So we can approximate per-example routing by sending the first k tokens to the general experts, then use the output to calculate the routing for the rest of the sequence.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/63ZEKE8E?page=2&annotation=RR3ZVN5C)
```ad-cite

> “due”




grammar

```


<mark class="hltr-orange">External Insight</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/63ZEKE8E?page=4&annotation=9JEAC6CH)
```ad-cite

> “Parallel attention transformers offer better throughput compared to traditional transformers, with only minor performance degradation at smaller scales but no degradation at larger scales”




```


<mark class="hltr-orange">External Insight</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/63ZEKE8E?page=5&annotation=EMK84QME)
```ad-cite

> “averaging the attention parameters, which has shown to degrade model performance [17].”




```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/63ZEKE8E?page=5&annotation=DUHZU6D6)
```ad-cite

> “soft routing for the attention experts”




This scale up the memory as there are more experts

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/63ZEKE8E?page=5&annotation=3BNEDR3C)
```ad-cite

> “using soft-routing is crucial for achieving performance superior to the baseline”




The baseline here is BTX, but the gain might just be because this has more parameters to play with.

Also, there is no analysis on the attention routing outputs. How's the distribution of the router output ? If it is close to uniform then it's similar to averaging. If it assigns large weight to one expert then soft routing doesn't needed.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/63ZEKE8E?page=5&annotation=E2PCAXCR)
```ad-cite

> “fully exploit the capabilities of the specialized attention experts.”




The experiment doesn't really back this up. Just better exploit than BTX, but again, we need an analysis of the routing output distribution.

If we want to test the if soft-routing attention is better than averaging or hard-routing, then we can tested the 3 different attention methods in a unmixed expert.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/63ZEKE8E?page=5&annotation=WHA382L2)
```ad-cite

> “alleviates the attention experts training from common MoE problems such as imbalanced router load”




Another way to deal with load balancing is to use expert-choice routing. In this method, the experts will choose what tokens to process.

This would help with scaling to more experts as we can limit the number of experts to activate.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/63ZEKE8E?page=5&annotation=ABLCT5GB)
```ad-cite

> “wo auxiliary losses”




This might make the model harder to trained because the router is optimized in tandem with the expert themselves. During training, the membership of each expert is changing while it's learning the mapping for those members.

Instead we can use a fixed mapping such as Hash Layers. That paper showed that hash-based routing is either outperform or is competitive with learnt routing. This has extra benefits of reducing model size and can potentially make training more stable since the objective is simpler.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/63ZEKE8E?page=6&annotation=8TD39585)
```ad-cite

> “we observed that incorporating a portion of general-text data into the expert training mix enhances model performance performance as it allows the expert data distribution to more matching with the data distribution of the seed model.”




why would matching seed model's data improve performance ? Does the authors want to make the expert not too specialized ? Instead, maybe continue pre-training for longer will make the experts more specialized ?

Preserving the expert would have the benefits that we can bring in external expert with out doing the continue pre-training.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/63ZEKE8E?page=7&annotation=GSQFMWXQ)
```ad-cite


> ![[assets/BAM! Just Like That - Simple and Efficient Parameter Upcycling for Mixture of Experts/zotero-image-7-x54-y293.png]]



Why performing better than specialized models in small scale but worse in large scale ?

Could be because the added router weights contribute a bigger portion to the model size in small scale, thus more significantly increase the modelling capacity of the MoE.
Then if specialized models are better than the MoE, shouldn't we want to do top-1 routing to the most relevant expert ?

It appears that the specialized models is the upper bound for performance.

So if the experts are already specialized, why do we want to mix it, if the MoE perform worse than specialized models ?
Wouldn't we want to not change their weights and mimic a perfect routing ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 9](zotero://open-pdf/library/items/63ZEKE8E?page=9&annotation=RWWMK4ES)
```ad-cite

> “we simply increase the number of top-k from the usual top-1 to top-3 in every MoE layer of BTX. We see that BTX matches total parameters and active parameters with BAM when using top-3 routing with a total of 6 experts in Table 5. 3 of the 6 experts are upcycled from the 3 expert dense models while the other 3 are upcycled from the same copy of the dense seed model.”




This might not be a fair comparison as BTX wasn't designed to scale in this way

```


<mark class="hltr-blue">Claim</mark> | [View in local Zotero: page 9](zotero://open-pdf/library/items/63ZEKE8E?page=9&annotation=ANMQ3WDI)
```ad-cite

> “This demonstrates that using soft routing in MoA layers is crucial and supports our decision to implement this approach”




```

