---
aliases: 
tags: 
created: 2024-02-15 00:13 AM +07:00
modified: 2024-09-02 17:06 PM +07:00
---
#cs/ir/ann/graph #todo/read #cs/algo/graph/nearest-neighbours

# what
An algorithm for [[Approximate Nearest Neighbors]] search of the [[Approximate Nearest Neighbors#graph|graph]] category
- More specifically, it is a _proximity graph_, in which two vertices are linked based on their proximity (closer vertices are linked) — often defined in Euclidean distance.
# resources
![[assets/Hierarchical Navigable Small Worlds (HNSW)/attachment.jpg]]
```ad-info
title: [Artificial Intelligence & Deep Learning | We have recently seen a surge in vector databases in this era of generative AI](https://www.facebook.com/groups/DeepNetGroup/permalink/2137846789941525/)

 Hierarchical Navigable Small World (HNSW) is one of the most efficient ways to build indexes for vector databases. The idea is to build a similarity graph and traverse that graph to find the nodes that are the closest to a query vector.  
  
Navigable Small World (NSW) is a process to build efficient graphs for search. We build a graph by adding vectors one after the other and connecting each new node to the most similar neighbors.  
  
When building the graph, we need to decide on a metric for similarity such that the search is optimized for the specific metric used to query items. Initially, when adding nodes, the density is low, and the edges will tend to capture nodes that are far apart in similarity. Little by little, the density increases, and the edges start to be shorter and shorter. As a consequence, the graph is composed of long edges that allow us to traverse long distances in the graph and short edges that capture closer neighbors. Because of it, we can quickly traverse the graph from one side to the other and look for nodes at a specific location in the vector space.  
  
When we want to find the nearest neighbor to a query vector, we initiate the search by starting at one node (i.e., node A in that case). Among its neighbors (D, G, C), we look for the closest node to the query (D). We iterate over that process until there are no closer neighbors to the query. Once we cannot move anymore, we found a close neighbor to the query. The search is approximate, and the found node may not be the closest as the algorithm may be stuck in a local minima.  
  
The problem with NSW, is we spend a lot of iterations traversing the graph to arrive at the right node. The idea for Hierarchical Navigable Small World is to build multiple graph layers where each layer is less dense compared to the next. Each layer represents the same vector space, but not all vectors are added to the graph. Basically, we include a node in the graph at layer L with a probability P(L). We include all the nodes in the final layer (if we have N layers, we have P(N) = 1), and the probability gets smaller as we get toward the first layers. We have a higher chance of including a node in the following layer, and we have P(L) < P(L + 1).  
  
The first layer allows us to traverse longer distances at each iteration, whereas in the last layer, each iteration will tend to capture shorter distances. When we search for a node, we start first in layer 1 and go to the next layer if the NSW algorithm finds the closest neighbor in that layer. This allows us to find the approximate nearest neighbor in fewer iterations on average.
```

[Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/)