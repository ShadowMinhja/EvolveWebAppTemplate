var m = require('../../mithril.js');
var rightmenu = {}
var Layout = require('../../layout.js');
layout = new Layout();

rightmenu.rightmenu = function (data) {
}

rightmenu.controller = function () {
}

rightmenu.view = function () {
    return [
        m("nav.cbp-spmenu.cbp-spmenu-vertical.cbp-spmenu-right[id='right-menu-body']", [
		    m("h3", "Menu"),
		    m("a[href='#']", "Register"),
		    m("a[href='#']", "Administration")
        ]),
        m("div.fa.fa-cog.fa-2x.right-menu-button[id='right-menu-button']", { onclick: function () { layout.menuRightButtonClick(this, 'right-menu-body'); } }, "")
    ];
}

//Browserify Directives
module.exports = rightmenu