---
modified: 2024-01-25 20:16 PM +07:00
created: 2024-01-25 20:10 PM +07:00
---
#cs/ai/ml/nlp 

source: [In NLP, why do we use perplexity instead of the loss? - Quora](https://www.quora.com/In-NLP-why-do-we-use-perplexity-instead-of-the-loss)

$$
perplexity = 2^{entropy}
$$
>Entropy is a measure of information. Without going into details, entropy involves logarithm which, in principle can be in any base. If you calculated entropy using natural logarithm (base $e$) you will calculate $perplexity$ with $entropy$. Computer Scientist likes $\log_2$ because it corresponds to bits, therefore you will often face base 2 $\log$ when looking information theory literature.

>  while entropy can be seen as information quantity, perplexity can be seen as the “number of choices” the random variable has.

>The fact is that the answer is just: we do prefer perplexity. Its mathematically the same to “return” entropy or perplexity just like I could tell you that the following sentences are equivalent:
>- “This die has 6 faces”
>- “This die has 2.58 entropy”

>Also, entropy uses logarithms as we said. Perplexity, with its `e^` bring it back to a linear scale. Which we, human, usually prefer.