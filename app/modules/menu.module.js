var menu = {};

menu.Menu = function (data) {
};

menu.controller = function () {
};

menu.view = function () {
    return [
	m("li.active", [m("a[data-toggle='tab'][href='/home'][title='Go to Home. (H)']", { config: m.route }, "Home")]),
	m("li", [m("a[data-toggle='tab'][href='#profile'][id='Profile'][title='Go to Profile. (P)']", "Profile")]),
	m("li.disabled[id='Disabled'][title='Go to Disabled. (P)']", [m("a", "Disabled")]),
	m("li.dropdown", [
		m("a.dropdown-toggle[data-toggle='dropdown'][href='javascript:void(0)'][id='Dropdown'][title='Go to Dropdown. (D)']", [
			"\n                Dropdown ",
			m("span.caret")
		]),
		m("ul.dropdown-menu", [
			m("li", [m("a[data-toggle='tab'][href='#dropdown1']", "Action")]),
			m("li.divider"),
			m("li", [m("a[data-toggle='tab'][href='#dropdown2']", "Another action")])
		])
	]),
	m("li", [m("a[data-toggle='tab'][href='/todo']", {config: m.route}, "Todo App")])
    ];
}