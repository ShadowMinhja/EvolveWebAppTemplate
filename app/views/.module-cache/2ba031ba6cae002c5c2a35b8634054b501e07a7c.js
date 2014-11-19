todo.view = function (ctrl) {
    return <html>
        <body>
            <input  onchange={m.withAttr('value', ctrl.description)} value={ ctrl.description()}/>            
            <button onclick={ctrl.add}>Add</button>
            <table>            
            </table>
        </body>
    </html>
};