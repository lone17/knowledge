---
aliases: 
tags: 
created: 2023-10-19 19:22 PM +07:00
modified: 2024-08-26 16:39 PM +07:00
---
#cs/os/windows #snippets 
1. Create a file called `alias.cmd` in the user folder (i.e. `%USERPROFILE\alias.cmd`) or where ever you feel suited. This will be like your `~/.bash_alias` on your linux machine.

2. Add your alias into the script using the `doskey` command
```cmd
@echo off

:: Commands
DOSKEY ls=dir /B $*
DOSKEY ll=dir /a $*
DOSKEY git-secret=wsl git-secret $*
DOSKEY gs=wsl git-secret $*
```
Note: `$*` is used to allow taking arguments

3. Register it to be applied automatically whenever `cmd.exe` is executed
```cmd
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_EXPAND_SZ /d "%"USERPROFILE"%\alias.cmd" /f
```

4. Restart cmd for the changes to take effect
	To unregister:
```
reg delete "HKCU\Software\Microsoft\Command Processor" /v AutoRun
```
However this will remove all added scripts.
