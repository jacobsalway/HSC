var jade = require('jade');

module.exports = {
    homepage: function(){
        var homepage_template = jade.renderFile(__dirname + '/source/homepage.jade');
        return homepage_template;
    }
};