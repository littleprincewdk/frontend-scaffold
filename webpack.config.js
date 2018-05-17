const path = require('path');

module.exports = {
  context: __dirname,
  mode: process.env.NODE_ENV,
  entry: {
    tengine: './index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
