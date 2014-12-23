var m = require('../../mithril.js');
var rightmenu = {}

rightmenu.rightmenu = function (data) {
}

rightmenu.controller = function () {
}

rightmenu.view = function () {
    return [
		m("h3", "Menu"),
		m("a[href='#']", "Register"),
		m("a[href='#']", "Administration")
    ];
}

//Browserify Directives
module.exports = rightmenu