var menu = {};

menu.Menu = function (data) {
};

menu.controller = function () {
};

menu.view = function () {
    return [
	//m("li.active", [m("a[data-toggle='tab'][href='/home'][title='Go to Home. (H)']", { config: m.route }, "Home")]),
	//m("li", [m("a[data-toggle='tab'][href='#profile'][id='Profile'][title='Go to Profile. (P)']", "Profile")]),
	//m("li.disabled[id='Disabled'][title='Go to Disabled. (P)']", [m("a", "Disabled")]),
	//m("li.dropdown", [
	//	m("a.dropdown-toggle[data-toggle='dropdown'][href='javascript:void(0)'][id='Dropdown'][title='Go to Dropdown. (D)']", [
	//		"\n                Dropdown ",
	//		m("span.caret")
	//	]),
	//	m("ul.dropdown-menu", [
	//		m("li", [m("a[data-toggle='tab'][href='#dropdown1']", "Action")]),
	//		m("li.divider"),
	//		m("li", [m("a[data-toggle='tab'][href='#dropdown2']", "Another action")])
	//	])
	//]),
	//m("li", [m("a[data-toggle='tab'][href='/todo']", {config: m.route}, "Todo App")])

[m(".main", [
		m("ul.tile-grid.clearfix[id='tile-grid']", [
			m("li.tile.icon-clima-2[onclick=location.href='/todo']", {config: m.route}, "Todo App" [
				m("h3", "Register"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-1", [
				m("h3", "Dashboard"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-4", [
				m("h3", "Admin"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-1", [
				m("h3", "todo"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-1.tile-span-2", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-1", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-2", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-11", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-2", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-2.tile-span-2", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			]),
			m("li.tile.icon-clima-4.tile-span-4", [
				m("h3"),
				m("span.tile-temp"),
				m(".tile-overlay", [
					m("span.tile-close", "close")
				])
			])
		])
])]



    ];
}

