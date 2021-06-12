```
Error: Cannot find module 'webpack-cli/bin/config-yargs'   
Require stack:
-C:\Workspaces\practice-react\node_modules\webpack-dev-server\bin\webpack-dev-server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)  
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (C:\Workspaces\practice-react\node_modules\webpack-dev-server\bin\webpack-dev-server.js:65:1)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)    
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Workspaces\\practice-react\\node_modules\\webpack-dev-server\\bin\\webpack-dev-server.js'
  ]
}
```

* 원인   
webpack, webpack-cli 버전이 webpack-dev-server과 달라서 생기는 거라는데 어떻게 맞춰줘야 할가??

* 해결   
1. 이렇게 바꾸면 된다~   
  "start": "webpack-cli serve --mode development"
2. 아니면 버전 맞추기   
  webpack": "^5.2.0 webpack-cli": "^4.1.0 webpack-dev-server": "^3.11.0