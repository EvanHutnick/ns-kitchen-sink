var observable = require("data/observable");
var vm = require("./repeater-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.repeaterViewModel;
}
exports.pageLoaded = pageLoaded;

// Call the addItem function on the viewModel, since we have ObservableArray it auto-magically shows up in view.
function buttonTap(args) {
    console.log("Button tapped within repeater element.");

    // this shows what is bound to Button
    console.log(args.object.bindingContext);
}
exports.buttonTap = buttonTap;

function objectButtonTap(args) {
    console.log("Button tapped within repeater element, this time with object, so we can reference properties.");

    console.log(args.object.bindingContext.title + ", " + args.object.bindingContext.detail);
}
exports.objectButtonTap = objectButtonTap;
