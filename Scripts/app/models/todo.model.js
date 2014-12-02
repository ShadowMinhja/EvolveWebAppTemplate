var m = require('../../mithril.js');
var todo = {}

todo.Todo = function (data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
}

todo.TodoList = Array;

//Browserify Directives
module.exports = todo; //<-- This export has to be before the requires for todo.controller, because todo.controller relies on todo module (circular dependency)

todo.controller = require('../controllers/todo.controller.js');

todo.view = require('../views/todo.view.js');