var express = require('express');
var logger = require('morgan');
var jade = require('jade');
// var template = jade.compileFile(__dirname + '/homepage.jade');
// var template2 = jade.compileFile(__dirname + '/test.jade');

var app = express();

// Routes
var routes = require('./routes')(app)

app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});