var observable = require("data/observable");
var service = require("../../data/demoitem-service");
var frames = require("ui/frame");
var vm = require("./pd-add-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.platformdataAddViewModel;
}
exports.pageLoaded = pageLoaded;

function addItem(args) {
    var newItem = {
        Title: vm.platformdataAddViewModel.get("Title"),
        Description: vm.platformdataAddViewModel.get("Description")
    };

    service.addRecord(newItem)
        .then(function (result) {
            if (result.response === "success") {
                frames.topmost().goBack();
            } else {
                alert(result.message);
            }
        });
}
exports.addItem = addItem;