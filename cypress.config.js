const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/Pages/*.js',
    specPattern: 'cypress/integration/AccountCenter/*.js',
    specPattern: 'cypress/integration/Spark/*.js'
    
    
    
    
  },
});
