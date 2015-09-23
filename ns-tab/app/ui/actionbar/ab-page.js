var observable = require("data/observable");
var vm = require("./ab-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.actionbarViewModel;
}
exports.pageLoaded = pageLoaded;

function actionTap(args) { 
    vm.actionbarViewModel.set("actionText", "Action Button Tapped, now in that event.");
}
exports.actionTap = actionTap;

function firstTap(args) {
    vm.actionbarViewModel.set("actionText", "First Button Tapped, now in that event.");
}
exports.firstTap = firstTap;

function secondTap(args) {
    vm.actionbarViewModel.set("actionText", "Second Button Tapped, now in that event.");
}
exports.secondTap = secondTap;
