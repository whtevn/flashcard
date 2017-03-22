var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'api': path.resolve(__dirname, '../src/globals/api.js')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'api': 'api'
    }),
    new HtmlWebpackPlugin({
      title: 'Flashcard Dueler',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../src/')
    },
	  {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass'],
      include: __dirname,
      exclude: /node_modules/
		} ]
  }
}
