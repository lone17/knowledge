---
aliases: 
tags: 
created: 2024-07-07 18:44 PM +07:00
modified: 2024-07-07 18:49 PM +07:00
---
#cs/ai/ml/training #advice #tricks

```ad-quote
> Source:https://www.linkedin.com/posts/aleksagordic_amazing-list-of-techniques-for-improving-activity-7215624025639645184-496W?utm_source=share&utm_medium=member_desktop

Amazing list of techniques for improving the stability of training large ML models (LLMs, diffusion, etc.):  
  
* Gradient clipping (1.0 being common): after you compute your gradients, you treat all the grads as one giant vector, you compute the L2 norm and if the norm > 1 you divide the grads with that norm.  
  
* muP (maximum update parametrization) - the idea is to parametrize your network in such a way that your optimal hyperparameters remain stable even as you scale up infinitely (in theory). The theory covers width, but empirically the authors showed that HPs transfer across depth as well (and many other dimensions like seqlen, etc.). My recent experiments confirm that HPs are stable across depth for GPT-2 (see my recent PR on llm.c for more details: [https://lnkd.in/dB2MuCH3](https://lnkd.in/dB2MuCH3))  
  
* LR + batch size tuning - recommendation is not to go over 4-8M tokens for global batch size on "vanilla" setups. MoEs can tolerate much higher sizes as batches are split across experts.  
  
Commonly people reduce the LR as you increase the model / batch size. This should be less important with muP as muP automatically handles (reduces) lr for problematic shapes.  
  
* Higher precision - obviously fp32 is more stable than fp16/bf16 but you tradeoff memory/speed oftentimes for same performance but lower stability (at times). bf16+fp32 is the most common mixed precision format, LNs & AllReduce/ReduceScatter can require fp32.  
  
* z-loss - the idea is to add a weighted square of the Z (softmax denominator) to your cross entropy to stabilize the training.  
  
(see this [https://lnkd.in/dJYhM2Td](https://lnkd.in/dJYhM2Td))  
  
* LayerNorm instead of RMSNorm as RMSNorm appears to lead to larger activations across depth - this is a new one for me. Take it with a grain of salt.  
  
* Loss spikes are sometimes caused by bad samples. I remember reading OPT LLM logs where one of their loss spikes was caused by a sequence of 1M slash symbols ("/"). The solution is to tweak the data loader in order to skip the bad samples.  
  
* Sometimes Adam optim states fall into an unstable region and cause the training to blow up. Tracking grad norm is a good way to anticipate this one. The solution is to throw the running checkpoint and restart from one of the previous checkpoints - assuming you don't have perfect determinism in your code. :') In that case a combo of everything else in this post. I helped make llm.c 100% deterministic so for us it's less relevant.  
  
* If using Adam lowering beta 2 to 0.95 is a common LLM trick, should work for other large models as well. Somewhat slower convergance but lower change that optim states fall into unstable regions.  
  
* Disabling linear biases caps the growth of key projection bias weights so that they don't blow up. These are traditionally toggled off.  
  
* Skip updates if smoothed loss/gradnorm cross some threshold.  
  
* Very important one: The Lord's Prayer to NVIDIA's GPUs.  
  
[Credit: List found on EleutherAI server and modified with my understanding/knowledge + added new techniques]
```


