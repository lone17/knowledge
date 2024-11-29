---
created: 2023-10-28 23:32 PM +07:00
modified: 2024-01-15 15:36 PM +07:00
---
#cs/computer-architecture/instruction-set/risc #cs/computer-architecture/instruction-set/cisc

source: [Pipelining](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/index.html)

**How Pipelining Works**  
PIpelining, a standard feature in RISC processors, is much like an assembly line. Because the processor works on different steps of the instruction at the same time, more instructions can be executed in a shorter period of time.

A useful method of demonstrating this is the laundry analogy. Let's say that there are four loads of dirty laundry that need to be washed, dried, and folded. We could put the the first load in the washer for 30 minutes, dry it for 40 minutes, and then take 20 minutes to fold the clothes. Then pick up the second load and wash, dry, and fold, and repeat for the third and fourth loads. Supposing we started at 6 PM and worked as efficiently as possible, we would still be doing laundry until midnight.

![non-pipelined laundry](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/laundry1.gif)

Source: [http://www.ece.arizona.edu/~ece462/Lec03-pipe/](http://www.ece.arizona.edu/~ece462/Lec03-pipe/)

However, a smarter approach to the problem would be to put the second load of dirty laundry into the washer after the first was already clean and whirling happily in the dryer. Then, while the first load was being folded, the second load would dry, and a third load could be added to the pipeline of laundry. Using this method, the laundry would be finished by 9:30.

![pipelined laundry](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/laundry2.gif)

Source [http://www.ece.arizona.edu/~ece462/Lec03-pipe/](http://www.ece.arizona.edu/~ece462/Lec03-pipe/)

[Watch a movie of pipelining in action!](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/pipelining1.mov) (Source: [http://www.inf.fh-dortmund.de/person/prof/si/risc/intro_to_risc/irt0_index.html)](http://www.inf.fh-dortmund.de/person/prof/si/risc/intro_to_risc/irt0_index.html)

**RISC Pipelines**  
A RISC processor pipeline operates in much the same way, although the stages in the pipeline are different. While different processors have different numbers of steps, they are basically variations of these five, used in the MIPS R3000 processor:

1. fetch instructions from memory
2. read registers and decode the instruction
3. execute the instruction or calculate an address
4. access an operand in data memory
5. write the result into a register

If you glance back at the diagram of the laundry pipeline, you'll notice that although the washer finishes in half an hour, the dryer takes an extra ten minutes, and thus the wet clothes must wait ten minutes for the dryer to free up. Thus, the length of the pipeline is dependent on the length of the longest step. Because RISC instructions are simpler than those used in pre-RISC processors (now called CISC, or Complex Instruction Set Computer), they are more conducive to pipelining. While CISC instructions varied in length, RISC instructions are all the same length and can be fetched in a single operation. Ideally, each of the stages in a RISC processor pipeline should take 1 clock cycle so that the processor finishes an instruction each clock cycle and averages one cycle per instruction (CPI).

**Pipeline Problems**  
In practice, however, RISC processors operate at more than one cycle per instruction. The processor might occasionally stall a a result of data dependencies and branch instructions.

A data dependency occurs when an instruction depends on the results of a previous instruction. A particular instruction might need data in a register which has not yet been stored since that is the job of a preceeding instruction which has not yet reached that step in the pipeline.

For example:

> add $r3, $r2, $r1  
> add $r5, $r4, $r3  
> _more instructions that are independent of the first two_

In this example, the first instruction tells the processor to add the contents of registers r1 and r2 and store the result in register r3. The second instructs it to add r3 and r4 and store the sum in r5. We place this set of instructions in a pipeline. When the second instruction is in the second stage, the processor will be attempting to read r3 and r4 from the registers. Remember, though, that the first instruction is just one step ahead of the second, so the contents of r1 and r2 are being added, but the result has not yet been written into register r3. The second instruction therefore cannot read from the register r3 because it hasn't been written yet and must wait until the data it needs is stored. Consequently, the pipeline is stalled and a number of empty instructions (known as _bubbles_ go into the pipeline. Data dependency affects long pipelines more than shorter ones since it takes a longer period of time for an instruction to reach the final register-writing stage of a long pipeline.

MIPS' solution to this problem is code reordering. If, as in the example above, the following instructions have nothing to do with the first two, the code could be rearranged so that those instructions are executed in between the two dependent instructions and the pipeline could flow efficiently. The task of code reordering is generally left to the compiler, which recognizes data dependencies and attempts to minimize performance stalls.

Branch instructions are those that tell the processor to make a decision about what the next instruction to be executed should be based on the results of another instruction. Branch instructions can be troublesome in a pipeline if a branch is conditional on the results of an instruction which has not yet finished its path through the pipeline.

For example:

> |   |   |
> |---|---|
> |Loop :|add $r3, $r2, $r1  <br>sub $r6, $r5, $r4  <br>beq $r3, $r6, Loop|

The example above instructs the processor to add r1 and r2 and put the result in r3, then subtract r4 from r5, storing the difference in r6. In the third instruction, beq stands for branch if equal. If the contents of r3 and r6 are equal, the processor should execute the instruction labeled "Loop." Otherwise, it should continue to the next instruction. In this example, the processor cannot make a decision about which branch to take because neither the value of r3 or r6 have been written into the registers yet.

The processor could stall, but a more sophisticated method of dealing with branch instructions is branch prediction. The processor makes a guess about which path to take - if the guess is wrong, anything written into the registers must be cleared, and the pipeline must be started again with the correct instruction. Some methods of branch prediction depend on stereotypical behavior. Branches pointing backward are taken about 90% of the time since backward-pointing branches are often found at the bottom of loops. On the other hand, branches pointing forward, are only taken approximately 50% of the time. Thus, it would be logical for processors to always follow the branch when it points backward, but not when it points forward. Other methods of branch prediction are less static: processors that use dynamic prediction keep a history for each branch and uses it to predict future branches. These processors are correct in their predictions 90% of the time.

Still other processors forgo the entire branch prediction ordeal. The RISC System/6000 fetches and starts decoding instructions from both sides of the branch. When it determines which branch should be followed, it then sends the correct instructions down the pipeline to be executed.

**Pipelining Developments**  
In order to make processors even faster, various methods of optimizing pipelines have been devised.

Superpipelining refers to dividing the pipeline into more steps. The more pipe stages there are, the faster the pipeline is because each stage is then shorter. Ideally, a pipeline with five stages should be five times faster than a non-pipelined processor (or rather, a pipeline with one stage). The instructions are executed at the speed at which each stage is completed, and each stage takes one fifth of the amount of time that the non-pipelined instruction takes. Thus, a processor with an 8-step pipeline (the MIPS R4000) will be even faster than its 5-step counterpart. The MIPS R4000 chops its pipeline into more pieces by dividing some steps into two. Instruction fetching, for example, is now done in two stages rather than one. The stages are as shown:

1. Instruction Fetch (First Half)
2. Instruction Fetch (Second Half)
3. Register Fetch
4. Instruction Execute
5. Data Cache Access (First Half)
6. Data Cache Access (Second Half)
7. Tag Check
8. Write Back

Superscalar pipelining involves multiple pipelines in parallel. Internal components of the processor are replicated so it can launch multiple instructions in some or all of its pipeline stages. The RISC System/6000 has a forked pipeline with different paths for floating-point and integer instructions. If there is a mixture of both types in a program, the processor can keep both forks running simultaneously. Both types of instructions share two initial stages (Instruction Fetch and Instruction Dispatch) before they fork. Often, however, superscalar pipelining refers to multiple copies of all pipeline stages (In terms of laundry, this would mean four washers, four dryers, and four people who fold clothes). Many of today's machines attempt to find two to six instructions that it can execute in every pipeline stage. If some of the instructions are dependent, however, only the first instruction or instructions are issued.

Dynamic pipelines have the capability to schedule around stalls. A dynamic pipeline is divided into three units: the instruction fetch and decode unit, five to ten execute or functional units, and a commit unit. Each execute unit has reservation stations, which act as buffers and hold the operands and operations.

![dynamic pipelining](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/dynamic.jpg)

While the functional units have the freedom to execute out of order, the instruction fetch/decode and commit units must operate in-order to maintain simple pipeline behavior. When the instruction is executed and the result is calculated, the commit unit decides when it is safe to store the result. If a stall occurs, the processor can schedule other instructions to be executed until the stall is resolved. This, coupled with the efficiency of multiple units executing instructions simultaneously, makes a dynamic pipeline an attractive alternative.