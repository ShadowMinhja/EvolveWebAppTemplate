﻿//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

//m.route(document.getElementById("mainWindow"), "", {
//    "": app,
//    "home": app,
//    "about":login
//});

///////////////////////////////
//a sample module
var dashboard = {
    controller: function () {
        this.id = m.route.param("userID");
    },
    view: function (controller) {
        return m("div", controller.id);
    }
}

//setup routes to start w/ the `#` symbol
//m.route.mode = "hash";

//define a route
//m.route(document.body, "/dashboard/johndoe", {
//    "/dashboard/:userID": dashboard
//});