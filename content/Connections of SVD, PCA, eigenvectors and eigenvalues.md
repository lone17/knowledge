---
aliases: 
tags:
  - maths/algebra
created: 2024-12-02 02:27 AM +07:00
modified: 2024-12-02 03:30 AM +07:00
---
# PCA and eigenvectors and eigenvalues
*From reading the excellent answer at [pca - Making sense of principal component analysis, eigenvectors & eigenvalues - Cross Validated](https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues)*

- Principal components are the projections of the data onto the principal axes. 
- Principal axes are a series of orthogonal unit vectors that
	- best fit the data (minimize average squared distance)
	- and maximize variance of the projection onto that vector
	- these 2 metrics are actually the same (due to the Pythagorean theorem)

- The eigenvectors of the covariance matrix are the principal components. Why ?
	- The covariance matrix is symmetrical, thus it can be diagonalized by choosing a new orthogonal system formed by its eigenvectors [^1]
	- The covariances of this new system are all 0 (the non-diagonal entries), and the eigenvalues (the entries on the diagonal) are the variances along each basis
	- Regardless of the projection, the variance of the projected data will be a weighted average of these eigenvalues
	- Hence the highest variance possible is the biggest eigenvalues, making it the first principal component, and the rest are other principal components
# SVD and PCA
*From reading another excellent answer from the same author at [linear algebra - What is the intuitive relationship between SVD and PCA? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/3869/what-is-the-intuitive-relationship-between-svd-and-pca)*

With $X$ is the data matrix, the covariance matrix is $\frac{1}{n - 1} XX^T$

In PCA, the covariance matrix is diagonalized using eigenvectors and eigenvalues
$$
\frac{1}{n - 1} XX^T = \frac{1}{n - 1} WDW^T
$$
With columns of $W$ are the eigenvalues and the diagonal of $D$ are the eigenvalues

In SVD, the data matrix is decomposed into $X = U \Sigma V^T$ where $U$ and $V$ are orthogonal matrices ($UU^T = I$) and $\Sigma$ is a diagonal matrix.

Then the covariance matrix is
$$
\begin{align}
\frac{1}{n - 1} XX^T 
&= \frac{1}{n - 1} (U \Sigma V^T)(U \Sigma V^T)^T \\
&= \frac{1}{n - 1} (U \Sigma V^T)(V \Sigma U^T) \\
&= \frac{1}{n - 1} (U \Sigma^2 U^T) \\
\end{align}
$$
Thus the square roots of the eigenvalues of $XX^T$ is the single values of $X$ 
$$
D = \Sigma^2
$$

"In fact, using the SVD to perform PCA makes much better sense numerically than forming the covariance matrix to begin with, since the formation of $XX^T$ can cause loss of precision."[^2]
# references
[^1]: [Spectral theorem - Wikipedia](https://en.wikipedia.org/wiki/Spectral_theorem)
[^2]: [linear algebra - What is the intuitive relationship between SVD and PCA? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/3869/what-is-the-intuitive-relationship-between-svd-and-pca)