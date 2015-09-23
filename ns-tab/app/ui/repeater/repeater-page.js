var observable = require("data/observable");
var dialogs = require("ui/dialogs");
var vm = require("./repeater-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.repeaterViewModel;
}
exports.pageLoaded = pageLoaded;

function showAlert(message) {
    var options = {
        title: "Item Clicked",
        message: message,
        okButtonText: "Got It"
    };

    dialogs.alert(options);
}

// Call the addItem function on the viewModel, since we have ObservableArray it auto-magically shows up in view.
function buttonTap(args) {
    console.log("Button tapped within repeater element.");

    // this shows what is bound to Button
    console.log(args.object.bindingContext);
    showAlert(args.object.bindingContext);
}
exports.buttonTap = buttonTap;

function objectButtonTap(args) {
    console.log("Button tapped within repeater element, this time with object, so we can reference properties.");
    var result = "Item clicked: " + args.object.bindingContext.title + ", " + args.object.bindingContext.detail;
    console.log(result);
    showAlert(result);
}
exports.objectButtonTap = objectButtonTap;
