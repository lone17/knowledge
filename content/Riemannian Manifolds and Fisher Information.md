---
aliases: 
tags:
  - maths/statistics
created: 2024-10-13 20:40 PM +07:00
modified: 2024-10-24 15:21 PM +07:00
---
# An introduction to Fisher Information matrix
## references
- [Information matrix](https://www.statlect.com/glossary/information-matrix)
- [The Fisher Information - YouTube](https://www.youtube.com/watch?v=pneluWj-U-o)
- [Fisher information - Wikipedia](https://en.wikipedia.org/wiki/Fisher_information)
- [^1]: [Intro to Fisher Matrices - YouTube](https://www.youtube.com/watch?v=m62I5_ow3O8)
- [^2]: [maximum likelihood - Basic question about Fisher Information matrix and relationship to Hessian and standard errors - Cross Validated](https://stats.stackexchange.com/questions/68080/basic-question-about-fisher-information-matrix-and-relationship-to-hessian-and-s?rq=1)
## definition
- Context:
	- $\theta$ is the parameter vector (e.g. of a model) that characterizes the distribution of $x$ (a data sample)
	- $L(\theta, x)$ is the likelihood function: how likely is the data if the distribution is described by $\theta$
	- the log-likelihood function is the natural log of the likelihood function: $$l(\theta, x) = ln(L(\theta, x))$$
- the score vector is the first derivatives of the log-likelihood function with respect to $\theta$: 
  $$\nabla_\theta = \nabla_\theta l(\theta, x)$$
	- this is like the gradient of the loss function in training NNs
	- for convenience, let call this $\nabla_\theta$
- the Fisher Information matrix (or Information Matrix) is the second [[Cross-moments of a random vector|cross-moments]] of the score:
  $$I(\theta) = E_\theta[\nabla_\theta \nabla_\theta^T]$$
## the Information matrix is the covariance matrix of the score 
under mild regularity conditions, if $\theta$ is the true parameter, the expected value of the score is 0:
  $$E_\theta[\nabla_\theta] = 0$$
  hence, the information matrix is the covariance matrix of the score:
  $$
  \begin{align} 
  I(\theta) 
  &= E_\theta[\nabla_\theta \nabla_\theta^T] \\
  &= E_\theta[\{\nabla_\theta - E[\nabla_\theta]\} \{\nabla_\theta - E[\nabla_\theta]\}^T] \\
  &= Cov[\nabla_\theta]
  \end{align}
  $$
  
## information equality
also under certain regularity conditions, if $\theta$ is the true parameter and the score function is twice differentiable, it can be proved that
$$I(\theta) =  -E_\theta[\nabla^2_{\theta\theta}]$$
where $\nabla^2_{\theta\theta}$ is the matrix of second-order cross-partial derivatives ([[Hessian Matrix]]) of the log-likelihood.

This equality is called the *information equality*.

## the Fisher information matrix and the covariance matrix
- the [[Hessian Matrix]] is an asymptotic estimator of the covariance matrix of $\theta$, more specifically, the negative inverse of the [[Hessian Matrix]] is an estimation of the covariance matrix [^2]
  $$Cov[\theta] = -H^{-1}$$
- hence we can use the covariance matrix of $\theta$ to estimate the Fisher Information matrix
## why use the log-likelihood ?
my understanding from [^1]
- considering approximating the likelihood function using the [[Taylor's expansion]] at the true parameter $\theta_0$ up to the 2nd derivative:
  $$L(\theta, x) = L(\theta_0, x) + \frac{\partial}{\partial \theta} L(\theta_0, x) + \frac{1}{2} \frac{\partial^2}{\partial \theta^2} L(\theta_0, x) $$
- at the true parameter $\theta_0$, the probability of the likelihood is at its peak, hence the 1st derivative is 0
- thus the approximation becomes a parabola, and this is not very good because the likelihood function can take any form
- but we can make the assumption that the likelihood function is a gaussian, which is a reasonable assumption for a probability distribution
- now the log of a guassian can be approximated using a parabola, hence the motivation of why the log likelihood is used in this case
# An intuitive explanation for the motivation behind the Fisher Information in parameters search
- source: [[D] What is Riemannian Manifold intuitively? : r/MachineLearning](https://www.reddit.com/r/MachineLearning/comments/qukghv/comment/hkr525b/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
```ad-quote
[This explanation](https://www.reddit.com/r/askscience/comments/ipktd/could_someone_please_explain_metric_tensor_to_me/) is a good high level introduction, although it doesn't really explain the concept of tangent spaces, which is sort of the main point. In my opinion understanding Riemannian manifolds is very difficult because it requires being very comfortable with coordinates and change of coordinates. The other comment in here is great but it really only describes smooth manifolds and not explicitly the Riemannian geometry structure.

I will focus on one example. One big reason the Riemannian metric is important for us is to define the distance between two points on a manifold. Euclidean space is _flat._ At any point (x,y) in R^2, a unit tangent vector in any direction has a dot product with itself of one. Intuitively this means that (x,y) is equally distant from every point in the circle of radius one around it. This also is true for tangent vectors of any magnitude. It is _also_ true that this holds for every single point in R^2

Both conditions fail dramatically for many (or all) statistical manifolds of interest. Suppose we were trying to optimize over the manifold of normal distributions. There is a well established distance metric (not really a metric but I'll call it one) between probability distributions called the KL divergence. Probability distributions that are "close" under this metric have low KL divergence, equal to zero if they are the same.

The associated Riemannian metric is born when we try to compare the KL divergence of normal distributions that are infinitesimally close to each other with respect to small perturbations in the parameters. Naturally we end up taking the derivative of this metric.

Consider this: Let the variance of two normals be very large. If we change the mean by 10, how different are the normals visually? Not that much. What if the variance is very small? Then it's a massive difference. Therefore it is obvious that distance is not the same everywhere on the manifold. In addition, what changes the KL divergence more, small changes in the variance or small changes in the mean? I'm not actually sure of the answer but I would guess that small changes in the mean cause more of a difference, but again it depends on where you are.

The metric described above is the Fisher information metric. It is the matrix of second partial derivatives of the (expected) log likelihood function. It basically tells us that it is naive to treat this manifold like a Euclidean manifold, where we usually just take the gradient of a loss function with respect to the coordinates and then move in that direction. It totally ignores the ACTUAL distance between points on the manifold. [We can often get away with it depending on the model and algorithm. See stochastic variational inference for an example where natural gradients are required.]

Another example could be a probability distribution over a manifold of faces. Small changes in the latent space for a face could lead to a massive difference in probability, or it could lead to small changes in probability if the changes keep the faces looking somewhat similar.
```

## takeaways
- in Riemannian manifolds, the distance between 2 points depends on where they are, unlike in Euclidean manifolds.
- the parameter space of NNs is not a Euclidean manifold (see [[S. Amari and S.C. Douglas. Why natural gradient?]])
	- related to the motivation of [[CAMEx - Curvature-Aware Merging of Experts|CAMEx]]
- Calculating the first derivative of the loss function and move in that direction is treating the parameter space like a Euclidean manifold, and it is naive to do so
- the Fisher Information matrix tell the curvature of the manifold and hence how to move in each direction
