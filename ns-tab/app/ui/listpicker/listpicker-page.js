var observable = require("data/observable");
var vm = require("./listpicker-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.listpickerViewModel;
}
exports.pageLoaded = pageLoaded;

function pickFour(args) {
    vm.listpickerViewModel.set("selectedIndex", 3); // zero-based index, so fourth = 3
}
exports.pickFour = pickFour;
