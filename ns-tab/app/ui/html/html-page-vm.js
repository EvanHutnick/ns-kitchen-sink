var observable = require("data/observable");            // observable, because viewmodel

exports.htmlViewModel = new observable.Observable();
exports.htmlViewModel.set("html", "<h1>I'm a header!</h1>");
exports.htmlViewModel.set("newHtml", "");
exports.htmlViewModel.set("newUrl", "");
exports.htmlViewModel.set("webSrc", "http://www.bing.com");