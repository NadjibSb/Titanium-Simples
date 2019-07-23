// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var navManager = require("/navigationManager");

var data = [];

for (var i = 0; i < 10; i++) {
    data.push({
        title: "Title "+i,
        subTitle: "Sub Title "+i
    });
}

Titanium.API.info(data);

$.section.items = data;
