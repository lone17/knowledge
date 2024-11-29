---
modified: 2024-02-22 03:32 AM +07:00
created: 2023-12-19 00:32 AM +07:00
---
#cs/ai/ml/theory 

- Variance and Bias in Machine Learning are ==for the learning algorithm== (in this case, the model architecture + the training algorithm + optimizing algorithm + etc.), not for prediction of a model.
	- -> The output of a training algorithm is the estimated parameters, while the output of a model is its prediction
	- -> ==Variance and Bias are measures for the estimated parameters==
		- Bias is the difference between the true value of a parameter and the expected value of an estimate of the parameter. (ref: [machine learning - What is meant by Low Bias and High Variance of the Model? - Cross Validated](https://stats.stackexchange.com/a/522951)) $$bias = |TrueParameter - E(AllParameterEstimations)|$$ ^77bb63
		- Variance is the average of the square of the difference between an parameter estimation and the expected value of parameter estimation. (ref: [machine learning - What is meant by Low Bias and High Variance of the Model? - Cross Validated](https://stats.stackexchange.com/a/522951)) $$variane = E((EachEstimation - E(AllParameterEstimations))^2)$$ ^b2ae1e

- Training a model is estimating the true parameters of the underlying population using a sample of the population (i.e. the training set) (ref: [machine learning - What is meant by Low Bias and High Variance of the Model? - Cross Validated](https://stats.stackexchange.com/a/522833))
	-> ==Parameter estimates = random variables==
	-> take a subset of the population and train a model = making an estimation
	-> it makes sense to discuss the expectation and variance of your estimations from multiple training runs

- The conceptual problem is that we ==usually don't see these random variables.== All we see is a _single_ sample (or subset, i.e. the training data) from our population, and a _single_ model, and a _single_ realization of our parameter estimates. (ref: [machine learning - What is meant by Low Bias and High Variance of the Model? - Cross Validated](https://stats.stackexchange.com/a/522833))

- Overfitting and Underfitting are indications of high/low variance/bias
	- If we have model specification just right, i.e. the model is the true data generation process (GDP), then the parameter estimation will be unbiased and have minimum variance.
	- If our model uses ==insufficient predictors== (estimate $y = x + x^2$ using $y = x$ or $y = x^3$), then the parameter estimation will be ==biased==, because the estimated coefficients will always be different from the true coefficients.
		- too small/simple models is a case of this
	- If our model is mis-specified (uses ==redundant or wrong predictors==), then the ==variance== will be high.
		- If we over represent the GDP (i.e. model is more complex/bigger than necessary, i.e. estimate $y = x^2$ using $y' = x + x^2$ or $y' = x + x^2 + x^3$ , i.e. have ==superfluous/redundant predictors==), then the parameter estimation will be ==unbiased and has high variance==. 
			- The more superfluous predictors there are, the higher the variance.