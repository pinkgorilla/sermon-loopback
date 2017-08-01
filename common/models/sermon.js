'use strict';
var app = require('../../server/server');

module.exports = function(Sermon) {

    Sermon.observe("before save", (context, next) => {
        var data = context.instance;

        data.second = data.duration % 60;
        data.minute = (data.duration - data.second) / 60;
        next();
    });
};
