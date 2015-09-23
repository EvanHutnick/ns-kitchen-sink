var observable = require("data/observable");            // observable, because viewmodel

exports.platformdataAddViewModel = new observable.Observable();
exports.platformdataAddViewModel.set("Title", "");
exports.platformdataAddViewModel.set("Description", "");


