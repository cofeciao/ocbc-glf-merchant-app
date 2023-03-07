const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BuildVersionWebpackPlugin = require('build-version-webpack-plugin')
module.exports = {
  entry: {
    polyfills: [
      'whatwg-fetch',
      'core-js/modules/es.promise',
      'core-js/modules/es.array.iterator',
      'core-js/es/object',
      'regenerator-runtime/runtime',
    ],
    'digital-core': './src/index',
  },
  output: {
    library: '[name]',
    publicPath: process.argv[2] === '--env.file=development' ? '/' : './',
    libraryTarget: 'umd',
    jsonpFunction: 'webpackJsonp_[name]',
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js', '.jsx'],
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      },
      {
        test: /\.*\.scss$/,
        use: [{
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'public/fonts',
            outputPath: 'public/fonts',
            useRelativePath: true,
            esModule: false,
          },
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: process.argv[2] === '--env.file=development' ? '/public/images' : 'public/images',
              outputPath: 'public/images',
              name: '[name].[ext]',
              useRelativePath: true,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'public',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['digital-core', 'polyfills'],
      template: path.resolve(__dirname, './src/index.html'),
      adobe: process.argv[2] == '--env.file=prod' ? 'https://assets.adobedtm.com/f8f9776f70c5/929d6c7fc7b8/launch-4fb16aaa7062.min.js' : 'https://assets.adobedtm.com/f8f9776f70c5/929d6c7fc7b8/launch-7a1b3924cbd1-staging.min.js',
      gaId: process.argv[2] == '--env.file=prod' ? 'UA-31687854-1' : 'UA-194488311-1',
      gtm: process.argv[2] == '--env.file=prod' ? 'GTM-PZTQ6GN' : '',
      adobeEnv: process.argv[2] === '--env.file=prod' ? 'ocbcsgprod' : 'ocbcsgdev'
    }),
  ],
};
