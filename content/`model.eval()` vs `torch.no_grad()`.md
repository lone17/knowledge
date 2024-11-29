---
aliases: 
tags:
  - cs/ai/ml/tools/pytorch
created: 2024-10-28 17:15 PM +07:00
modified: 2024-10-28 17:19 PM +07:00
---
- `model.eval()`: set the model to eval mode so that layers such as _batch norm_ or _drop out_ work in eval mode.
- `torch.no_grad()`: disable the _autograd engine_ so that gradients are not computed and stored.