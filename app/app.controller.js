//app.controller.js
app.controller = function () {
    this.pages = app.PageList();

    this.rotate = function () {
        this.pages().push(this.pages().shift())
    }.bind(this)

    this.loadLogin = function () {
        m.module(document.getElementById(activeViewId), login);
    }
};