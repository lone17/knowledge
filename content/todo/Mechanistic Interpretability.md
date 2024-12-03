---
aliases:
  - Mech Interp
tags:
  - cs/ai/ml/theory
  - cs/ai/ml/nlp/llm
  - cs/ai/ml/modular-learning
  - cs/ai/ml/mechanistic-interpretability
created: 2024-10-24 15:23 PM +07:00
modified: 2024-12-04 00:38 AM +07:00
---
> This is the master note for Mechanistic Interpretability

---
# what
- reverse engineering the *computational mechanism and representation* learnt by neural networks to *human-understandable algorithms and concepts*[^1]
- a paradigm shift in interpretability: **surface-level analysis** (input/output relations) → **inner interpretability** (internal mechanisms) [^1]
	- similar to the shift from behaviourism to cognitive neuroscience in psychology
	- Mech Interp is an approach toward inner interpretability
![[Mechanistic Interpretability for AI Safety -- A Review#^f4c251]]

---
# some terminologies
- **Features**:
	- *independent yet repeatable units that a neural network representation can decompose into* [^2]
	- *fundamental units of neural network representations* [^1]
	- are different from **neurons**
- **Neurons** [^1]
	- are *computational units*
	- potentially representing individual **features**
	- for
	-   ming **privileged bases**
- **Circuit**
	- sub-graphs of the network, consisting of features and the weights connecting them
- **monosemantic and polysemantic neurons**
	- *monosemantic*: neurons corresponding to a single semantic concept
	- *polysemantic*: neurons associated with multiple, unrelated concepts
	- if **neurons** were the fundamental primitives of model representations
		- all **neurons** would be *monosemantic*
		- implying a 1-to-1 relation between **neurons** and **features**
		- however, empirical studies observed that **neurons** are *polysemantic*
---
- **Privileged bases**
	- the *standard bases* of the representation space
	![[Mechanistic Interpretability for AI Safety -- A Review#^0298c1]]
---
# hypotheses
---
## Linear representation hypothesis
- **Features** / concepts are represented by orthogonal directions in activation space
	- but need not be aligned with the **privileged bases**
- The network represents **features** as linear combinations of neurons
- Non-orthognality means that **features** interfere with one another
   ![[The Linear Representation Hypothesis and the Geometry of Large Language Models#^18e1a6]]
---
## Superposition Hypothesis
- The representation may encode features not with the $n$ basis directions (**neurons**) but with $\propto exp(n)$ possible *almost orthogonal directions*. 
![[assets/Mechanistic Interpretability/attachment_1.jpg]]
---
- *Neural networks represent more features than they have neurons by encoding features in ovelapping combination of neurons* [^1]
![[Mechanistic Interpretability for AI Safety -- A Review#^f80ec5]]
---
- Non-orthogonality means that features interfere with one another.
![[assets/Mechanistic Interpretability/attachment.jpg]]
- Sparsity means that a feature rarely occurs. The assumption is most features are sparse.
---
### Toy model of superposition
![[assets/Mechanistic Interpretability/attachment_2.jpg]]
---
### [A Hierarchy of Feature Properties](https://transformer-circuits.pub/2022/toy_model/index.html#motivation-summary)
4 progressively more strict properties that neural network representations might have:
- **Decomposability**: Neural network activations which are decomposable can be decomposed into features, the meaning of which is not dependent on the value of other features.
- **Linearity**: Features correspond to directions. Each feature $f_i$​ has a corresponding representation direction $W_i$. The presence of multiple features $f_1,f_2…$ activating with values $x_{f_1},x_{f_2}…$ is represented by $x_{f_1}W_{f_1} + x{f_2}W{f_2} \cdots$
- **Superposition vs Non-Superposition**: A linear representation exhibits superposition if $WW^T$ is not invertible. If $WW^T$ is invertible, it does not exhibit superposition.
- *Basis-Aligned*: A representation is basis aligned if all $W_i$​ are one-hot basis vectors. A representation is partially basis aligned if all $W_i$ are sparse. This requires a privileged basis.

The first two are hypothesized to be widespread, while the latter are believed to be occured only sometimes.

---
## Universality hypothesis
- Analogous features and circuits form across model and tasks.

---
# LLMs as circuits 

- View the residual stream as the main object that accumulate information
![[attachment_3.jpg]]
---
- MLP and Attention are branches that write to the stream
![[attachment_4.jpg]]
---
## Observations about Attention
- Applying attention can be described as
$$
\begin{align}
h(x) &= 
\underbrace{(I \otimes W_O)}_{
	\begin{subarray}{l} 
	\text{Project result vectors} \\ 
	\text{out for each token} \\
	(h(x)_i \;=\; W_O r_i)
	\end{subarray}}
\cdot 
\underbrace{(A \otimes I)}_{
	\begin{subarray}{l}
	\text{Mix value vectors across} \\
	\text{tokens to compute} \\
	\text{result vectors} \\
	(r_i \;=\; \sum_j A_{i,j}v_j)
	\end{subarray}}
\cdot
\underbrace{(I \otimes W_V)}_{
	\begin{subarray}{l}
	\text{Compute value vector} \\
	\text{for each token} \\
	(v_i \;=\; W_V x_i)
	\end{subarray}}
\\
&= \underbrace{(A \otimes W_O W_V) \;\;\; \cdot}_{
	\begin{subarray}{l}
	\text{A mixes across tokens while} \\
	W_O W_V \text{ acts on each vector} \\
	\text{independently}
	\end{subarray}}
x
\end{align}
$$
- And the attention pattern is 
$$
\begin{align}
k_i &= W_K x_i \\
q_i &= W_Q x_i \\
\\
A &= softmax(q^T k) \\
&= softmax(x^T W^T_Q W_K x)
\end{align}
$$
- $W_Q$​ and $W_K$​ always operate together. They’re never independent. Similarly, $W_O$​ and $W_V$​ always operate together as well.
---
- An attention head is really applying two linear operations, $A$ and $W_O W_V$​, which operate on different dimensions and act independently.
	- $A$ governs which token's information is moved from and to.
	- $W_O W_V$​ governs which information is read from the source token and how it is written to the destination token.
![[assets/The effects of neural net layers on activation space/attachment_2.jpg|800]]
---
- Products of attention heads behave much like attention heads themselves. By the distributive property
$$
(A^{h_2} \otimes W^{h_2}_{OV} \cdot A^{h_1} \otimes W^{h_1}_{OV} = (A^{h_2}A^{h_1}) \otimes (W^{h_2}_{OV} W^{h_1}_{OV}))
$$
- These are called *virtual attention heads*
---
# my observations, hypothesis and findings
-  [[Theory of activation space]]
- [[The effects of neural net layers on activation space]]
# literature
## papers
- [[Refusal in Language Models Is Mediated by a Single Direction]]
- [[Toy Models of Superposition]]
- [[The Linear Representation Hypothesis and the Geometry of Large Language Models]]
- [[Representation Engineering: A Top-Down Approach to AI Transparency]]
- [[Steering Language Models With Activation Engineering]]
- [[A Language Model's Guide Through Latent Space]]
- [[Linear Representations of Sentiment in Large Language Models]]
- [[Universal and Transferable Adversarial Attacks on Aligned Language Models]]
- [[Transformer Feed-Forward Layers Are Key-Value Memories]]
- [[Mechanistic Interpretability for AI Safety -- A Review]]
## articles
#todo/study 
- [Towards Monosemanticity: Decomposing Language Models With Dictionary Learning](https://transformer-circuits.pub/2023/monosemantic-features) 
- [Transformer Circuits Thread](https://transformer-circuits.pub)
- [Thread: Circuits](https://distill.pub/2020/circuits/)
# references

[^1]: [[Mechanistic Interpretability for AI Safety -- A Review]]
[^2]: [Distributed Representations: Composition & Superposition](https://transformer-circuits.pub/2023/superposition-composition/index.html)