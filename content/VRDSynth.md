---
aliases: 
tags: 
"annotation-target:": papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf
created: 2023-12-08 05:07 AM +07:00
---


>%%
>```annotation-json
>{"created":"2023-12-07T22:13:57.967Z","text":"there are works that use more than one and even all 3, such as \n- PICK: https://arxiv.org/pdf/2004.07464.pdf\n- SPADE: https://arxiv.org/pdf/2005.00642.pdf\n\ncould be more","updated":"2023-12-07T22:13:57.967Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":4260,"end":4267},{"type":"TextQuoteSelector","exact":"either ","prefix":"tures, deep learning techniques ","suffix":"leverage a pre-trainedtransforme"}]}]}
>```
>%%
>*%%PREFIX%%tures, deep learning techniques%%HIGHLIGHT%% ==either== %%POSTFIX%%leverage a pre-trainedtransforme*
>%%LINK%%[[#^qi0mb9kkc7b|show annotation]]
>%%COMMENT%%
>there are works that use more than one and even all 3, such as 
>- PICK: https://arxiv.org/pdf/2004.07464.pdf
>- SPADE: https://arxiv.org/pdf/2005.00642.pdf
>
>could be more
>%%TAGS%%
>
^qi0mb9kkc7b


>%%
>```annotation-json
>{"created":"2023-12-07T22:16:08.290Z","text":"This is not true, PICK and SPADE also predict the links. Also there is W2NER (https://arxiv.org/pdf/2112.10070.pdf) which also directly predict links between tokens, however this one addressed 1D documents, but extension to 2D is trivial.\n\nThose are what I know from 2 years ago, so there should be more now","updated":"2023-12-07T22:16:08.290Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":4872,"end":4894},{"type":"TextQuoteSelector","exact":"still unaddressed [13]","prefix":" between these key-and-valuesis ","suffix":". In detail, on FUNSD [13], BERT"}]}]}
>```
>%%
>*%%PREFIX%%between these key-and-valuesis%%HIGHLIGHT%% ==still unaddressed [13]== %%POSTFIX%%. In detail, on FUNSD [13], BERT*
>%%LINK%%[[#^rc5ra828ee|show annotation]]
>%%COMMENT%%
>This is not true, PICK and SPADE also predict the links. Also there is W2NER (https://arxiv.org/pdf/2112.10070.pdf) which also directly predict links between tokens, however this one addressed 1D documents, but extension to 2D is trivial.
>
>Those are what I know from 2 years ago, so there should be more now
>%%TAGS%%
>
^rc5ra828ee


>%%
>```annotation-json
>{"created":"2023-12-07T22:19:31.840Z","text":"Please provide some reference","updated":"2023-12-07T22:19:31.840Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":7225,"end":7245},{"type":"TextQuoteSelector","exact":" existing literature","prefix":"show to achieve high accuracy in","suffix":".Following that, we propose a no"}]}]}
>```
>%%
>*%%PREFIX%%show to achieve high accuracy in%%HIGHLIGHT%% ==existing literature== %%POSTFIX%%.Following that, we propose a no*
>%%LINK%%[[#^448dphywqvv|show annotation]]
>%%COMMENT%%
>Please provide some reference
>%%TAGS%%
>
^448dphywqvv


>%%
>```annotation-json
>{"created":"2023-12-07T22:20:58.065Z","text":"This could be that I'm fairly unknowledgeable in this field, but I would like to have a brief definition about the \"program\" here, i.e. what are its inputs and outputs ?\n\nFrom what presented in this paragraph, I have the impression that the programs take as input a graph where vertices are the semantic entities and edges represents semantic connections. Then it outputs a subset of the input graph with some edges removed. Contradictorily, in the abstract, it is stated that the programs \"link semantic entities\", which indicate they create links instead of removing them.\n\nEven though this will be described in details in later section, I think It's good to present a high level description here to set up the context for the readers.\n\nIf this is obvious to the intended audience (researchers in the field), then please ignore this comment.","updated":"2023-12-07T22:20:58.065Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":7673,"end":7682},{"type":"TextQuoteSelector","exact":"programs ","prefix":"two phases: identifying initial ","suffix":"and iteratively refin-ing progra"}]}]}
>```
>%%
>*%%PREFIX%%two phases: identifying initial%%HIGHLIGHT%% ==programs== %%POSTFIX%%and iteratively refin-ing progra*
>%%LINK%%[[#^eyqdsmcez2k|show annotation]]
>%%COMMENT%%
>This could be that I'm fairly unknowledgeable in this field, but I would like to have a brief definition about the "program" here, i.e. what are its inputs and outputs ?
>
>From what presented in this paragraph, I have the impression that the programs take as input a graph where vertices are the semantic entities and edges represents semantic connections. Then it outputs a subset of the input graph with some edges removed. Contradictorily, in the abstract, it is stated that the programs "link semantic entities", which indicate they create links instead of removing them.
>
>Even though this will be described in details in later section, I think It's good to present a high level description here to set up the context for the readers.
>
>If this is obvious to the intended audience (researchers in the field), then please ignore this comment.
>%%TAGS%%
>
^eyqdsmcez2k


>%%
>```annotation-json
>{"created":"2023-12-07T22:24:14.057Z","text":"Did you mean frequent ?\nfrequented (adj): (of a place) visited often or habitually.\n\nIf this is a term commonly used in the field, please ignore this comment.","updated":"2023-12-07T22:24:14.057Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":7757,"end":7767},{"type":"TextQuoteSelector","exact":"frequented","prefix":"first stage, VRDSynth mines the ","suffix":"relation between semantically li"}]}]}
>```
>%%
>*%%PREFIX%%first stage, VRDSynth mines the%%HIGHLIGHT%% ==frequented== %%POSTFIX%%relation between semantically li*
>%%LINK%%[[#^si7kqcokh6e|show annotation]]
>%%COMMENT%%
>Did you mean frequent ?
>frequented (adj): (of a place) visited often or habitually.
>
>If this is a term commonly used in the field, please ignore this comment.
>%%TAGS%%
>
^si7kqcokh6e


>%%
>```annotation-json
>{"created":"2023-12-07T22:26:43.567Z","updated":"2023-12-07T22:26:43.567Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":7855,"end":7866},{"type":"TextQuoteSelector","exact":"frequented ","prefix":"rainingdocuments and uses these ","suffix":"relations to construct initialpr"}]}]}
>```
>%%
>*%%PREFIX%%rainingdocuments and uses these%%HIGHLIGHT%% ==frequented== %%POSTFIX%%relations to construct initialpr*
>%%LINK%%[[#^a66g7pg651i|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^a66g7pg651i


>%%
>```annotation-json
>{"created":"2023-12-07T22:26:56.756Z","text":"did you mean \"filter\" ?\nif you have a mix of A and B and you filter A out, then you are keeping B. I suppose here you want to keep the \"potential pairs\" ?","updated":"2023-12-07T22:26:56.756Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":7910,"end":7920},{"type":"TextQuoteSelector","exact":"filter out","prefix":" construct initialprograms that ","suffix":" potential pairs of semantically"}]}]}
>```
>%%
>*%%PREFIX%%construct initialprograms that%%HIGHLIGHT%% ==filter out== %%POSTFIX%%potential pairs of semantically*
>%%LINK%%[[#^2z9o2k3s8qz|show annotation]]
>%%COMMENT%%
>did you mean "filter" ?
>if you have a mix of A and B and you filter A out, then you are keeping B. I suppose here you want to keep the "potential pairs" ?
>%%TAGS%%
>
^2z9o2k3s8qz


>%%
>```annotation-json
>{"created":"2023-12-07T22:29:25.973Z","text":"this piece confuses me in the sense that if the input is a graph, which means there are links in it, then why we need to \"link semantic entities\" ? \n\nIs it that you start with a lot of links then your programs try to filter down to only links between semantic entities ?\n\nOr is it that the links in the input graph and the links you trying to get are of different kinds ? If so please briefly describe the difference.","updated":"2023-12-07T22:29:25.973Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":859,"end":1001},{"type":"TextQuoteSelector","exact":"our method takes as input a document graph constructed fromscanned visually rich documents and synthesizes programs thatlink semantic entities","prefix":"ebpages, or on specific formats,","suffix":" from scanned documents in diffe"}]}]}
>```
>%%
>*%%PREFIX%%ebpages, or on specific formats,%%HIGHLIGHT%% ==our method takes as input a document graph constructed fromscanned visually rich documents and synthesizes programs thatlink semantic entities== %%POSTFIX%%from scanned documents in diffe*
>%%LINK%%[[#^xhim8vr2ttq|show annotation]]
>%%COMMENT%%
>this piece confuses me in the sense that if the input is a graph, which means there are links in it, then why we need to "link semantic entities" ? 
>
>Is it that you start with a lot of links then your programs try to filter down to only links between semantic entities ?
>
>Or is it that the links in the input graph and the links you trying to get are of different kinds ? If so please briefly describe the difference.
>%%TAGS%%
>
^xhim8vr2ttq


>%%
>```annotation-json
>{"created":"2023-12-07T22:35:23.848Z","text":"missing 5 and 6","updated":"2023-12-07T22:35:23.848Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":10459,"end":10469},{"type":"TextQuoteSelector","exact":" Section 7","prefix":"bes our domain-specificlanguage.","suffix":" shows our experiment settings a"}]}]}
>```
>%%
>*%%PREFIX%%bes our domain-specificlanguage.%%HIGHLIGHT%% ==Section 7== %%POSTFIX%%shows our experiment settings a*
>%%LINK%%[[#^57advfe32o2|show annotation]]
>%%COMMENT%%
>missing 5 and 6
>%%TAGS%%
>
^57advfe32o2


>%%
>```annotation-json
>{"created":"2023-12-08T23:41:07.700Z","text":"groups","updated":"2023-12-08T23:41:07.700Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":18179,"end":18184},{"type":"TextQuoteSelector","exact":"group","prefix":"\udc56 isan ordered pair of semantic ","suffix":" from 𝐷𝑖, indicating a directi"}]}]}
>```
>%%
>*%%PREFIX%%� isan ordered pair of semantic%%HIGHLIGHT%% ==group== %%POSTFIX%%from 𝐷𝑖, indicating a directi*
>%%LINK%%[[#^s87vhhz9h7d|show annotation]]
>%%COMMENT%%
>groups
>%%TAGS%%
>
^s87vhhz9h7d


>%%
>```annotation-json
>{"created":"2023-12-08T23:47:31.999Z","text":"how is a group of entities is defined ? Is this a subset of D_i, or a subgraph of {D_i, D_R} ?\n\nAlso I'm confused that while previous section talks about the links between entities but now it's between group of entities instead.","updated":"2023-12-08T23:47:31.999Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":17999,"end":18018},{"type":"TextQuoteSelector","exact":"groupingof entities","prefix":"ments, we are provided with the ","suffix":" 𝐺𝑖 ={𝑔1,𝑔2 . . .𝑔𝐾} and t"}]}]}
>```
>%%
>*%%PREFIX%%ments, we are provided with the%%HIGHLIGHT%% ==groupingof entities== %%POSTFIX%%𝐺𝑖 ={𝑔1,𝑔2 . . .𝑔𝐾} and t*
>%%LINK%%[[#^m74q33x9pfj|show annotation]]
>%%COMMENT%%
>how is a group of entities is defined ? Is this a subset of D_i, or a subgraph of {D_i, D_R} ?
>
>Also I'm confused that while previous section talks about the links between entities but now it's between group of entities instead.
>%%TAGS%%
>
^m74q33x9pfj


>%%
>```annotation-json
>{"created":"2023-12-08T23:54:20.397Z","text":"did you mean \"the semantic links L_i between existing elements\" ?","updated":"2023-12-08T23:54:20.397Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":18049,"end":18104},{"type":"TextQuoteSelector","exact":"the semantic link between 𝐿𝑖existing between elements","prefix":"s 𝐺𝑖 ={𝑔1,𝑔2 . . .𝑔𝐾} and ","suffix":", where each semantic link (𝑔𝑗"}]}]}
>```
>%%
>*%%PREFIX%%s 𝐺𝑖 ={𝑔1,𝑔2 . . .𝑔𝐾} and%%HIGHLIGHT%% ==the semantic link between 𝐿𝑖existing between elements== %%POSTFIX%%, where each semantic link (𝑔𝑗*
>%%LINK%%[[#^l7wbz33x3e|show annotation]]
>%%COMMENT%%
>did you mean "the semantic links L_i between existing elements" ?
>%%TAGS%%
>
^l7wbz33x3e


>%%
>```annotation-json
>{"created":"2023-12-08T23:55:39.579Z","text":"Please describe what P, S, P(x) and P_x are.\n\nI suppose:\n- S: set of all valid programs\n- P: a valid program\n- P(x): output of P with input x?\n- P_x: not sure?\n\nAlso, is this describing 2 requirements or 1 ? It a appear to me that the part after \"and\" is a separate requirement since it only contains g2 while the other contains both g1 and g2. If so, please separate them into 2 statements and change the description to plural. ","updated":"2023-12-08T23:55:39.579Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":18919,"end":18987},{"type":"TextQuoteSelector","exact":"∀((𝑔1,𝑔2) ∈𝐿𝑖)∃(𝑃 ∈S)s.t. 𝑔1 ∈𝑃(𝑔2)and (𝑃𝑔2,𝑔2) ∈𝐿𝑖∀𝑔2","prefix":"sis can be expressed as follows:","suffix":"(1)Intuitively, this means that "}]}]}
>```
>%%
>*%%PREFIX%%sis can be expressed as follows:%%HIGHLIGHT%% ==∀((𝑔1,𝑔2) ∈𝐿𝑖)∃(𝑃 ∈S)s.t. 𝑔1 ∈𝑃(𝑔2)and (𝑃𝑔2,𝑔2) ∈𝐿𝑖∀𝑔2== %%POSTFIX%%(1)Intuitively, this means that*
>%%LINK%%[[#^6d73ty6w0gk|show annotation]]
>%%COMMENT%%
>Please describe what P, S, P(x) and P_x are.
>
>I suppose:
>- S: set of all valid programs
>- P: a valid program
>- P(x): output of P with input x?
>- P_x: not sure?
>
>Also, is this describing 2 requirements or 1 ? It a appear to me that the part after "and" is a separate requirement since it only contains g2 while the other contains both g1 and g2. If so, please separate them into 2 statements and change the description to plural. 
>%%TAGS%%
>
^6d73ty6w0gk


>%%
>```annotation-json
>{"created":"2023-12-09T00:10:08.814Z","text":"I believe this task was not defined. So far there has only been the definition of semantic entities linking.\n\nAlso, the introduction only mentioned \"generate\nprograms that link semantic entities\".","updated":"2023-12-09T00:10:08.814Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":19326,"end":19352},{"type":"TextQuoteSelector","exact":"f semantic entity grouping","prefix":"𝑀𝑖 ={(𝑒1,𝑒2)}. In the case o","suffix":",we input pair-wise connections "}]}]}
>```
>%%
>*%%PREFIX%%𝑀𝑖 ={(𝑒1,𝑒2)}. In the case o%%HIGHLIGHT%% ==f semantic entity grouping== %%POSTFIX%%,we input pair-wise connections*
>%%LINK%%[[#^yomychp66d|show annotation]]
>%%COMMENT%%
>I believe this task was not defined. So far there has only been the definition of semantic entities linking.
>
>Also, the introduction only mentioned "generate
>programs that link semantic entities".
>%%TAGS%%
>
^yomychp66d


>%%
>```annotation-json
>{"created":"2023-12-09T00:26:18.411Z","text":"This sentence sounded weird, seems like it is missing the predicate.","updated":"2023-12-09T00:26:18.411Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":23970,"end":24153},{"type":"TextQuoteSelector","exact":"the predicates and conditions𝑃𝐶, such as 𝐿𝑏𝑙𝐶 for label comparisons, 𝐹𝑙𝑜𝑎𝑡𝐶 for floating-pointcomparisons to incorporate layout features, 𝑆𝑡𝑟𝐶 for string com-parisons.","prefix":"layout and textual information, ","suffix":"The label constraints 𝐿𝑏𝑙𝐶 m"}]}]}
>```
>%%
>*%%PREFIX%%layout and textual information,%%HIGHLIGHT%% ==the predicates and conditions𝑃𝐶, such as 𝐿𝑏𝑙𝐶 for label comparisons, 𝐹𝑙𝑜𝑎𝑡𝐶 for floating-pointcomparisons to incorporate layout features, 𝑆𝑡𝑟𝐶 for string com-parisons.== %%POSTFIX%%The label constraints 𝐿𝑏𝑙𝐶 m*
>%%LINK%%[[#^vlniaqcf1fb|show annotation]]
>%%COMMENT%%
>This sentence sounded weird, seems like it is missing the predicate.
>%%TAGS%%
>
^vlniaqcf1fb


>%%
>```annotation-json
>{"created":"2023-12-09T00:38:16.164Z","text":"missing number for this one ?","updated":"2023-12-09T00:38:16.164Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":26371,"end":26422},{"type":"TextQuoteSelector","exact":"𝐷𝑉 is the domain of visual elements in a document","prefix":"𝐷𝐶 is the domain ofconditions ","suffix":", (3)𝐷𝑅 is the domain of relat"}]}]}
>```
>%%
>*%%PREFIX%%𝐷𝐶 is the domain ofconditions%%HIGHLIGHT%% ==𝐷𝑉 is the domain of visual elements in a document== %%POSTFIX%%, (3)𝐷𝑅 is the domain of relat*
>%%LINK%%[[#^1emaif11xr1|show annotation]]
>%%COMMENT%%
>missing number for this one ?
>%%TAGS%%
>
^1emaif11xr1


>%%
>```annotation-json
>{"created":"2023-12-09T20:36:29.396Z","text":"shouldn't this be \"impossible\" or \"invalid\" ?","updated":"2023-12-09T20:36:29.396Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":35413,"end":35422},{"type":"TextQuoteSelector","exact":"possible ","prefix":"operates. Thus,early pruning of ","suffix":"bindings leads to a better chanc"}]}]}
>```
>%%
>*%%PREFIX%%operates. Thus,early pruning of%%HIGHLIGHT%% ==possible== %%POSTFIX%%bindings leads to a better chanc*
>%%LINK%%[[#^z9wvlbdnzy9|show annotation]]
>%%COMMENT%%
>shouldn't this be "impossible" or "invalid" ?
>%%TAGS%%
>
^z9wvlbdnzy9


>%%
>```annotation-json
>{"created":"2023-12-09T20:51:37.836Z","text":"missing verb","updated":"2023-12-09T20:51:37.836Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":40569,"end":40575},{"type":"TextQuoteSelector","exact":"we the","prefix":"ynthesizing redundant programs, ","suffix":" set of covered specifica-tions "}]}]}
>```
>%%
>*%%PREFIX%%ynthesizing redundant programs,%%HIGHLIGHT%% ==we the== %%POSTFIX%%set of covered specifica-tions*
>%%LINK%%[[#^5bown6egkia|show annotation]]
>%%COMMENT%%
>missing verb
>%%TAGS%%
>
^5bown6egkia



>%%
>```annotation-json
>{"created":"2023-12-09T20:58:59.078Z","text":"missing close parenthesis ?","updated":"2023-12-09T20:58:59.078Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":42295,"end":42340},{"type":"TextQuoteSelector","exact":"𝑝𝑟𝑒𝑐(𝐵+∗𝑝 ,𝐵−∗𝑝 >𝑝𝑟𝑒𝑐(𝐵+𝑝,𝐵−𝑝","prefix":"e;endif 𝐵+∗𝑝 \\𝐶𝑜𝑣𝑒𝑟 ≠∅and","suffix":" then𝐶𝑜𝑣𝑒𝑟 ←𝐶𝑜𝑣𝑒𝑟 ∪𝐵+"}]}]}
>```
>%%
>*%%PREFIX%%e;endif 𝐵+∗𝑝 \𝐶𝑜𝑣𝑒𝑟 ≠∅and%%HIGHLIGHT%% ==𝑝𝑟𝑒𝑐(𝐵+∗𝑝 ,𝐵−∗𝑝 >𝑝𝑟𝑒𝑐(𝐵+𝑝,𝐵−𝑝== %%POSTFIX%%then𝐶𝑜𝑣𝑒𝑟 ←𝐶𝑜𝑣𝑒𝑟 ∪𝐵+*
>%%LINK%%[[#^4rrk46q30gg|show annotation]]
>%%COMMENT%%
>missing close parenthesis ?
>%%TAGS%%
>
^4rrk46q30gg


>%%
>```annotation-json
>{"created":"2023-12-09T21:07:52.209Z","text":"missing domain for v0 here ?","updated":"2023-12-09T21:07:52.209Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":38748,"end":38750},{"type":"TextQuoteSelector","exact":"v0","prefix":"𝑡 ∈ 𝑉𝑠𝑒𝑡_𝑟𝑒𝑡𝑢𝑟𝑛, (𝑏[","suffix":"],𝑏[v𝑟𝑒𝑡]) ∈ 𝑀), and 𝐵−𝑝d"}]}]}
>```
>%%
>*%%PREFIX%%𝑡 ∈ 𝑉𝑠𝑒𝑡_𝑟𝑒𝑡𝑢𝑟𝑛, (𝑏[%%HIGHLIGHT%% ==v0== %%POSTFIX%%],𝑏[v𝑟𝑒𝑡]) ∈ 𝑀), and 𝐵−𝑝d*
>%%LINK%%[[#^7l32z2ni2bt|show annotation]]
>%%COMMENT%%
>missing domain for v0 here ?
>%%TAGS%%
>
^7l32z2ni2bt


>%%
>```annotation-json
>{"created":"2023-12-09T21:09:31.855Z","text":"Inconsistent use of \"<-\" and \"=\" ?\nMight be that I misunderstood the notation, if so please ignore this comment.","updated":"2023-12-09T21:09:31.855Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":41860,"end":41939},{"type":"TextQuoteSelector","exact":"𝐶𝑜𝑣𝑒𝑟,𝑃𝐶𝑜𝑣𝑒𝑟,𝑁𝐶𝑜𝑣𝑒𝑟 ={}, {}, {};𝑉𝑆∗,𝑃𝑃∗,𝑁𝑃∗ ←{}, {}, {};","prefix":"s 𝑁𝑃∗ and version spaces 𝑉𝑆∗","suffix":"foreach 𝐵+𝑝,𝐵−𝑝,𝑝 ∈𝑉𝑆 doi"}]}]}
>```
>%%
>*%%PREFIX%%s 𝑁𝑃∗ and version spaces 𝑉𝑆∗%%HIGHLIGHT%% ==𝐶𝑜𝑣𝑒𝑟,𝑃𝐶𝑜𝑣𝑒𝑟,𝑁𝐶𝑜𝑣𝑒𝑟 ={}, {}, {};𝑉𝑆∗,𝑃𝑃∗,𝑁𝑃∗ ←{}, {}, {};== %%POSTFIX%%foreach 𝐵+𝑝,𝐵−𝑝,𝑝 ∈𝑉𝑆 doi*
>%%LINK%%[[#^b137g3rmae6|show annotation]]
>%%COMMENT%%
>Inconsistent use of "<-" and "=" ?
>Might be that I misunderstood the notation, if so please ignore this comment.
>%%TAGS%%
>
^b137g3rmae6


>%%
>```annotation-json
>{"created":"2023-12-09T21:12:45.922Z","text":"should be on a new line ? Also should be \"<-\" instead of \"=\" ?","updated":"2023-12-09T21:12:45.922Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":42558,"end":42586},{"type":"TextQuoteSelector","exact":"𝑝𝑢 =Union({𝑃𝑃∗}∪{𝑁𝑃∗})","prefix":"𝑝 ;endendend𝐸𝑃𝐶𝑜𝑣𝑒𝑟 ←{} ","suffix":";foreach 𝐵+𝑝,𝐵−𝑝,𝑝 ∈𝑉𝑆 do"}]}]}
>```
>%%
>*%%PREFIX%%𝑝 ;endendend𝐸𝑃𝐶𝑜𝑣𝑒𝑟 ←{}%%HIGHLIGHT%% ==𝑝𝑢 =Union({𝑃𝑃∗}∪{𝑁𝑃∗})== %%POSTFIX%%;foreach 𝐵+𝑝,𝐵−𝑝,𝑝 ∈𝑉𝑆 do*
>%%LINK%%[[#^3hmb413ikmq|show annotation]]
>%%COMMENT%%
>should be on a new line ? Also should be "<-" instead of "=" ?
>%%TAGS%%
>
^3hmb413ikmq


>%%
>```annotation-json
>{"created":"2023-12-09T21:14:06.437Z","text":"missing \"= ∅\" ?","updated":"2023-12-09T21:14:06.437Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":42621,"end":42656},{"type":"TextQuoteSelector","exact":"𝐵−𝑝 \\(𝑃𝐶𝑜𝑣𝑒𝑟 ∪𝑁𝐶𝑜𝑣𝑒𝑟)","prefix":"reach 𝐵+𝑝,𝐵−𝑝,𝑝 ∈𝑉𝑆 doif ","suffix":"and 𝐵+𝑝 \\𝑃𝐶𝑜𝑣𝑒𝑟 ≠∅then𝑃"}]}]}
>```
>%%
>*%%PREFIX%%reach 𝐵+𝑝,𝐵−𝑝,𝑝 ∈𝑉𝑆 doif%%HIGHLIGHT%% ==𝐵−𝑝 \(𝑃𝐶𝑜𝑣𝑒𝑟 ∪𝑁𝐶𝑜𝑣𝑒𝑟)== %%POSTFIX%%and 𝐵+𝑝 \𝑃𝐶𝑜𝑣𝑒𝑟 ≠∅then𝑃*
>%%LINK%%[[#^tar8fu7dhcq|show annotation]]
>%%COMMENT%%
>missing "= ∅" ?
>%%TAGS%%
>
^tar8fu7dhcq


>%%
>```annotation-json
>{"created":"2023-12-09T21:37:30.217Z","text":"the image is too blurry for this one","updated":"2023-12-09T21:37:30.217Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":43238,"end":43256},{"type":"TextQuoteSelector","exact":"\"specific gravity\"","prefix":"wards values on thedown right, (","suffix":" towards \"not determined\"), inth"}]}]}
>```
>%%
>*%%PREFIX%%wards values on thedown right, (%%HIGHLIGHT%% =="specific gravity"== %%POSTFIX%%towards "not determined"), inth*
>%%LINK%%[[#^yl0xrrdx12|show annotation]]
>%%COMMENT%%
>the image is too blurry for this one
>%%TAGS%%
>
^yl0xrrdx12


>%%
>```annotation-json
>{"created":"2023-12-09T21:47:47.509Z","text":"missing open parenthesis","updated":"2023-12-09T21:47:47.509Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":43805,"end":43821},{"type":"TextQuoteSelector","exact":"Union𝑛𝑝 ∈𝑁𝑃)","prefix":"\udc4e𝑙 :=Exclude(Union(𝑝𝑝 ∈𝑃𝑃),","suffix":")7 EXPERIMENTWe implement VRDSyn"}]}]}
>```
>%%
>*%%PREFIX%%�𝑙 :=Exclude(Union(𝑝𝑝 ∈𝑃𝑃),%%HIGHLIGHT%% ==Union𝑛𝑝 ∈𝑁𝑃)== %%POSTFIX%%)7 EXPERIMENTWe implement VRDSyn*
>%%LINK%%[[#^tfspt66lzc8|show annotation]]
>%%COMMENT%%
>missing open parenthesis
>%%TAGS%%
>
^tfspt66lzc8


>%%
>```annotation-json
>{"created":"2023-12-09T22:04:25.553Z","text":"It appears to me that VRDSynth is CPU-bound and does not benefit from GPUs. Thus, you might want to make the comparison with more CPU cores. If in that scenario VRDSynth performs better or comparable to LayoutXLM, then you can make some points about the practicality of VRDSynth.\n\nFor examples:\n- 2-4 cores (no gpu) is the common spec for personal laptops. In businesses, document processing tasks like mentioned would be preferable to be able to run on edge devices. (small memory footprint is also relevant in this case)\n- more cores (no gpu): could be use on on-premises IT infra. Not needing gpu while still produce similar performance would be more cost effective.","updated":"2023-12-09T22:04:25.553Z","document":{"title":"VRDSynth: Synthesizing Programs for Visually Rich Document Information Extraction","link":[{"href":"urn:x-pdf:8e393563e59c4ecdf2b9b9350b6a0dc0"},{"href":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf"}],"documentFingerprint":"8e393563e59c4ecdf2b9b9350b6a0dc0"},"uri":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","target":[{"source":"vault:/papers/Synthesizing_Programs_for_Visually_Rich_Information_Extraction.pdf","selector":[{"type":"TextPositionSelector","start":48173,"end":48199},{"type":"TextQuoteSelector","exact":"Inference time efficiency.","prefix":"f joining programs.7.3.1 RQ3.1. ","suffix":" We note down the meanand standa"}]}]}
>```
>%%
>*%%PREFIX%%f joining programs.7.3.1 RQ3.1.%%HIGHLIGHT%% ==Inference time efficiency.== %%POSTFIX%%We note down the meanand standa*
>%%LINK%%[[#^w3sqsp7dzyl|show annotation]]
>%%COMMENT%%
>It appears to me that VRDSynth is CPU-bound and does not benefit from GPUs. Thus, you might want to make the comparison with more CPU cores. If in that scenario VRDSynth performs better or comparable to LayoutXLM, then you can make some points about the practicality of VRDSynth.
>
>For examples:
>- 2-4 cores (no gpu) is the common spec for personal laptops. In businesses, document processing tasks like mentioned would be preferable to be able to run on edge devices. (small memory footprint is also relevant in this case)
>- more cores (no gpu): could be use on on-premises IT infra. Not needing gpu while still produce similar performance would be more cost effective.
>%%TAGS%%
>
^w3sqsp7dzyl
