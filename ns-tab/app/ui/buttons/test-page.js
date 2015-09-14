var observable = require("data/observable");
var vm = require('./test-page-vm');
var counter = 0;

function pageLoaded(args) {
    var page = args.object;

    // re-set VM values here before we bind
    vm.buttonViewModel.set("text2", "Original");

    page.bindingContext = vm.buttonViewModel;
}
exports.pageLoaded = pageLoaded;

function buttonTap(args) {
    console.log("first button tapped");
    vm.buttonViewModel.set("isBusy", true);
}
exports.buttonTap = buttonTap;

function buttonTap2(args) {
    console.log("second button tapped");
    counter++;
    vm.buttonViewModel.set("text2", "Modified " + counter);
    vm.buttonViewModel.set("isBusy", false);
}
exports.buttonTap2 = buttonTap2;