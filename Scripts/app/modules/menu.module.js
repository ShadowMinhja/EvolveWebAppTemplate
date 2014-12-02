var m = require('../../mithril.js');
var menu = {}

menu.Menu = function (data) {
}

menu.controller = function () {
}

menu.view = function () {
    return [
        [m(".main", [            
		        m("ul.tile-grid.clearfix[id='tile-grid']", [
			        m("li.tile.icon-clima-2", [
				        m("h3", "Register"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-1", { onclick: function () { window.location = '/#/home'; } }, [
				        m("h3", "Dashboard"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-4", [
				        m("h3", "Admin"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-1", { onclick: function () { window.location = '/#/todo';} }, [
				        m("h3", "todo"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-1.tile-span-2", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-1", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-2", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-11", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-2", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-2.tile-span-2", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ]),
			        m("li.tile.icon-clima-4.tile-span-4", [
				        m("h3"),
				        m("span.tile-temp"),
				        m(".tile-overlay", [
					        m("span.tile-close", "close")
				        ])
			        ])
		        ])
        ])]
    ];
}

//Browserify Directives
module.exports = menu