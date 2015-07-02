var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    mongoose.connect('mongodb://localhost/do-they-speak-english');

    console.log('Listening at localhost:3000');
});

app.get('/api/hello', function(req, res) {
    res.send('hello');
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
