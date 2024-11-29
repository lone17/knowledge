---
aliases: 
tags: 
created: 2023-10-19 19:19 PM +07:00
---
Add these content to `/etc/wsl.conf` and then restart your sub-system.

```shell
[automount]
options = "metadata,umask=022,fmask=011"
```

This enables all permissions for user owner  and provides WSL with necessary permission on your Windows file system.