---
aliases:
  - "@camex"
  - CAMEx
tags:
  - integration/zotero
modified: 2024-11-05 02:44 AM +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> _CAMEx: Curvature-Aware Merging of Experts_.

> [!info] Metadata
> **Title**: CAMEx: Curvature-Aware Merging of Experts
> 
> **Cite key**: camex

>[!info] Links
>
> - [Zotero PDF Link](zotero://select/library/items/NZBRJ8PP)

> [!info] Abstract
> 

# Notes
## From Zotero
**Imported: 2024-10-23**
## Questions

- are the experts trained on the same data sets or were they trained on different data ?
    
    - Ans: yes
    - if yes, is the vanilla baseline the average of those experts ?
    - And what is the effect on varying number of experts ?
        
        - Ans: unknown, the number of experts is fixed at 8
- in (CA-Merge)
    
    - how was E^l_m initialized ?
    - is M_i shared across layer ?
        
        - if so, why would the same curvature is applicable for the params in different layers ?
        - Ans: yes. Because the method sees the architecture as an optimization process, where each layer is an optimization step from the last
    - how was M_i initialized ?
    - how does M_i captured the curvature ?
        
        - not sure, need to compute true curvature and compare
    - why not calculate curvature directly (2nd derivatives, covariance matrix)
        
        - because we need to do 2nd order derivation at every steps for every experts, while CAMEx only need to compute gradient at every step (1st order), thus CAMEx is faster
        - but does speed matter in model merging when the process is only done once ?
        - If the approximation is good and does not affect performance compared with computing curvature using expensive operations, then it would make sense. But that’s needed do be verified.
- In (Dynamic-Merge)
    
    - so the next layer E^l+1_m will be initialized with the current merged layer and the average the current layer from all experts. What is the intuition behind this ?
        
        - why not just used the last layer
    - how is the first layer initialized ?
- How is the global expert initialized
    
    - Ans: it is one of the pre-trained expert
        
        - can we just use 0 weights ?
- Why does this reduce model size and flops ? Fig 2 and Sec 3 don’t support these claims
- In (7), M_j is updated at each time step
    
    - is this an approximation ?
        
        - ans: yes, each time step is an optimization step to approx M
    - why not compute M_j directly ? for  example from the last token only ?
- for evaluation, if CAMEx doesn't use a validation set or the train set, then what's the input data for computing the gradient during merge ?
    
    - Ans: it does use a validation set
[View in local Zotero](zotero://open-pdf/library/items/99Q96XFZ)


## From Obsidian
![[literature notes/papers/CAMEx - Curvature-Aware Merging of Experts]]
# Annotations
![[Highlight Colour Codings#Colour codes]]
## From Zotero
**Imported: 2024-10-23**^e0c377


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 1](zotero://open-pdf/library/items/89TMXYKY?page=1&annotation=KI726MY3)
```ad-cite

> “assumes a flat parameter space.”




manifold ?

```


<mark class="hltr-yellow">Note</mark> | [View in local Zotero: page 1](zotero://open-pdf/library/items/89TMXYKY?page=1&annotation=KUKBDJ99)
```ad-cite

> “fixed random initialized router”




sounds similar to Hash Layer

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/89TMXYKY?page=2&annotation=532UCZ2W)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-2-x106-y508.png]]



- according to the diagram, \gamma_i should be called the "masked domain vectors" instead of the masks
- please cite ties and dare

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/89TMXYKY?page=2&annotation=Y65MFLBQ)
```ad-cite

> “domain-vectors”




this term was used before its definition

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/89TMXYKY?page=2&annotation=NRHQPI3X)
```ad-cite

> “task-specific merging”




what's task-specific merging in this context ? does it mean expert are merged with the goal of achieving better performance on some predefined tasks instead of all tasks ?

```


<mark class="hltr-yellow">Note</mark> | [View in local Zotero: page 2](zotero://open-pdf/library/items/89TMXYKY?page=2&annotation=SBNV99YH)
```ad-cite

> “To the best of our knowledge, the current merging protocol applied for SMoE still deems the parameter space of the expert’s parameters as Euclidean ones.”




```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=YALQTHXU)
```ad-cite

> “he task-vector for each pre-trained model through the merged model θm as τi = θi − θm.”




if this is the delta between 2 set of model parameters, why shouldn't it be the task tensor ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=CFTPPNQB)
```ad-cite

> “The merging protocol will be performed by Eqn. Merg.”




readability: refer to a eq that is defined later

also theta_m hasn't been defined at this point

```


<mark class="hltr-yellow">Note</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=CECRIDZL)
```ad-cite

> “We believe it is more suitable to reference this technique as domain-specific merging.”




it's a common confusion in NLP terminologies :)) a "task" refers to a lot of things: downstream task, training objective, domain, language, just to name a few.

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=9EMSNL4X)
```ad-cite

> “domain-vector”




misc: domain tensor ? domain delta ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=5BK2VQKJ)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-3-x246-y300.png]]



no definition for E^_m and E_m and how E_m is initialized.

```


<mark class="hltr-yellow">Note</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=94UHYGIC)
```ad-cite

> “si denotes the score of the router for the ith expert.”




```


<mark class="hltr-yellow">Note</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=886IGGEG)
```ad-cite

> “We want to note that with 0 < α < 1, domain-specific merging aligns with soft merging.”




```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 3](zotero://open-pdf/library/items/89TMXYKY?page=3&annotation=3FR6EPUQ)
```ad-cite

> “task vector”




domain vector as per renaming in section 2.1

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=U9JS29N6)
```ad-cite

> “we denote θ ∈ RN”




is this notation for model's parameters standard ? or is this the routing vector ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=V46K6RRI)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-4-x105-y531.png]]



it's not clear how theta_m is initialized.

Also, mismatched notation for number of experts: n here vs N in other equations. And here it iterates through n experts while in other equations it's N - 1

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=ASC56PTC)
```ad-cite

> “In the first stage, we perform the causal segmenting procedure proposed in Zhong et al. (2024).”




readability: would be nice if a high level description for the algo is given, such as what it tries to achieve, how it does so and why it's needed

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=WD4U6YK7)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-4-x104-y207.png]]



why M_i doesn't have the l super script ? does that mean all layers have the same dimension and the curvature matrix is shared across layers ? if so, why would the same curvature is applicable for the params in different layers ?
also, how M_i is initialized and learnt ? simply through gradient descent ? shouldn't it be computed using the gradients ?

what is M_I (capital I), is it a typo ?


basically, M_i acts like a FF layer applied on the (delta) weights of expert i. Would be interesting to see if just implementing  a simple version of that yields similar results

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=ZHEVGA3B)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-4-x103-y116.png]]



- so the next layer E^l+1_m will be initialized with the current layer and the average of all experts in the current layer. What is the intuition behind this ?
- still, how is the first layer initialized ?

- these equations can be combined, perhaps could help for simpler derivative calculation
- without this equation, there's no mentioned of how E_m at each layer is initialized, so I assume that it is used in practice. However, the writing here make it seems like an additional

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=VNL59STZ)
```ad-cite

> “The architecture contains a global expert that traverses through the SMoE layers by the updating rule in Eqn. Dynamic-Merg.”




how is the global expert initialized ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 4](zotero://open-pdf/library/items/89TMXYKY?page=4&annotation=5H263RY5)
```ad-cite

> “Not only will this allow a notable reduction in model size and GFLOPS”




why does this reduces the model size and gflops ? results in sec 3 does not show a reduction in these

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/89TMXYKY?page=5&annotation=XTPGH8NS)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-5-x102-y479.png]]



- need arrows from input to E_i in the first diagram
- how does right significantly reduces model size and computation compared to middle ?
- what data is used for the input during the merge ? or does the merging happens dynamically during inference ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 5](zotero://open-pdf/library/items/89TMXYKY?page=5&annotation=GWDZDIVP)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-5-x107-y114.png]]



- when router scores sum up to 1 (all experts are used), M_i is cancelled out. Thus
E^_m = sum(s_i * E'_i)
- this is not more efficient than the baseline
- also, inconsistent product symbol for s_i * t_i

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/89TMXYKY?page=6&annotation=EJXPPCGL)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-6-x107-y598.png]]



- (5) should be the CA domain-specific merging, thus it is missing M

- inconsistent subscript of j
- missing dE_m / dM_j
- the last expansion in (6) is redundant

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/89TMXYKY?page=6&annotation=ERBZIX4W)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-6-x104-y455.png]]



- the curvature (M) is updated at each time step
- this can be seen as a approximation of M ?

- how does this compared to computing M directly, e.g. from 2nd derivatives of the loss or from covariance matrix of the params ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/89TMXYKY?page=6&annotation=9NF7AY7Z)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-6-x104-y365.png]]



- should add t + 1 superscript to E on the far left

```


<mark class="hltr-blue">Claim</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/89TMXYKY?page=6&annotation=W5SEAHQR)
```ad-cite

> “Furthermore, the second term contains the direction from the task loss gradient and the inner product between domain-vectors from two consecutive gradient steps. If Mj = I ∀j, this term can be seen as an auxiliary signal from task loss of the previous update step guiding the merging direction.  The term st  j st+1  j·     τ t⊤  j τ t+1  j     modeling the agreement of the merging direction between updating  steps: if there are conflicts between current and the previous updating direction, then this signal will be alleviated, thus dampening the harm to the merging direction of the current step; otherwise if they show strong agreement, this amplifies the impact of the updating direction toward minimizing the task loss with respect to the previous step, thus accelerate the training process while implicitly helping current merging direction with additional experience.”




```


<mark class="hltr-blue">Claim</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/89TMXYKY?page=6&annotation=4CZ6VLEU)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-6-x106-y165.png]]



```


<mark class="hltr-blue">Claim</mark> | [View in local Zotero: page 6](zotero://open-pdf/library/items/89TMXYKY?page=6&annotation=WUXWUQC9)
```ad-cite

> “We now have the inner-product between the gradient of the task loss and the domain-vector. This can be interpreted as the matching between the update from the task loss gradient and the domainspecific direction. We then have the updated domain-specific direction for each expert whose weighting factors are calculated by the inner-product. Therefore, we are performing a soft nearest distance voting to find the experts that agree the most with the task loss and enhance the merged experts with the corresponding domain-vector.”




```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/89TMXYKY?page=7&annotation=V6NIC8HP)
```ad-cite


> ![[assets/CAMEx - Curvature-Aware Merging of Experts/zotero-image-7-x105-y554.png]]



readability: last row should be rearrange to be similar to middle row

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/89TMXYKY?page=7&annotation=LRPQ9U9B)
```ad-cite

> “We compare our proposal to three merging baselines, including domainspecific, Ties, and Dare merging.”




- should include DARE-TIES as well, also these are acronym and should be capitalized.
- also missing citation

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 7](zotero://open-pdf/library/items/89TMXYKY?page=7&annotation=PMGR2RVY)
```ad-cite

> “There exists prior works on merging methods with the aid of the Fisher Information Matrix, such as Matena & Raffel (2022), which rely on access to a validation set used to compute the Fisher matrix or fine-tune hyperparameters. To eliminate the need for a validation set, Jin et al. (2023) proposes storing and transmitting inner product matrices derived from the training data for each task, which are of the same size as the original model. However, this approach becomes costly for large models, as storage and transmission demands increase linearly with model size and the number of tasks as well as the number of experts. Therefore, we choose baselines that are needless of extra information and computational cost to perform comparisons. We want to note that our merging protocol can be easily integrated into other works such as merge then compress protocol Li et al. (2024).”




if camex doesn't use a validation set or the train set, then what's the input data for computing the gradient during merge ?

```


<mark class="hltr-red">Question/Critic</mark> | [View in local Zotero: page 10](zotero://open-pdf/library/items/89TMXYKY?page=10&annotation=CAV9PD7R)
```ad-cite

> “scaling the horizontal dimension of models (i.e., the number of feedforward blocks) rather than the vertical dimension (i.e., the number of stacked layers).”




there is a new paper called [[Differential Transformer]] that explores this direction

```

