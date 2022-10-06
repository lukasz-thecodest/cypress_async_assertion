const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '63rnoq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
