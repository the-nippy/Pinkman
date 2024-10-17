## FAQ

1. 安装Electron包时报错超时错误
```js
command failed
npm error command sh -c node install.js
npm error RequestError: connect ETIMEDOUT 192.30.255.112:443
```

解决参考链接：https://stackoverflow.com/questions/60054531/how-can-i-solve-the-connection-problem-during-npm-install-behind-a-proxy

```
npx cross-env ELECTRON_GET_USE_PROXY=true GLOBAL_AGENT_HTTPS_PROXY=http://127.0.0.1:7890 npm install -D electron@latest
```

npm代理，通过 cross-env 传入。
