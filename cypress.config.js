const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportHeight: 938,
    viewportWidth: 1520,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
