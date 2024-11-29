---
aliases: 
tags: 
modified: 2024-11-19 13:42 PM +07:00
created: 2024-11-18 14:06 PM +07:00
---
#cs/ai/ml/theory 
# what
- A method for computing/estimating gradients of random variables
	- Because we cannot take the derivative of a random variable
	- Reparameterization "restructures" the problem so that it's differentiable
	![[assets/The Reparameterization trick/attachment.jpg]](source [^4], [^2])

- Most widely refers to the case of sampling from a *normal distribution* from a *standard normal distribution* using the following formula:
	$$
	x = \mu + \sigma \cdot z
	$$
	where $z$ is drawn from $\mathcal{N}(0, 1)$.

- Reparameterization is a method of generating non-uniform random numbers by transforming some base distribution, $p(\epsilon)$, to a desired distribution, $p(z; \theta)$. The transformation from the base to the desired distribution can be written as $g(\epsilon; \theta)$, as follows [^3]:
  $$
	p(\epsilon) \rightarrow g(\epsilon; \theta) \rightarrow p(z; \theta)
   $$
# why
- We use the reparameterization trick to express a gradient of an expectation $(1)$ as an expectation of a gradient $(2)$. Provided $g_\theta$​ is differentiable - something Kingma[^7] emphasizes - then we can then use Monte Carlo methods to estimate $\nabla_\theta \mathbb{E}_{p_\theta(z)}[f(z^{(i)})]$ $(3)$. [^6]
  $$
   \begin{align}
	\epsilon &\sim p(\epsilon) \\
	\\
	z &= g_\theta(\epsilon, x) \\
	\\
	\mathbb{E}_{p_\theta(z)}[f(z^{(i)})] &= \mathbb{E}_{p(\epsilon)}[f(g_\theta(\epsilon, x^{(i)}))] \\
	\\
	\nabla_\theta \mathbb{E}_{p_\theta(z)}[f(z^{(i)})] &= \nabla_\theta \mathbb{E}_{p(\epsilon)}[f(g_\theta(\epsilon, x^{(i)}))] &(1)\\
	&= \mathbb{E}_{p(\epsilon)} [\nabla_\theta f(g_\theta(\epsilon, x^{(i)}))] &(2) \\
	&\approx \frac{1}{L} \sum_i^L \nabla_\theta f(g_\theta(\epsilon^{(l)}, x^{(i)}))] &(3)
	
   \end{align}
   $$

- The issue is not that we cannot backprop through a “random node” in any technical sense. Rather, backproping would not compute an estimate of the derivative (because $\nabla_\theta \mathbb{E}_{p_\theta(z)}[f(z^{(i)})]$ is the gradient w.r.t. $\theta$ over the expectation w.r.t. $\theta$). Without the reparameterization trick, we have no guarantee that sampling large numbers of z will help converge to the right estimate of $\nabla_\theta$. [^6]

- The “trick” part of the reparameterization trick is that you make the randomness an input to your model instead of something that happens “inside” it, which means you never need to differentiate with respect to sampling (which you can’t do). [^5]
# notes
- Some commonly used reparameterizations
  ![[assets/The Reparameterization trick/attachment_1.jpg]]
  (source [^4], [^1])
- multiple groups realized this fact at the same time around 2013: Rezende et al., Titsias & Lazaro-Gredilla., Kingma & Welling[^7]. (All three papers were published in 2014. However, it's usually the VAE paper that gets all the credit, [^1]
# references
[^1]: [\[D\] Clarification on the "Reparameterization Trick" in VAEs and why it is a trick : r/MachineLearning](https://www.reddit.com/r/MachineLearning/comments/1f3ohje/d_clarification_on_the_reparameterization_trick/)
[^2]: [MIT 6.S191 (2020): Deep Generative Modeling - YouTube](https://www.youtube.com/watch?v=rZufA635dq4)
[^3]: [Machine Learning Trick of the Day (4): Reparameterisation Tricks – The Spectator](https://blog.shakirm.com/2015/10/machine-learning-trick-of-the-day-4-reparameterisation-tricks/)
[^4]: [The Reparameterization Trick – Emma Benjaminson – Data Scientist](https://sassafras13.github.io/ReparamTrick/)
[^5]: [ELI5: The Reparameterization Trick : r/MachineLearning](https://www.reddit.com/r/MachineLearning/comments/3yrzks/comment/cyg6s5w/)
[^6]: [The Reparameterization Trick](https://gregorygundersen.com/blog/2018/04/29/reparameterization/)
[^7]: [[Auto-Encoding Variational Bayes]]