---
aliases: 
tags:
  - cs/ai/ml/nlp/llm/tokenization
  - paper
created: 2024-08-26 16:11 PM +07:00
modified: 2024-11-29 10:59 AM +07:00
paper_url: https://arxiv.org/abs/2211.09761
---


![[assets/Efficient Transformers with Dynamic Token Pooling/attachment.jpg]]
- jointly learn dynamic pooling (token segmentation) and language modelling
    - but the number of boundaries is also dynamic, so how does the transformer layers work with it ?
    - upsampling is by duplication
        - Can we apply the ideas of U-Net or deconvolution here ? #idea
- learn dynamic pooling by predict segment boundaries in the sequence dynamically
    - normally pooling used fixed size, which is sub-optimal for language 
    - help preserve linguistic primitives during pooling
- try to make the model perform
    - *hierarchical* computation
    - *conditional* computation by allocating resources to sub-sequences in proportion to the model uncertainty
- learn the neural boundary predictor supervised by
    - unigram tokenizer
    - end-to-end through stochastic re-parameterisation
        - uses [[Gumbel-sigmoid]]
    - spikes in the conditional entropy of the predictive distribution 
        ![[assets/Efficient Transformers with Dynamic Token Pooling/attachment_1.jpg]]
        - ensure that the computation is adaptive to the level of uncertainty 
        - this and [[Gumbel-sigmoid]] are inferior to alternatives for dynamic pooling
            - why ? this is such a cool idea
    - natural data boundaries such as white spaces