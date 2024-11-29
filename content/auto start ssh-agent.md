---
aliases: 
tags: 
created: 2023-11-25 01:11 AM +07:00
modified: 2024-08-26 16:39 PM +07:00
---
#cs/os/windows #snippets 

To have SSH agent to automatically start with Windows, you can run (from elevated powershell prompt):

```powershell
Set-Service ssh-agent -StartupType Automatic 
```

then add your keys to the agent (only need to do this once), or the key will be added automatically the first time you use it.

To start it manually
```powershell
Start-Service ssh-agent
```
