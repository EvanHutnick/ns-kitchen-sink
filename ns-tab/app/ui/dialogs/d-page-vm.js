var observable = require("data/observable");            // observable, because viewmodel

exports.dialogsViewModel = new observable.Observable();
exports.dialogsViewModel.set("confirmChoice", undefined);       // set a value we can bind to
exports.dialogsViewModel.set("actionChoice", "(none selected)");           // for activity indicator