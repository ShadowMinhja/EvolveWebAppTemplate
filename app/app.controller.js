//app.controller.js
app.controller = function () {
    var pages = app.PageList();
    return {
        pages: pages,
        rotate: function () {
            pages().push(pages().shift());
        }
    }
};