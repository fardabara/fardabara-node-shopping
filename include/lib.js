var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')();
var routes = require('../routes/appRoute')(app);


module.exports = {

    express : express,
    port : port,
    app : app,
    http : http,
    path : path,
    bodyParser : bodyParser,
    cookieParser : cookieParser,
    routes : routes

};