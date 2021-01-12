const path = require('path');
const webpack = require('webpack');
const HtmlWEbpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWEbpackPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
  ],
  mode: 'development',
}