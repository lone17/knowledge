---
aliases: 
tags: 
created: 2023-12-23 01:30 AM +07:00
---
how many FLOPs the hardware could do vs how much FLOPs it is actually doing

# From [MosaicML benchmarking](https://github.com/mosaicml/llm-foundry/tree/main/scripts/train/benchmarking#hfu)

The HFU numbers shown below account for the fact that the networks use checkpointing and recomputes activations. This effectively requires an extra forward pass through the network.

```
hfu* = 4 * flops_per_seq * seq_per_sec / (gpu_num * GPU_AVAILABLE_FLOPS)
hfu = (4 * flops_per_seq + 4 * attn_flops_per_seq) * seq_per_sec / (gpu_num * GPU_AVAILABLE_FLOPS)
```

Note that these are approximations. Actual HFU would be higher since it includes the floating point operations for normalization, activation, and residual layers, as well as **all** re-computation. For example, our models use Flash Attention, which requires including an extra recompute factor for its re-computation in the forward pass. Therefore, the attention multiplier would be 5 instead of 4.