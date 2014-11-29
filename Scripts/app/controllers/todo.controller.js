var m = require('../../mithril.js');
var todo = require('../models/todo.model.js');

todo.controller = function () {
    this.list = new todo.TodoList();
    this.description = m.prop("");

    this.add = function () {
        if (this.description()) {
            this.list.push(new todo.Todo({ description: this.description() }));
            this.description("");
        }
    }.bind(this);
}

//Browserify Directives
module.exports = todo.controller