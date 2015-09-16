var timer = require("timer");
var observable = require("data/observable");
var vm = require("./progress-page-vm");

var mV;
var t = null;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.progressViewModel;
}
exports.pageLoaded = pageLoaded;

function startProgress(args) {
    // set our cap value to accessible variable
    mV = vm.progressViewModel.get("maxValue");
    vm.progressViewModel.set("currentValue", 0);

    // create a repeating timer to jump our progress value
    t = timer.setInterval(function () {
        var cV = vm.progressViewModel.get("currentValue");
        var nV = cV + 5;
        console.log("new: " + nV + ", max: " + mV);
        if (Number(nV) >= Number(mV)) {
            console.log(">=!!!");
            timer.clearInterval(t);
        } else {
            vm.progressViewModel.set("currentValue", nV);
        }
    }, 500);
    //vm.progressViewModel.set("currentValue", 5); // zero-based index, so fourth = 3
}
exports.startProgress = startProgress;
