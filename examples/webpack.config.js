var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, '/__build__'),
    filename: 'bundle.js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)/, exclude: /node_modules/, loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'ne-treeview': path.join(__dirname, '..', 'src')
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
