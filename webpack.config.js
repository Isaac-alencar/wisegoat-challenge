const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
    advices: path.join(__dirname, 'src', 'getAdvice.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
      excludeChunks: ['advices'],
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'advices.html'),
      inject: true,
      filename: path.join(__dirname, 'dist', 'advices.html'),
      excludeChunks: ['index']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            publicPath: 'images',
          }
        },

      }
    ]
  },
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
  }
}