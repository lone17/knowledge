---
aliases:
  - bfloat16
  - BF16
tags: 
created: 2023-12-24 05:07 AM +07:00
modified: 2024-11-22 13:10 PM +07:00
---
#cs/computer-architecture/floating-point 

# what
![[assets/BF16 - brain floating-point/attachment.jpg]]
- a slightly different floating-point representation than FP16 that shifts around a few of the bits between the mantissa and the exponent
	- uses 8 bits for the exponent (same as FP32), FP16 uses 5 [^1]

# why use BF16 ?
- some layers don't need to have high precision such as Convolution or Linear [^2]
	- reduces memory footprint during training and for storing
- less prone to overflow and underflow compares to FP16 because the exponent is the same as FP32
- Converting from FP32 to BF16 is simply dropping the left bits, which is the same as perform a rounding
# sources
- [BFloat16: The secret to high performance on Cloud TPUs | Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/bfloat16-the-secret-to-high-performance-on-cloud-tpus) #todo/read 

[^1]: [[cs/computer architect/IEEE 754 floating-point|IEEE 754 floating-point]]
[^2]: [To Bfloat or not to Bfloat? That is the Question! - Cerebras](https://cerebras.ai/machine-learning/to-bfloat-or-not-to-bfloat-that-is-the-question/)