---
aliases: 
tags: 
modified: 2024-02-22 03:29 AM +07:00
created: 2024-02-22 02:19 AM +07:00
---
#cs/ai/ml 

# what
- states that there is no universal learner
- in order to success, every learner has to
    - specify to some task
    - and use some prior knowledge about that task

# application
- the prior knowledge can be modelled by restricting the output hypothesis to be a member of a hypothesis class $H$ 
    - when choosing $H$, we face the [[Bias-Complexity tradeoff]] between
        - a larger/more complex $H$ is more likely to have a small approximation error
        - or a more restricted class $H$ that would have a small estimation error
# references
- [understanding-machine-learning-theory-algorithms.pdf](https://www.cs.huji.ac.il/%7Eshais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf#page=64)