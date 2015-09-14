var observable = require("data/observable");            // observable, because viewmodel

exports.buttonViewModel = new observable.Observable();
exports.buttonViewModel.set("text2", "Original");       // set a value we can bind to
exports.buttonViewModel.set("isBusy", false);           // for activity indicator
