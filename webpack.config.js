const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = (env, mode) =>
  merge(common, {
    devtool: "sourcemap",
    devServer: {
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(require(`./config/${env.file}`))
      }),
    ],
    resolve: {
      alias: {
        stringUtils: path.resolve(__dirname, `./src/utils/stringUtils`),
      },
      extensions: [".ts", ".tsx", ".js"],
    },
  });
