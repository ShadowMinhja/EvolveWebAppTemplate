m.route($rootContainer, "/", {
    "/": app,
    "/profile": app,
    "/todo": todo
});

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

var profile = {
    controller: function () {
        this.id = m.route.param("userID");
    },
    view: function (controller) {
        return m("div");
    }
}
//setup routes to start w/ the `/` symbol
//m.route.mode = "hash";
m.route.mode = "pathname";

//define a route
m.route($rootContainer, "/profile/johndoe", {
    "/profile/:userID": dashboard
});