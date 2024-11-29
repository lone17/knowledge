---
aliases: 
tags: 
modified: 2024-08-13 11:32 AM +07:00
created: 2024-08-13 11:14 AM +07:00
---
#idea/product 
- Generate actions/conversation topics (what to talk about) from the current chat
- Maintain the actions/topics in a stack tree
- Every time a new action/topic is generated, it will be added to the stack
- Then sub-actions/topics are generated from the current one
- if the current topic is aborted (user changes the topic, user loses interest) then drop the parent action/topic