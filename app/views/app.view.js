//app.view.js
app.view = function (ctrl) {
	return [
		//ctrl.PageList().map(function (page) {
		//	return m("a", { href: page.url }, page.title);
		//}),
		m("button", { onclick: ctrl.rotate }, "Rotate links")
	];
};