var observable = require("data/observable");
var vm = require("./listview-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.listviewViewModel;
}
exports.pageLoaded = pageLoaded;

function listItemTap(args) {
    console.log(args.index);

    // bindingContext is our object from VM, so has properties title & detail
    console.log(args.view.bindingContext.title);

    vm.listviewViewModel.set("selectedDetails", args.view.bindingContext.detail);
}
exports.listItemTap = listItemTap;
