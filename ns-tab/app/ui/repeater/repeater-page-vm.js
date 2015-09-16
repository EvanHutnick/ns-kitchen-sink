var observable = require("data/observable");                // observable, because viewmodel
var observableArray = require("data/observable-array");     // for listview, so we can add and remove items and have UI auto-magically update

var VmItem = (function () {
    function VmItem(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    return VmItem;
})();

// for basic binding
var items = ["DOS", "Windows", "Linux", "MacOS", "Bananas", "ENIAC", "Verbs", "Carrots", "Mission"];

var objectItems = [];
for (var i = 0; i < 10; i++) {
    objectItems.push(new VmItem("Item " + i, "Extra info for item " + i))
}

var oItems = new observableArray.ObservableArray(objectItems);

exports.repeaterViewModel = new observable.Observable();
exports.repeaterViewModel.set("repeaterItems", items);
exports.repeaterViewModel.set("repeaterObjectItems", oItems);
