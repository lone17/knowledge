---
aliases: 
tags: 
created: 2023-12-22 04:15 AM +07:00
---
#cs/ai/ml/nlp/llm/training

- Chinchilla rules tell you to train a lot of small models before training a big one
```
"The beautiful thing about Chinchilla is that as you increase the size of your model, you should also increase the amount of data. => The cost of training a bigger model basically increases quadratically, which means it doesn't cost you that much to train a lot of small models before you train one big one."

source: https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49181348-which-data
```

- D = 20 * N
```
The amount of data that you should have is about 20 times the number of parameters in the networks, more or less.

source: https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/44579584-hardware-requirements
```

- _[[All models are wrong. Some models are useful.]] Chinchilla is a very useful model that is completely wrong._ - Jonathan Frankle