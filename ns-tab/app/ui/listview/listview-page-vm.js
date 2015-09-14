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
items.push(new VmItem("First", "This is the first item."));
items.push(new VmItem("Second", "This is the second item.  But the better one."));
items.push(new VmItem("Third", "This is the third and best item."));

var lItems = new observableArray.ObservableArray(items);

exports.listviewViewModel = new observable.Observable();
exports.listviewViewModel.set("listItems", lItems);
exports.listviewViewModel.set("selectedDetails", "(none selected)");