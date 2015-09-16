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

function submitSearch(args) {
    console.log(args.object.text);

    var searchText = args.object.text.toLowerCase();

    var sA = vm.listpickerViewModel.get("listItems");
    var res;

    for (var i = 0; i < sA.length; i++) {
        // contains-style search, not case sensitive
        var s = sA[i].toLowerCase();
        if (s.indexOf(searchText) > -1) {
            vm.listpickerViewModel.set("selectedIndex", i);
            break;
        }
    }
}
exports.submitSearch = submitSearch;

function clearSearch(args) {
    console.log("search cleared, not much to do here unless we were doing filtering of a list or somesuch. :)");
}
exports.clearSearch = clearSearch;