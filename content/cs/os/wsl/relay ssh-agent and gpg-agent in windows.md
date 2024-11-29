---
aliases: 
tags: 
created: 2023-10-19 19:19 PM +07:00
modified: 2024-07-25 11:28 AM +07:00
---
- install wslu for wsl
	https://wslutiliti.es/wslu/install.html

- [[set automounts option for WSL]], enable all permissions for user owner. This way, wsl can use the `.ssh/config` file.

- symlink ssh config file from wsl to windows
```bash
ln -s /mnt/c/User/<user name>/.ssh/config ~/.ssh/config
```

- set up ssh-agent and gpg-agent on Windows and make wsl use those agents
	<https://snapcraft.ninja/2020/07/30/gpg-ssh-keys-in-wsl2-with-yubikeys/>
	https://queensidecastle.com/guides/wsl-the-easy-way
	
	- my scripts after considering the above 2 files
```bash
NPIPERELAY_URL="https://github.com/NZSmartie/npiperelay/releases/download/v0.1/npiperelay.exe"

if [ -n "$WSL_DISTRO_NAME" ]; then
    APPDATA="$(wslvar appdata)"
    APPDATA="${APPDATA//\/\/}"
    NPIPERELAY_WIN="$APPDATA/wsl2-ssh-gpg-npiperelay.exe"
    NPIPERELAY="$(wslpath "$NPIPERELAY_WIN")"

    # Check if npiperelay exists, if not then download it
    if [ ! -f "$NPIPERELAY" ]; then
        curl -L -q -o "$NPIPERELAY" "$NPIPERELAY_URL"
    fi


    #####
    ## Autorun for the gpg-relay bridge
    ##
    # Set up gpg-agent relay if we have it available
    if [ -d ~/.gnupg ] && [ $(command -v socat) ] && [ $(command -v $NPIPERELAY) ]; then
    	echo "Bridge gpg-agent from windows"
    	export GPG_SOCK="$HOME/.gnupg/S.gpg-agent"
    	# Only set it up if it's not already running
    	if ! ps aux | grep -q "[s]ocat.*S.gpg-agent"; then
            [ -e $GPG_SOCK ] && rm $GPG_SOCK
            mkdir -p "$(dirname "$GPG_SOCK")"
            setsid socat UNIX-LISTEN:"$GPG_SOCK",fork EXEC:"$NPIPERELAY -ei -ep -s -a "'"'"$APPDATA"/gnupg/S.gpg-agent'"',nofork
		fi
    fi

    #####
    ## Autorun for the ssh-relay bridge
    ##
    # Set up ssh-agent if we have it available, and there isn't a real working SSH_AUTH_SOCK
    if [ -d ~/.ssh ] && [ $(command -v socat) ] && [ $(command -v $NPIPERELAY) ] && [ ! -S "$SSH_AUTH_SOCK" ]; then
    	echo "Bridge ssh-agent from windows"
    	export SSH_AUTH_SOCK=$HOME/.ssh/agent.sock
    	# Only set it up if it's not already running
    	if ! ps aux | grep -q "[s]ocat.*openssh-ssh-agent"; then
            [ -e $SSH_AUTH_SOCK ] && rm $SSH_AUTH_SOCK
            setsid socat UNIX-LISTEN:"$SSH_AUTH_SOCK",fork EXEC:"$NPIPERELAY -ei -s //./pipe/openssh-ssh-agent",nofork
		fi
    fi
fi 
```

- Add the above script to `~/.scripts/wsl2-ssh-gpg-agents.sh` and then source it in `~/.profile` . Then make sure to source `~/.profile` in shell profile scripts (`~/.bash_profile`, `~/.zprofile`, etc.) or shell rc scripts (`~/.bashrc`, `~/.zshrc`, etc.) [[profile vs rc scripts]]
```bash
# relay ssh and gpg agents from windows
. ~/.scripts/wsl2-ssh-gpg-agents.sh
```

Note: GPG relay is not tested. Alternative things to try if it doesn't work:
https://r-pufky.github.io/docs/docs/apps/gpg/usage/windows-forward-gpg.html

- For gpg I used [[permanent notes/symlink windows exe to wsl]]