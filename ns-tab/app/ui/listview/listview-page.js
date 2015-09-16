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

// Call the addItem function on the viewModel, since we have ObservableArray it auto-magically shows up in view.
function addListItem(args) {
    vm.addItem("New Item", "With some new details, too!");
}
exports.addListItem = addListItem;

// Normally you use this for loading more items from remote source, etc.  Try flicking up fast, it'll keep scrolling and scrolling. :)
function loadMoreItems(args) {
    vm.createItems();
}
exports.loadMoreItems = loadMoreItems;