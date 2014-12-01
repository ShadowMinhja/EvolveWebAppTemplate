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

    m("nav.left-menu", [
		m("ul", [
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-home.fa-2x"),
					m("span.nav-text", "Dashboard")
				])
			]),
			m("li.has-subnav", [
				m("a[href='#']", [
					m("i.fa.fa-laptop.fa-2x"),
					m("span.nav-text", "UI Components")
				])
			]),
			m("li.has-subnav", [
				m("a[href='#']", [
					m("i.fa.fa-list.fa-2x"),
					m("span.nav-text", "Forms")
				])
			]),
			m("li.has-subnav", [
				m("a[href='#']", [
					m("i.fa.fa-folder-open.fa-2x"),
					m("span.nav-text", "Pages")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-bar-chart-o.fa-2x"),
					m("span.nav-text", "Graphs and Statistics")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-font.fa-2x"),
					m("span.nav-text", "Typography and Icons")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-table.fa-2x"),
					m("span.nav-text", "Tables")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-map-marker.fa-2x"),
					m("span.nav-text", "Maps")
				])
			]),
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-info.fa-2x"),
					m("span.nav-text", "Documentation")
				])
			])
		]),
		m("ul.logout", [
			m("li", [
				m("a[href='#']", [
					m("i.fa.fa-power-off.fa-2x"),
					m("span.nav-text", "Logout")
				])
			])
		])
    ]),
	m("nav.cbp-spmenu.cbp-spmenu-vertical.cbp-spmenu-right[id='right-menu']", [
		m("h3", "Menu"),
		m("a[href='#']", "Register"),
		m("a[href='#']", "Administration")
	]),
	m(".fa.fa-cog.fa-2x.right-menu-button[id='right-menu-button']")

    ];
}



