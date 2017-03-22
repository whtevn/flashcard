const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = ( process.env.NODE_ENV || 'staging' );
const api_loc = env === 'production' ? 'api.js' : 'api.staging.js';

module.exports = {

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      'api': path.resolve(__dirname, './src/globals/'+api_loc)
    }
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'CSR App',
      filename: 'index.html',
      template: 'src/index.html.ejs'
    }),
    new webpack.ProvidePlugin({
      'api': 'api'
    })
  ],

  module: {
    loaders: [{
      test: /^[^spec\.)].*\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
