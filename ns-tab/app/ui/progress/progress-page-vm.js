var observable = require("data/observable");            // observable, because viewmodel

exports.progressViewModel = new observable.Observable();
exports.progressViewModel.set("maxValue", 100);
exports.progressViewModel.set("currentValue", 0);

