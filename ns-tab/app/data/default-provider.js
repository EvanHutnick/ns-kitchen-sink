var provider,
    TelerikBackendServices = require('../libs/everlive/everlive.all.min');

provider = new TelerikBackendServices({
    apiKey: 'e3akaflBGk6NU06s',
    scheme: 'https'
});

module.exports = provider;