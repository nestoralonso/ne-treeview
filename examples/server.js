/* eslint-disable no-console, no-var */
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var WebpackConfig = require('./webpack.config');

var app = express();
console.log(__dirname);
app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}));

app.listen(8080, function() {
  console.log('Server listening on 💀 ⚡ http://localhost:8080 ⚡ 💀, Ctrl+C to stop');
});
