var m = require('../mithril.js');
var app = require('./app.model.js');
var settings = require('./app.settings.js');
var menu = require('./modules/menu.module.js');
var todo = require('./models/todo.model.js');

m.route.mode = "hash";

//setup routes to start w/ the `/` symbol
m.route(settings.rootContainer, "/", {
    "/": menu,
    "/home": app,
    "/profile": app,
    "/todo": todo
});

///////////////////////////////
//a sample module
//var dashboard = {
//    controller: function () {
//        this.id = m.route.param("userID");
//    },
//    view: function (controller) {
//        return m("div", controller.id);
//    }
//}

//var profile = {
//    controller: function () {
//        this.id = m.route.param("userID");
//    },
//    view: function (controller) {
//        return m("div");
//    }
//}

//define a route
//m.route($rootContainer, "/profile/johndoe", {
//    "/profile/:userID": dashboard
//});