var express = require('express');
var logger = require('morgan');
var jade = require('jade');

// Start the Express app
var app = express();

// Routes
var routes = require('./routes')(app)

// Start listening for requests
app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
