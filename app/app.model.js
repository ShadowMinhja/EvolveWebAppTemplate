//app.model.js
var app = {};

var pagesList = [{ "title": "Getting Started", "url": "getting-started.html" },
    { "title": "Documentation", "url": "mithril.html" },
    { "title": "Mithril Blog", "url": "http://lhorie.github.io/mithril-blog/" },
    { "title": "Mailing List", "url": "https://groups.google.com/forum/#!forum/mithriljs" }
];

app.PageList = function () {
    return pagesList;
};
