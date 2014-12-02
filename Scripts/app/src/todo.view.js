/**
 * JSX version of the Mithril Getting Started documentation's TODO example.
 * http://lhorie.github.io/mithril/getting-started.html
 * @jsx m
 */
var m = require('../../mithril.js');
var todo = require('../models/todo.model.js');

todo.view = function (ctrl) {
    return <html>
        <body>
            <input  onchange={m.withAttr('value', ctrl.description)} value={ ctrl.description()}/>            
            <button onclick={ctrl.add}>Add</button>
            <table>            
                {ctrl.list.map(function (task, index) {
                    return <tr>
                        <td>
                            <input  type={'checkbox'} onclick={ m.withAttr('checked', task.done)} checked= {task.done()}/>            
                        </td>
                        <td style={{textDecoration: task.done() ? 'line-through' : 'none'}}>{task.description()}</td>
                    </tr>
                })}
            </table>
        </body>
    </html>
}
//Browserify Directives
module.exports = todo.view