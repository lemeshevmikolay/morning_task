const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 960,
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    setupNodeEvents(on, config) {
    },
  },
});
