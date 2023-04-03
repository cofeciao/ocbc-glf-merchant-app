# build-version-webpack-plugin
## install
> npm install --save-dev  build-version-webpack-plugin


## use
### vue-cli 3
```javascript
// vue.config.js
const BuildVersionWebpackPlugin = requrie('build-version-webpack-plugin')
module.exports = {
  configureWebpack: config => {
    // other config
    if(process.env.NODE_ENV === 'production'){ // only use build by production
      config.plugins.push(
        new BuildVersionWebpackPlugin()
      )
    }
  }
}
```
### webpack-cli 4
```javascript
// webpack.config.js
const BuildVersionWebpackPlugin = requrie('build-version-webpack-plugin')
module.exports = {
  plugins: [
    // other plugin ...
    new BuildVersionWebpackPlugin()
  ]
}
```
## result
create a file version.json in outputDir<br>
```json
{
  "commit": "",
  "branch": "",
  "commitUser": "",
  "commitEmail": ""
}
```

