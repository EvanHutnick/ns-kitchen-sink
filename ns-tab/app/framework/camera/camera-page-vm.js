var observable = require("data/observable");            // observable, because viewmodel

exports.cameraViewModel = new observable.Observable();
exports.cameraViewModel.set("maxValue", 100);
exports.cameraViewModel.set("currentValue", 0);
exports.cameraViewModel.set("savedImage", "~/images/server_room_small.jpg");
exports.cameraViewModel.set("hasTakenPicture", false);
exports.cameraViewModel.set("imageName", "Test");

