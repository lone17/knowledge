---
aliases: 
tags: 
modified: 2024-08-14 14:36 PM +07:00
created: 2024-08-14 14:00 PM +07:00
---
#cs/ai/ml/quantization
# quantization methods
## overview
```ad-info
title: [Overview of GGUF quantization methods : r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1ba55rj/overview_of_gguf_quantization_methods/)

**TL;DR:**

- K-quants are not obsolete: depending on your HW, they may run faster or slower than "IQ" i-quants, so try them both. Especially with old hardware, Macs, and low -ngl or pure CPU inference.
    
- Importance matrix is a feature not related to i-quants. You can (and should) use it on legacy and k-quants as well to get better results for free.
    

**Details**

I decided to finally try Qwen 1.5 72B after realizing how high it ranks in the LLM arena. Given that I'm limited to 16 GB of VRAM, my previous experience with 4-bit 70B models was s.l.o.w and I almost never used them. So instead I tried using the new IQ3_M, which is a fair bit smaller and not much worse quality-wise. But, to my surprise, despite fitting more of it into VRAM, it ran even slower.

So I wanted to find out why, and what is the difference between all the different quantization types that now keep appearing every few weeks. By no means am I an expert on this, so take everything with a shaker of salt. :)

**Legacy quants (Q4_0, Q4_1, Q8_0, ...)**

- very straight-forward, basic and fast quantization methods;
    
- each layer is split into blocks of 256 weights, and each block is turned into 256 quantized values and one (_0) or two (_1) extra constants (the extra constants are why Q4_1 ends up being, I believe, 4.0625 bits per weight on average);
    
- quantized weights are easily unpacked using a bit shift, AND, and multiplication (and additon in _1 variants);
    
- IIRC, some older Tesla cards may run faster with these legacy quants, but other than that, you are most likely better off using K-quants.
    

**K-quants (Q3_K_S, Q5_K_M, ...)**

- introduced in llama.cpp [PR #1684](https://github.com/ggerganov/llama.cpp/pull/1684);
    
- bits are allocated in a smarter way than in legacy quants, although I'm not exactly sure if that is the main or only difference (perhaps the per-block constants are also quantized, while they previously weren't?);
    
- Q3_K or Q4_K refer to the prevalent quantization type used in a file (and to the fact it is using this mixed "K" format), while suffixes like _XS, _S, or _M, are aliases refering to a specific mix of quantization types used in the file (some layers are more important, so giving them more bits per weight may be beneficial);
    
- at any rate, the individual weights are stored in a very similar way to legacy quants, so they can be unpacked just as easily (or with some extra shifts / ANDs to unpack the per-block constants);
    
- as a result, k-quants are as fast or even faster* than legacy quants, and given they also have lower quantization error, they are the obvious better choice in most cases. *) Not 100% sure if that's a fact or just my measurement error.
    

**I-quants (IQ2_XXS, IQ3_S, ...)**

- a new SOTA* quantization method introduced in [PR #4773](https://github.com/ggerganov/llama.cpp/pull/4773);
    
- at its core, it still uses the block-based quantization, but with some new fancy features inspired by QuIP#, that are somewhat beyond my understanding;
    
- one difference is that it uses a lookup table to store some special-sauce values needed in the decoding process;
    
- the extra memory access to the lookup table seems to be enough to make the de-quantization step significantly more demanding than legacy and K-quants – to the point where you may become limited by CPU rather than memory bandwidth;
    
- Apple silicon seems to be particularly sensitive to this, and it also happened to me with an old Xeon E5-2667 v2 (decent memory bandwidth, but struggles to keep up with the extra load and ends up running ~50% slower than k-quants);
    
- on the other hand: if you have ample compute power, the reduced model size may improve overall performance over k-quants by alleviating the memory bandwidth bottleneck.
    
- *) At this time, it is SOTA only at 4 bpw: at lower bpw values, the AQLM method currently takes the crown. See llama.cpp [discussion #5063](https://github.com/ggerganov/llama.cpp/discussions/5063#discussioncomment-8383732).
    

**Future ??-quants**

- the resident llama.cpp quantization expert ikawrakow also mentioned some other possible future improvements like:
    
- per-row constants (so that the 2 constants may cover many more weights than just one block of 256),
    
- non-linear quants (using a formula that can capture more complexity than a simple _weight = quant * scale + minimum_),
    
- k-means clustering quants (not to be confused with k-quants described above; another special-sauce method I do not understand);
    
- see llama.cpp [discussion #5063](https://github.com/ggerganov/llama.cpp/discussions/5063) for details.
    

**Importance matrix**

Somewhat confusingly introduced around the same as the i-quants, which made me think that they are related and the "i" refers to the "imatrix". But this is apparently not the case, and you can make both legacy and k-quants that use imatrix, and i-quants that do not. All the imatrix does is telling the quantization method which weights are more important, so that it can pick the per-block constants in a way that prioritizes minimizing error of the important weights. The only reason why i-quants and imatrix appeared at the same time was likely that the first presented i-quant was a 2-bit one – without the importance matrix, such a low bpw quant would be simply unusable.

Note that this means you can't easily tell whether a model was quantized with the help of importance matrix just from the name. I first found this annoying, because it was not clear if and how the calibration dataset affects performance of the model in other than just positive ways. But recent tests in llama.cpp [discussion #5263](https://github.com/ggerganov/llama.cpp/discussions/5263) show, that while the data used to prepare the imatrix slightly affect how it performs in (un)related languages or specializations, any dataset will perform better than a "vanilla" quantization with no imatrix. So now, instead, I find it annoying because sometimes the only way to be sure I'm using the better imatrix version is to re-quantize the model myself.

So, that's about it. Please feel free to add more information or point out any mistakes; it is getting late in my timezone, so I'm running on a rather low IQ at the moment. :)
```

## resources:
- [Overview of GGUF quantization methods : r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1ba55rj/overview_of_gguf_quantization_methods/)
- [k-quants by ikawrakow · Pull Request #1684 · ggerganov/llama.cpp · GitHub](https://github.com/ggerganov/llama.cpp/pull/1684)

