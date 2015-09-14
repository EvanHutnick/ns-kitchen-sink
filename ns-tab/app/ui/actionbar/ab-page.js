var observable = require("data/observable");
var counter = 0;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new observable.Observable();
}
exports.pageLoaded = pageLoaded;

function buttonTap(args) { 
    console.log("first button tapped");
}
exports.buttonTap = buttonTap;
