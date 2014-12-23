var m = require('../../mithril.js');
var leftmenu = {}

leftmenu.LeftMenu = function (data) {
}

leftmenu.controller = function () {
}

leftmenu.view = function () {
    return [
		m("ul", [
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-home.fa-2x"),
					m("span.nav-text", "Dashboard")
				])
			]),
			m("li.has-subnav", [
				m("a[href='#']", [
					m("i.fa.fa-laptop.fa-2x"),
					m("span.nav-text", "UI Components")
				])
			]),
			m("li.has-subnav", [
				m("a[href='#']", [
					m("i.fa.fa-list.fa-2x"),
					m("span.nav-text", "Forms")
				])
			]),
			m("li.has-subnav", [
				m("a[href='#']", [
					m("i.fa.fa-folder-open.fa-2x"),
					m("span.nav-text", "Pages")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-bar-chart-o.fa-2x"),
					m("span.nav-text", "Graphs and Statistics")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-font.fa-2x"),
					m("span.nav-text", "Typography and Icons")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-table.fa-2x"),
					m("span.nav-text", "Tables")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-map-marker.fa-2x"),
					m("span.nav-text", "Maps")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-info.fa-2x"),
					m("span.nav-text", "Documentation")
				])
			])
		]),
		m("ul.logout", [
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-power-off.fa-2x"),
					m("span.nav-text", "Logout")
				])
			])
		])
    ];
}

//Browserify Directives
module.exports = leftmenu