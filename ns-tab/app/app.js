var application = require("application");
application.mainModule = "main-page";

application.on(application.launchEvent, function (args) {
    console.log("launchEvent");

    if (args.android) {
        console.log("this is android");
    } else {
        console.log("not android");
    }
});

application.cssFile = "./app.css";
application.start();
