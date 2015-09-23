var observable = require("data/observable");
var vm = require('./button-page-vm');
var counter = 0;

function pageLoaded(args) {
    var page = args.object;

    // re-set VM values here before we bind
    vm.buttonViewModel.set("buttonText", "I modify my databound text!");
    counter = 0;

    page.bindingContext = vm.buttonViewModel;
}
exports.pageLoaded = pageLoaded;

function indicatorToggle(args) {
    var newBusy = !vm.buttonViewModel.get("isBusy");
    vm.buttonViewModel.set("isBusy", newBusy);
}
exports.indicatorToggle = indicatorToggle;

function modifyButton(args) {
    counter++;
    vm.buttonViewModel.set("buttonText", "Modified " + counter);
}
exports.modifyButton = modifyButton;