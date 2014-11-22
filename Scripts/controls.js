//***********************
//#region Kendo UI Controls
//***********************
var notificationRightPos = 30;
var notificationTopPos = 30;

var controls = {};
//#region Notification Messages
function getDialogCriticality(message) {
    if (message.toLowerCase().indexOf('success') > 0) {
        return "Success";
    } else if (message.toLowerCase().indexOf('error') > 0) {
        return "Error";
    } else if (message.toLowerCase().indexOf('fail') > 0) {
        return "Error";
    } else {
        return "Warning";
    }
}

controls.showNotification = function (messageText, titleText, mode, timeOut, posRight, posTop, appendTo) {
    var appendTarget = appendTo;
    if (typeof (notificationHandle) == "undefined") {
        notificationHandle = $("#notificationSpan").kendoNotification({
            "position": { "right": posRight, "top": posTop },
            "autoHideAfter": timeOut,
            "stacking": "down",
            "templates": [
                { "type": "error", "templateId": "errorTemplate" },
                { "type": "warning", "templateId": "warningTemplate" },
                { "type": "success", "templateId": "successTemplate" }
            ]
        });
    }
    var notification = $("#notificationSpan").data("kendoNotification");
    notification.show({
        message: messageText,
        title: titleText,
    }, mode.toLowerCase());
}
//#endregion Notification Messages

//#region Popup Dialog
function PopupDialog(mute) {
    this.mute = mute;

    this.show = function (e, messageText, titleText, confirmCallback, cancelCallback) {
        var dfd = new $.Deferred(); //Promise object to perform actions based on user input        

        if (this.mute == false && e != null) {
            if (!e.preventDefault) {
                e = $.event.fix(e);
            }
            e.preventDefault();
        }

        if (messageText != null) {
            $("#modal-confirmation").html("<div class=\"confirmContent\"><p class=\"modal-message\">" + messageText + "</p><button class=\"modal-confirm k-button\">Yes</button>&nbsp;<button class=\"modal-cancel k-button\">No</button></div>");
        }
        var kendoWindow = $("<div />").kendoWindow({
            width: 400,
            //height: 120,
            title: titleText,
            resizable: false,
            modal: true
        });

        if (this.mute == false || this.mute == undefined) {
            kendoWindow.data("kendoWindow")
                .content($("#modal-confirmation").html())
                .center().open();

            kendoWindow.find(".modal-confirm,.modal-cancel").click(function () {
                if ($(this).hasClass("modal-confirm")) {
                    dfd.resolve(true);
                    if (e != null) {
                        e.currentTarget.click();
                    }
                    else {
                        if (confirmCallback !== undefined && confirmCallback != null) {
                            confirmCallback();
                        }
                    }
                }
                if ($(this).hasClass("modal-cancel")) {
                    if (cancelCallback !== undefined && cancelCallback != null) {
                        cancelCallback();
                    }
                    dfd.resolve(false);
                }
                kendoWindow.data("kendoWindow").close();
            });
        }
        else {
            if (confirmCallback !== undefined && confirmCallback != null) {
                confirmCallback();
            }
            dfd.resolve(false);
        }
        return dfd.promise(); //Returns a promise
    }
}
//#endregion Popup Dialog Section

//***********************
//#endregion 
//***********************