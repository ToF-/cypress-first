const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    'cypress-cucumber-preprocessor': {
        nonGlobalDefinitions: false,
        step_definitions: './cypress/support',
    },
  e2e: {
    setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber());
        return require('./plugins/index.js')(on,config)
    },
    specPattern: "**/*feature"

  },
});
