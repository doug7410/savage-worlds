// An example configuration file.
exports.config = {
  // chromeOnly: true,
  // chromeDriver: './node_modules/protractor/selenium/chromedriver',

  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  baseUrl: 'http://0.0.0.0:9000',
  
  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['test/e2e/**/*_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
