var observable = require("data/observable");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new observable.Observable();
}
exports.pageLoaded = pageLoaded;
