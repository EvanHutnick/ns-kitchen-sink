var dataService = require('./default-provider');

function Service() { }

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.getAllRecords = function (args) {
    var expandExp,
        data = dataService.data('DemoData');

    expandExp = {

    };

    return data.get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

function onAddSuccess(data) {
    data.result.response = "success";
    return data.result;
}

function onAddFail(error) {
    error.response = "error";
    return error;
}

Service.prototype.addRecord = function (demoItem) {
    var data = dataService.data('DemoData');

    return data.create(demoItem)
        .then(onAddSuccess.bind(this))
        .catch(onAddFail.bind(this));
};

module.exports = new Service();