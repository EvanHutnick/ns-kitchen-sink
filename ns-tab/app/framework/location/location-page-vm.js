var observable = require("data/observable");            // observable, because viewmodel

exports.locationViewModel = new observable.Observable();
exports.locationViewModel.set("isAvailable", false);
exports.locationViewModel.set("location", null);
exports.locationViewModel.set("locationButtonText", "Get Location");
exports.locationViewModel.set("latitude", "");
exports.locationViewModel.set("longitude", "");


