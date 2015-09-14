var observable = require("data/observable");
var vm = require("./html-page-vm");
var counter = 0;

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
