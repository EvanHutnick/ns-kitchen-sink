var observable = require("data/observable");            // observable, because viewmodel

var MenuItem = (function () {
    function MenuItem(display, navtarget) {
        this.display = display;
        this.navtarget = navtarget;
    }
    return MenuItem;
})();

var widgets = [];
widgets.push(new MenuItem("Buttons", "./ui/buttons/button-page"));
widgets.push(new MenuItem("Action Bar", "./ui/actionbar/ab-page"));
widgets.push(new MenuItem("Dialogs", "./ui/dialogs/d-page"));
widgets.push(new MenuItem("HTML/WebViews", "./ui/html/html-page"));
widgets.push(new MenuItem("Images", "./ui/image/image-page"));
widgets.push(new MenuItem("Inputs", "./ui/inputs/inputs-page"));
widgets.push(new MenuItem("List Picker/SearchBar", "./ui/listpicker/listpicker-page"));
widgets.push(new MenuItem("ListView", "./ui/listview/listview-page"));
widgets.push(new MenuItem("Progress/Slider", "./ui/progress/progress-page"));
widgets.push(new MenuItem("Repeater", "./ui/repeater/repeater-page"));

var framework = [];
framework.push(new MenuItem("Camera", "./framework/camera/camera-page"));
framework.push(new MenuItem("Web Request/Response", "./framework/webrequests/webr-page"));
framework.push(new MenuItem("Location", "./framework/location/location-page"));
framework.push(new MenuItem("Platform Data", "./framework/platformdata/pd-page"));

exports.mainViewModel = new observable.Observable();
exports.mainViewModel.set("widgets", widgets);
exports.mainViewModel.set("framework", framework);

