---
aliases: 
tags: 
created: 2023-12-22 05:03 AM +07:00
---
#cs/ai/ml/nlp/llm/data #cs/ai/ml/nlp/llm/training 

lecture link: https://www.wandb.courses/courses/take/training-fine-tuning-LLMs/lessons/49181376-logistics-of-data-loading


# How
- Stream data from multiple source to the GPUs cluster during training.

# Why
- Data usually very big and cannot be stored at one place.
- Training usually happens in different clouds from where data is stored. 
	- Might change clouds for GPUs cluster over time due to availability, cost, use cases, etc.
	- Data only need to be stored on cheap, no-cli storage like S3 instead of keep it in SSD.
- The network cost for moving data is very small (1-2% or less, source: from the course) compare to the cost of one training epoch. => It's a good tradeoff between cost and convenience.

# Tool
- [[MosaicML Streaming Data Loader]]