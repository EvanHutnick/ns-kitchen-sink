var observable = require("data/observable");                // observable, because viewmodel
var observableArray = require("data/observable-array");     // for listview, so we can add and remove items and have UI auto-magically update

var VmItem = (function () {
    function VmItem(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    return VmItem;
})();

var items = [];
for (var i = 0; i < 10; i++) {
    items.push(new VmItem("Title " + i, "This title "))
}

var lItems = new observableArray.ObservableArray(items);

// add one item to array
var addItem = function (title, detail) {
    var aL = lItems.length + 1;
    var nT = title + " " + aL;
    lItems.push(new VmItem(nT, detail));
}
exports.addItem = addItem;

// hooked to loadMoreItems event on ListView, generates items when last list item is visible.
var createItems = function () {
    var aL = lItems.length;
    var cT = aL + 5;

    for (var aL; aL < cT; aL++) {
        lItems.push(new VmItem("Load More Items #" + aL, "Some item details for " + aL));
    }
}
exports.createItems = createItems;

exports.listviewViewModel = new observable.Observable();
exports.listviewViewModel.set("listItems", lItems);
exports.listviewViewModel.set("selectedDetails", "(none selected)");