---
aliases: 
tags: 
modified: 2024-07-25 11:04 AM +07:00
created: 2024-06-30 02:34 AM +07:00
---
#application/grad-school 

### Research Experience
A brief summary of my research experience can be found at
https://github.com/lone17/curriculum-vitae/blob/main/HieuVu_ResearchSummary_slides.pdf
For the sake of this question, I describe a notable work of mine below.

Title: A Span Extraction Approach for Information Extraction on Visually-Rich Documents
*(Best Paper Award at DIL Workshop - ICDAR 2021)*
https://arxiv.org/pdf/2106.00978.pdf


**Background:** 
- At work, my team and I helped clients extract key-value information from their business documents.
- At the time, most methods in the literature uses a Computer Vision-based and/or Graph-based approach, and we wanted to try an NLP approach.
- We wanted to apply a new foundation language model called LayoutLM for our problem, however, the model was trained for the English language whereas our clients' data are in Japanese.
- We did not have the data nor computation necessary for building a Japanese model from scratch.

**Method:**
This work formulated the task of key-value information extraction from document images as a
span extraction task and presented two following ideas:

1. A cross-lingual transfer learning method for adapting LayoutLM to a low-resource language.
	- My idea was to swap the text embeddings of the English LayoutLM with those of a Japanese BERT. 
	- Then continue to pretrain the model for a short amount of time on a much smaller dataset (17k compared with over 1M).
	
	The hypothesis was that:
	- Positional features are language-independent and can be shared across languages with alike reading order.
	- Furthermore, the encoder layers are capable of capturing attention from both semantic and positional inputs.
	
	*This contribution was my original idea.*
	
2. A recursive relation predicting scheme for multi-span extraction.
	One problem with span extraction is it only predicts a fixed number of spans for each query. However, in our case, there can be multiple different values for a single key information. This paper addressed it by:
	- Extracting the spans as a chain in a recursive manner.
	- After the first span is extracted, the embeddings of its first token will be used as the query to extract the second span.
	- The process continues until a stopping condition is reached.
	This can be used both as a downstream task for multi-span extraction and also as a second-stage pretraining task.

**Results:**
- Successfully built a Japanese LayoutLM model using significantly less data (11M -> 17K samples) and computation (8 V100 GPUs for 80 hrs -> 1 T4 GPU for 100 hrs).
- Achieved 2-8% increase in F1-score for Information Extraction on various real-life datasets compared to Computer Vision and Graph-based methods.
- Oral presentation and Best Paper Award ($1000 prize sponsor by Baidu Research) at DIL Workshop - ICDAR 2021.