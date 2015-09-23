var observable = require("data/observable");
var vm = require("./main-page-vm");
var frames = require("ui/frame");               // for navigation

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.mainViewModel;
}
exports.pageLoaded = pageLoaded;

function listItemTap(args) {
    frames.topmost().navigate(args.view.bindingContext.navtarget);
}
exports.listItemTap = listItemTap;