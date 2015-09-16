var observable = require("data/observable");            // observable, because viewmodel

exports.listpickerViewModel = new observable.Observable();
exports.listpickerViewModel.set("switchValue", false);
exports.listpickerViewModel.set("boundText", "Short Text Entry");
exports.listpickerViewModel.set("boundLongText", "This is a lot of text to show off the multi-line capabilities of TextView.  This is the main difference between TextField and TextView - Field is meant for a single, short entry, View is for when you think multiple lines will be necessary.");