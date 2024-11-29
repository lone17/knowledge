---
aliases: 
tags: 
modified: 2024-08-26 16:38 PM +07:00
created: 2023-10-24 05:20 AM +07:00
---
#cs/os/linux #snippets
```bash
if [[ ":$PATH:" == *":$HOME/bin:"* ]]; then
  echo "Your path is correctly set"
else
  echo "Your path is missing ~/bin, you might want to add it."
fi
```

Note that adding colons before both the expansion of $PATH and the path to search for solves the substring match issue; double-quoting the path avoids trouble with meta-characters.

ref: https://stackoverflow.com/a/1397020