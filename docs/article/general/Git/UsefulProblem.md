---
title: git常见问题
---

# git常见问题

## 解决 fatal: unable to access 'https://github.com/.../.git': Could not resolve host: github.com。 的方法

1. 只需要在命令行中执行

git config --global --unset http.proxy 

git config --global --unset https.proxy

2. 参考网上解决办法：解除ssl验证后，再上传就OK了

git config --global http.sslVerify "false"


