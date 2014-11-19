/**
 * JSX version of the Mithril Getting Started documentation's TODO example.
 * http://lhorie.github.io/mithril/getting-started.html
 * @jsx m
 */
todo.view = function (ctrl) {
    return m("html", [
        m("body", [
            m("input",  {onchange:m.withAttr('value', ctrl.description), value: ctrl.description()}),            
            m("button", {onclick:ctrl.add}, ["Add"]),
            m("table", [            
                ctrl.list.map(function (task, index) {
                    return m("tr", [
                        m("td", [
                            m("input",  {type:'checkbox', onclick: m.withAttr('checked', task.done)})            
                        ])
                    ])
                })
            ])
        ])
    ])
};