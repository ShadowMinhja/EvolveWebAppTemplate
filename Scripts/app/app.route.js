var m = require('../mithril.js');
var app = require('./app.model.js');
var settings = require('./app.settings.js');
var body = require('./modules/body.module.js');
var leftmenu = require('./modules/leftmenu.module.js');
var rightmenu = require('./modules/rightmenu.module.js');
var clearscreen = require('./modules/clearscreen.module.js');
var todo = require('./models/todo.model.js');

m.route.mode = "hash";

//setup routes for main content to start w/ the `/` symbol
m.route(settings.rootContainer, "/", {
    "/": body,
    "/home": app,
    "/profile": app,
    "/todo": todo
});

//Set up side menus
m.module(settings.leftMenu, leftmenu);
m.module(settings.rightMenu, rightmenu);

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