---
aliases: 
tags: 
created: 2023-10-19 19:19 PM +07:00
modified: 2024-08-26 16:42 PM +07:00
---
#cs/os/wsl #snippets #permanent-notes

- Create symlinks in  `~/bin`
```shell
# Create ~/bin if it doesn't exist
[ ! -d "$HOME/bin" ] && mkdir "$HOME/bin"

# link windows exe files
ln -snf "$(which pscp.exe)" "$HOME/bin/scp"
ln -snf "$(which ssh.exe)" "$HOME/bin/ssh"
ln -snf "$(which scp.exe)" "$HOME/bin/scp"
ln -snf "$(which gpg.exe)" "$HOME/bin/gpg"
```

- Then add these lines to `~/.zshenv`. This is needed because running `wsl command` will create a non-login, non-interactive shell and `zsh` will source this file in that scenario.
```shell
# Prepend $HOME/bin to PATH
if [[ ! ":$PATH:" == *":$HOME/bin:"* ]]; then
    export PATH="$HOME/bin:$PATH"
fi
```

- The above solution will works only on `zsh`, other shells like `fish` or `csh` might source different files.
- For bash however, there no way to automatically source a file in a non-login non-interactive shell. So one can directly symlink the executable in `/usr/bin`. However it is not recommended as it modifies global executables.
```shell
# Back up the WSL gpg executable
sudo mv /etc/bin/gpg /etc/bin/gpg.old

# link the Windows gpg executable
sudo ln -snf "$(which gpg.exe)" "/etc/bin/gpg"
```

ref: 
- https://gist.github.com/doitian/078e6872a017754c28dd5ce0aa10375b
- https://stackoverflow.com/questions/73418572/source-bashrc-in-wsl-in-a-non-interactive-non-login-shell