export default {
  categoryCount: (state) => {
    return state.categories.length;
  },
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
  itemsPerPage: (state) => {
    console.log("Getter itemsPerPage =>", state.itemsPerPage);
    return state.itemsPerPage;
  },
};
