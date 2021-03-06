﻿//app.view.js
var m = require('../../mithril.js');
var app = require('../app.model.js');
var Controls = require('../../controls.js');
controls = new Controls();

app.view = function (ctrl) {
    return [
	m(".jumbotron", [
		m("h1", "ASP.NET"),
		m("p.lead", "ASP.NET is a free web framework for building great Web sites and Web applications using HTML, CSS, and JavaScript."),
		m("p", [
            [m("button.btn.btn-primary.btn-lg[id='hitme']", { onclick : function () { new controls.PopupDialog().show(null, 'Are you sure you want to continue?', 'Confirmation Needed', function () { alert('You pressed Yes ^^');}, function () { alert('You pressed No TT');});} }, "Hit Me!"), "\n",
             m("button.btn.btn-primary.btn-lg[id='yes']", { onclick: function () { controls.showNotification('YES!!', 'Just a Test', 'Success', 5000, 30, 30, null); } }, "Yes"), "\n",
             m("button.btn.btn-primary.btn-lg[id='no']", { onclick: function () { controls.showNotification('NO!!', 'Just a Test', 'Error', 5000, controls.notificationRightPos, controls.notificationTopPos, null); } }, "No"), "\n",
             m("button.btn.btn-primary.btn-lg[id='maybe']", { onclick: function () { controls.showNotification('MAYBE SO...', 'Just a Test', 'Warning', 5000, controls.notificationRightPos, controls.notificationTopPos, null); } }, "Maybe So")]
		])
	]),
	m(".row", [
		m(".col-md-4", [
			m("h2", "Your information"),
			m("p", "This section shows how you can call ASP.NET Web API to get the user details."),
			m("p[data-bind='text: myHometown']"),
			m("p", [m("a.btn.btn-default[href='http://go.microsoft.com/fwlink/?LinkId=273732']", "Learn more »")])
		]),
		m(".col-md-4", [
			m("h2", "Getting started"),
			m("p", "\n                    ASP.NET Single Page Application (SPA) helps you build applications that include significant client-side interactions using HTML, CSS, and JavaScript.\n                    It's now easier than ever before to getting started writing highly interactive web applications.\n                "),
			m("p", [m("a.btn.btn-default[href='http://go.microsoft.com/fwlink/?LinkId=273732']", "Learn more »")])
		]),
		m(".col-md-4", [
			m("h2", "Web Hosting"),
			m("p", "You can easily find a web hosting company that offers the right mix of features and price for your applications."),
			m("p", [m("a.btn.btn-default[href='http://go.microsoft.com/fwlink/?LinkId=301867']", "Learn more »")])
		])
	])
    ];
}

//Browserify Directives
module.exports = app.view