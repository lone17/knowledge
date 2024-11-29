---
aliases: 
tags: 
created: 2023-10-19 19:19 PM +07:00
modified: 2024-08-26 16:39 PM +07:00
---
#cs/os/linux #snippets 

- Download `pyenv`
- Auto start `pyenv` by adding this to the shell's rc file
```bash
# start pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```