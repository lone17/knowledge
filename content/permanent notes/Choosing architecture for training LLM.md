---
created: 2023-12-23 03:54 AM +07:00
modified: 2024-01-01 22:11 PM +07:00
---
#cs/ai/ml/nlp/llm/training 

source: https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182232-what-should-you-train

# Sequence length
## Longer sequences increase attention cost. This may or may not matter.
- Because the cost for computing attentions is so negligible and so fast compared to all the other fully-connected layers in the network.
- eventually you get long enough sequences that attention cost does actually start to matter. According to [MosaicML throughput table](https://github.com/mosaicml/llm-foundry/tree/main/scripts/train/benchmarking):
	- for really big networks, there's basically no penalty for having longer sequences because the cost of attention is completely drowned out by the cost of the bigger network
	- for 30B, there seem to be no penalty in going from 2048 to 4096, and 15% penalty when going to 8192 -> not too bad, worth paying
- for smaller network, the relative price escalate more quickly
## Do you have enough data to use a longer sequence length ?
- a lot of standard data sets out there, there isn't a lot of long sequence data
- for training a long sequence model, there is not much to work with
- even if there are stuffs to work with, one must be very careful where they pull it from
- when trying to sample the data evenly, the long sequences might be used over and over again
## Will the model actually be able to take advantage of longer sequences ?
- An open scientific question
- The model may not be able to holistically take advantage of all that information
- There's still a lot to learn about long sequence training

# Other choices to make
- Positional encodings: [[RoPE - Rotary Position Embeddings]] vs. [[ALiBi]] 
	- each used by different teams/modes (see the individual notes)
	- not a choice that is settled right now
	- a mixed picture, either is really the better choice
- Activation: ReLU (used at Mosaic) vs. Swish vs. GLU vs. SwiGLU
	- people use a lot of things
- Optimizer : [[Adam]] vs. Lion vs Sophia vs ...
	- Adam is the typical default, but there are challenges, e.g. need 2 full copy of the model in terms of memory because it uses the first and second momentums during training
	- there is 8bit Adam that halve the memory footprint
	- SGD has a low memory footprint but for pre-training it hasn't gone well ([source](https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49182964-q-a))
- Tokenizer: BPE vs. Sentencepiece vs. [[GPT-NeoX]] (general-purposed) vs. ...
	- [[Building your own tokenizers]]

# Advices
- if you change the vocabulary or even tokenizer, loss is not necessarily going to be comparable between 2 models 
	-> need to look at down stream metrics