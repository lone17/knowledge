---
aliases: 
tags: 
modified: 2025-04-16 13:42 +07:00
created: 2025-03-03 03:29 AM +07:00
---
#cs #maths/algebra 

Learnt from: [No One Taught Eigenvalues & EigenVectors Like This - YouTube](https://www.youtube.com/watch?v=1sDBruay100)

- The Page Rank algorithm calculates the link matrix (a.k.a the Google matrix) of website
	- this is a left stochastic matrix (Markov Matrix) so it always has an eigen value which is 1, per a comment in the video and [wikipedia](https://en.wikipedia.org/wiki/Stochastic_matrix)
>[!quote]
>A _stationary_ [probability vector](https://en.wikipedia.org/wiki/Probability_vector "Probability vector") $\pi$ is defined as a distribution, written as a row vector, that does not change under application of the transition matrix; that is, it is defined as a probability distribution on the set {1, …, _n_} which is also a row [eigenvector](https://en.wikipedia.org/wiki/Eigenvector "Eigenvector") of the probability matrix, associated with [eigenvalue](https://en.wikipedia.org/wiki/Eigenvalue "Eigenvalue") 1: 
> $$\pi P = \pi$$

- The eigen vector corresponding to the eigen value 1 describes the ranking of the pages.
	- As this vector is unchanged during the application of the transition matrix, it can be intuitively thought as a probability distribution of popularity amongst all pages
  