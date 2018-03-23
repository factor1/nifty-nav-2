const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/niftyNav2.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'niftyNav2.js',
    library: 'niftyNav2',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map'
  },
  watchOptions: {
    ignored: ['./node_modules', './dist']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
            }
          ]
        })
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('niftyNav2.css')
  ]
}
