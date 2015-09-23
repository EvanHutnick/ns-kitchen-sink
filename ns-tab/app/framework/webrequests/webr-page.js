var observable = require("data/observable");
var http = require("http");
var dialogs = require("ui/dialogs");
var vm = require("./webr-page-vm");

var baseUrl = "https://platform.telerik.com/bs-api/v1/e3akaflBGk6NU06s/Functions/";
var simple = "TalkBack?talk=";
var json = "JsonBack?toObject=";

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.webrViewModel;
}
exports.pageLoaded = pageLoaded;

function showAlert(title, message) {
    var options = {
        title: title,
        message: message,
        okButtonText: "Got It"
    };

    dialogs.alert(options);
}

function simpleResponse(args) {
    var url = baseUrl + simple + encodeURI(vm.webrViewModel.get("sendText"));
    http.getString(url)
        .then(function (r) {
            showAlert("String Received", r);
        },
        function (e) {
            showAlert("Error", "Error details: " + JSON.stringify(e));
        });
}
exports.simpleResponse = simpleResponse;

function jsonResponse(args) {
    var url = baseUrl + json + encodeURI(vm.webrViewModel.get("sendText"));
    http.getJSON(url)
        .then(function (r) {
            showAlert("JSON Received", JSON.stringify(r));
        },
        function (e) {
            showAlert("Error", "Error details: " + JSON.stringify(e));
        });
}
exports.jsonResponse = jsonResponse;