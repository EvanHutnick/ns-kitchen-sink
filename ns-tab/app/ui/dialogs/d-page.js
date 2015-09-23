var observable = require("data/observable");
var dialogs = require("ui/dialogs");
var vm = require("./d-page-vm");

// local variables
var title = "Action Choice";
var cancelText = "Cancel";

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.dialogsViewModel;
}
exports.pageLoaded = pageLoaded;

function tapAction(args) {
    var options = {
        title: title,
        message: "Pick an action, any action",
        cancelButtonText: cancelText,
        actions: ["Sink", "Swim", "Float"]
    };

    dialogs.action(options).then(function (result) {
        console.log("Action dialog result:");

        // result will be string value from actions array
        vm.dialogsViewModel.set("actionChoice", result);
    });
}
exports.tapAction = tapAction;

function tapConfirm(args) {
    var options = {
        title: title,
        message: "Positive about " + vm.dialogsViewModel.get("actionChoice") + "?",
        okButtonText: "Sure!",
        cancelButtonText: "Um, no",
        neutralButtonText: cancelText
    };

    dialogs.confirm(options).then(function (result) {
        console.log("Confirm dialog result:");

        // true - yes, false - no, undefined - cancel
        vm.dialogsViewModel.set("confirmChoice", result);
    });
}
exports.tapConfirm = tapConfirm;

function tapAlert(args) {
    var message = "";
    var c = vm.dialogsViewModel.get("confirmChoice");

    if (c === undefined || !c) {
        message = "It is not confirmed!";
    } else {
        message = "It is confirmed!";
    }

    var options = {
        title: title,
        message: message,
        okButtonText: "Cool!"
    };

    dialogs.alert(options).then(function () {
        console.log("Alert complete, nothing else to really do here. XD");
    });
}
exports.tapAlert = tapAlert;

function tapLogin(args) {
    // not sure how this one works...

    var options = {
        title: "Login",
        message: "Login",
        username: "demo_user",
        password: "",
        okButtonText: "Login",
        cancelButtonText: cancelText
    };

    dialogs.login(options).then(function (loginResult) {
        console.log("Login Result:");
        console.log(JSON.stringify(loginResult));
        if (loginResult.result) {
            vm.dialogsViewModel.set("loginResult", "Logging in (u: " + loginResult.userName + " / p: " + loginResult.password + ")");
        } else {
            vm.dialogsViewModel.set("loginResult", "Cancelled");
        }
    });
}
exports.tapLogin = tapLogin;

function tapPrompt(args) {
    var options = {
        title: "Secret Agent Name",
        message: "Enter a secret agent name",
        inputType: dialogs.inputType.text,
        okButtonText: "Ok!",
        cancelButtonText: cancelText
    };

    dialogs.prompt(options).then(function (result) {
        console.log("Prompt Result:")
        console.log(JSON.stringify(result));
        if (result.result) {
            vm.dialogsViewModel.set("promptResult", result.text);
        } else {
            vm.dialogsViewModel.set("promptResult", result.result + " (means cancelled)");
        }
    });
}
exports.tapPrompt = tapPrompt;
