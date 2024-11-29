---
created: 2024-01-28 14:52 PM +07:00
modified: 2024-01-29 14:47 PM +07:00
---
#maths/statistics

# What
A theory in the field of #maths/statistics based on the [[#Bayesian probability|Bayesian interpretation of probability]].
# Bayesian probability
An interpretation of probability as ==a measure of belief and certainty== rather than just frequency (like in [[frequentist statistics]]).
- i.e: probability is interpreted as ==reasonable expectation== representing a state of knowledge or as ==quantification of a personal belief==.
- based on prior knowledge of related conditions.
- allows for making probabilistic statements about unknown parameters.

# Bayes' Theorem
$$
P(H|E) = \frac{P(E|H) \cdot P(H)}{P(E)} = \frac{P(HE)}{P(H)}
$$
- $H$ : any **_hypothesis_** whose probability may be affected by the data (i.e. $E$). Often there are competing hypotheses, and the task is to determine which is the most probable.
- $P(H)$ : the **_prior probability_** -  the prior knowledge (the estimate probability) of the hypothesis $H$ before any more evidence. ^793b29
- $E$ : the **_evidence_**, corresponds to new data that were not used in computing the prior probability.
- $P(H|E)$: **_posterior probability_** - the updated probability of the hypothesis $H$ conditional on a new evidence $E$ (i.e. after $E$ is observed) this is what we want to know.
- $P(E|H)$ : [[likelihood function|likelihood]] - probability of the evidence $E$ given the hypothesis $H$, this indicates the compatibility of the evidence $E$ given the hypothesis $H$.
- $P(E)$ : **_marginal probability_** - the prior probability of the evidence $E$ not  conditional on anything.

This provides a mathematical formula to update the probability for a hypothesis as more evidence or information become available.

# Bayesian inference
- A method of statistical inference
- Treats _probability_ as equivalent with _certainty_
- Uses the [[#Bayes' Theorem]] to update the probability (belief) for a hypothesis as more evidence or information becomes available.
	- fundamentally: uses prior knowledge (in the form of a prior probability distribution) to estimate the posterior probabilities.
## Examples
- [[credible interval]] for [[interval estimation]]
- [[Bayes factors]] for model comparison