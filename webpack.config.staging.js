const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require("path");

module.exports = merge(common, {
  devtool: 'sourcemap',
  mode: 'none',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(require('./config/staging'))
    }),
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(
        process.env.npm_package_version,
      ),
    }),
  ],
  resolve: {
    alias: {
      stringUtils: path.resolve(__dirname, `./src/utils/stringUtils`),
    },
    extensions: [".ts", ".tsx", ".js"],
  }
});

