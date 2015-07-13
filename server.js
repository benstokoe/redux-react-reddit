var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var Venue = require('./server/models/Venue.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  next();
});

app.get('/api/venues', function(req, res) {
  Venue.find(function(err, venues) {
    if (err)
      res.send(err);

    res.json(venues);
  });
});

var server = app.listen(3001, function () {

  mongoose.connect('mongodb://localhost/do-they-speak-english');

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
