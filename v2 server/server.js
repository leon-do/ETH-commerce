var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/buyer', function(req, res) {
    res.sendFile(path.join(__dirname + '/buyer.html'));
});

app.get('/cancel', function(req, res) {
    res.sendFile(path.join(__dirname + '/cancel.html'));
});

app.get('/address', function(req, res) {
    res.sendFile(path.join(__dirname + '/address.html'));
});

app.get('/seller', function(req, res) {
    res.sendFile(path.join(__dirname + '/seller.html'));
});

app.get('/buy', function(req, res) {
    res.sendFile(path.join(__dirname + '/buy.html'));
});

app.get('/recieve', function(req, res) {
    res.sendFile(path.join(__dirname + '/recieve.html'));
});

app.get('/sell', function(req, res) {
    res.sendFile(path.join(__dirname + '/sell.html'));
});



app.listen(8080);