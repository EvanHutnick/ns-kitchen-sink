var observable = require("data/observable");
var frames = require("ui/frame");               // for navigation

function pageLoaded(args) {
    var page = args.object;
    var emptyContext = new observable.Observable();
    page.bindingContext = emptyContext;
}
exports.pageLoaded = pageLoaded;

function tabTap(args) {
    frames.topmost().navigate("./ui/buttons/test-page");
}
exports.tabTap = tabTap;

function actionBarTap(args) {
    frames.topmost().navigate("./ui/actionbar/ab-page");
}
exports.actionBarTap = actionBarTap;

function dialogsTap(args) {
    frames.topmost().navigate("./ui/dialogs/d-page");
}
exports.dialogsTap = dialogsTap;

function htmlTap(args) {
    frames.topmost().navigate("./ui/html/html-page");
}
exports.htmlTap = htmlTap;

function imageTap(args) {
    frames.topmost().navigate("./ui/image/image-page");
}
exports.imageTap = imageTap;

function listpickerTap(args) {
    frames.topmost().navigate("./ui/listpicker/listpicker-page");
}
exports.listpickerTap = listpickerTap;

function listviewTap(args) {
    frames.topmost().navigate("./ui/listview/listview-page");
}
exports.listviewTap = listviewTap;

function progressTap(args) {
    frames.topmost().navigate("./ui/progress/progress-page");
}
exports.progressTap = progressTap;