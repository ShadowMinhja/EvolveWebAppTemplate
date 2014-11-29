process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1
// Start loading the main app file. Put all of
// your application logic in there.
var $ = jQuery = require('./kendo/2014.3.1119/jquery.min.js');
var m = require('./mithril.js');
//require('./bootstrap.min.js');
require("./ripples.min.js");
require("./material.min.js");
require('./kendo/2014.3.1119/kendo.web.min.js');
require('./jquery.hotkeys.js');
require('./velocity.js');
require('./core.js');
require('./layout.js');
require('./controls.js');
//        <!-- Top level Mithril References -->
require('./app/modules/clearscreen.module.js');
require('./app/app.route.js');

$(document).ready(function () {
    $.material.init();
});