module.exports = {
  pages: {
    index: {
      entry: "./src/main.js",
      title: "Events list",
      description: "Events list",
      template: "public/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    },
    eventCreate: {
      entry: "./src/views/EventCreate.vue",
      title: "Create an event",
      description: "Form to create a new event",
      template: "public/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    },
    eventDetails: {
      entry: "./src/views/EventDetails.vue",
      title: "Event",
      description: "Details of the event",
      template: "public/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    },
  },
};
