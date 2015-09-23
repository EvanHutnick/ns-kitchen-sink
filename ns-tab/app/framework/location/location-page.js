var observable = require("data/observable");
var locationModule = require("location");
var LocationManager = require("location").LocationManager;
var vm = require("./location-page-vm");

var locationManager = new LocationManager();
var isRunning = false;

function pageLoaded(args) {
    var page = args.object;
    vm.locationViewModel.set("isAvailable", LocationManager.isEnabled());
    page.bindingContext = vm.locationViewModel;
}
exports.pageLoaded = pageLoaded;

function getLocation(args) {
    if (!isRunning) {
        isRunning = true;
        vm.locationViewModel.set("locationButtonText", "Stop Location Service");
        locationManager.startLocationMonitoring(function (location) {
            console.log(JSON.stringify(location));
            vm.locationViewModel.set("latitude", location.latitude);
            vm.locationViewModel.set("longitude", location.longitude);
        }, function (error) {
            console.log(error);
            isRunning = false;
        });
    } else {
        isRunning = false;
        vm.locationViewModel.set("locationButtonText", "Get Location");
        locationManager.stopLocationMonitoring();
    }
}
exports.getLocation = getLocation;
