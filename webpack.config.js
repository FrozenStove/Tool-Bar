const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const NormalModuleReplacementPlugin = require("module-replace-webpack-plugin");
const path = require('path');

module.exports = [
  // {
  //   mode: 'development',
  //   entry: {
  //     main: './electron/main.js',
  //     preload: './electron/preload.js',
  //   },
  //   target: 'electron-main',
  //   module: {
  //     rules: [
  //       {
  //         test: /.(js|jsx)$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: 'babel-loader',
  //         },        
  //       },
  //     ],
  //   },
  //   resolve: {
  //     extensions: ['.js', '.jsx'],
  //   },
  //   output: {
  //     path: path.resolve(__dirname, './dist/electron/'),
  //     clean: true,
  //   },
  //   externals: [
  //     {
  //       'utf-8-validate': 'commonjs utf-8-validate',
  //       bufferutil: 'commonjs bufferutil',
  //       fsevents: "require('fsevents')",
  //     },
  //   ],
  // },
  {
    mode: 'development',
    entry: './client/index.js',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },        
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.s?[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.png/,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, './dist/client'),
      filename: 'index.js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'client/index.html',
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: path.resolve(__dirname, 'client/assets'),
      //       to: 'assets/',
      //     },
      //   ],
      // }),
      // new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
      //   resource.request = resource.request.replace(/^node:/, "");
      // }),
    ],
  },
];
