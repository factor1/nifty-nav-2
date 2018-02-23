const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/js/niftyNav2.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'niftyNav2.js',
    library: 'niftyNav2',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
