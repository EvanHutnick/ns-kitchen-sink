var observable = require("data/observable");            // observable, because viewmodel

var items = ["First", "Second", "Third", "Fourth"];

exports.listpickerViewModel = new observable.Observable();
exports.listpickerViewModel.set("listItems", items);
exports.listpickerViewModel.set("selectedIndex", 0);