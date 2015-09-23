var observable = require("data/observable");
var camera = require("camera");
var fs = require("file-system");
var imageSource = require("image-source");
var enums = require("ui/enums");
var dialogs = require("ui/dialogs");
var vm = require("./camera-page-vm");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vm.cameraViewModel;
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

function takePicture(args) {
    camera.takePicture().then(function (picture) {
        console.log("Picture done!");

        // save record of ImageSource here, we can then use that to save it to a file!
        vm.cameraViewModel.set("savedImage", picture);
        vm.cameraViewModel.set("hasTakenPicture", true);
    });
}
exports.takePicture = takePicture;

function savePicture(args) {
    // grab reference to our ImageSource
    var img = vm.cameraViewModel.get("savedImage");

    // get documents folder, build path
    var folder = fs.knownFolders.documents();
    var path = fs.path.join(folder.path, vm.cameraViewModel.get("imageName") + ".png");

    var saved = img.saveToFile(path, enums.ImageFormat.png);
    console.log(saved + " (true means we got picture");
    showAlert("Success", "Picture saved successfully as " + vm.cameraViewModel.get("imageName") + ".png");
}
exports.savePicture = savePicture;

function loadPicture(args) {
    // ditto, build up folder path for loading
    var folder = fs.knownFolders.documents();
    var path = fs.path.join(folder.path, vm.cameraViewModel.get("imageName") + ".png");

    // create an ImageSource based on the above path/fileAlso j
    var img = imageSource.fromFile(path);
    
    if (img) {
        vm.cameraViewModel.set("savedImage", img);
        showAlert("Success", "Successfully loaded picture.  Check it out! :)");
    } else {
        console.log("no image found with that name.");
        showAlert("Error", "No image found with the given name.  Be sure to check capitalization and look for typos.");
    }
}
exports.loadPicture = loadPicture;