//#region Keyboard Shortcuts
    jQuery(document).bind('keypress', 'd', function (event) {
        $("#Dropdown").trigger("click");
    });
    jQuery(document).bind('keypress', 'h', function (event) {
        $("#hitme").trigger("click");
    });
    jQuery(document).bind('keypress', 'y', function (event) {
        $("#yes").trigger("click");
    });
    jQuery(document).bind('keypress', 'n', function (event) {
        $("#no").trigger("click");
    });
    jQuery(document).bind('keypress', 'm', function (event) {
        $("#maybe").trigger("click");
    });
//#endregion Keyboard Shortcuts