var observable = require("data/observable");            // observable, because viewmodel

exports.actionbarViewModel = new observable.Observable();
exports.actionbarViewModel.set("actionText", "No ActionBar items clicked... yet!");       // set a value we can bind to

