const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
function BuildVersionWebpackPlugin() {
}
const version = JSON.stringify(gitINfo(),null,'\t')
BuildVersionWebpackPlugin.prototype.apply = (compiler) =>{
  const outputDir = compiler.options.output.path
  compiler.hooks.done.tap('GitInfo', function() {
    fs.writeFile(path.resolve(__dirname,outputDir,'version.json'),version,(err,data)=>{
      // console.error(err)
      // console.log(data)
    })
  });
}

// 获取git相关信息
function gitINfo(){
  try{
    const commit = child_process.execSync('git show -s --format=%H').toString().trim()
    const branch = child_process.execSync('git symbolic-ref HEAD | sed -e "s/^refs\\\\/heads\\\\///"').toString().trim()
    const commitUser = child_process.execSync('git show -s --format=%cn').toString().trim()
    const commitEmail = child_process.execSync('git show -s --format=%ce').toString().trim()
    const buildTime = Date.now()
    return {
      commit,
      branch,
      commitUser,
      commitEmail,
      buildTime
    }
  }catch(e){
    return e.message
  }


}

module.exports = BuildVersionWebpackPlugin
