var observable = require("data/observable");
var dialogs = require("ui/dialogs");
var vm = require("./html-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.htmlViewModel;
}
exports.pageLoaded = pageLoaded;

function convertTap(args) {
    var n = vm.htmlViewModel.get("newHtml");

    // logic to confirm, we assume it is good

    vm.htmlViewModel.set("html", n);
}
exports.convertTap = convertTap;

function urlGo(args) {
    // handle everything via binding, this also lets us do any operations we want before sending the url to WebView
    vm.htmlViewModel.set("webSrc", vm.htmlViewModel.get("newUrl"));
}
exports.urlGo = urlGo;

function webFinished(args) {
    // we get url and error items as a result
    if (args.error) {
        var options = {
            title: "Error",
            message: args.error,
            okButtonText: "Ok"
        };

        dialogs.alert(options).then(function () {
            // nothing to do here yet, user has been alerted
        });
    } else {
        console.log("Url: " + args.url);
    }
}
exports.webFinished = webFinished;
