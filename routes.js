var express = require('express');
var page = require('./page');

module.exports = function(app){
    app.get('/', function(req, res){
        res.send(page.homepage());
    });

    app.use('/static', express.static('static'));
    app.use('/fonts', express.static('fonts'));
    app.use('/images', express.static('images'))
};
