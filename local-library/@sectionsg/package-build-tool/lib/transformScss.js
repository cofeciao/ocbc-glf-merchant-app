const sass = require('sass');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

function transformScss(scssFile, config = {}) {
  const { cwd = process.cwd() } = config;
  const resolvedScssFile = path.resolve(cwd, scssFile);

  // Do scss compile
  const scssOpts = {
    file: resolvedScssFile,
  };
  const result = sass.renderSync(scssOpts);
  return postcss([autoprefixer]).process(result.css.toString(), { from: undefined }).then(r => r.css);
}

module.exports = transformScss;