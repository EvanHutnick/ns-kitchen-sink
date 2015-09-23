var observable = require("data/observable");
var service = require("../../data/demoitem-service");
var frames = require("ui/frame");
var vm = require("./pd-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.platformdataViewModel;

    service.getAllRecords()
        .then(function (result) {
            vm.platformdataViewModel.set("demoItems", result);
        });
}
exports.pageLoaded = pageLoaded;

function addItem(args) {
    frames.topmost().navigate("./framework/platformdata/pd-add-page");
}
exports.addItem = addItem;