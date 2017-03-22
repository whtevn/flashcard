var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'api': path.resolve(__dirname, './src/globals/api.js')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'api': 'api'
    }),
    new HtmlWebpackPlugin({
      title: 'Flashcard Duel',
      filename: 'index.html',
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    },
	  {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass'],
      include: __dirname,
      exclude: /node_modules/
		} ]
  }
}
