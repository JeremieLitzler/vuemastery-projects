import EventService from "@/services/EventService";

const actions = {
  /**
   * Save a new event
   * @param {Object} param0 context object
   * @param {Object} event event to save
   */
  saveEvent({ commit, rootState }, event) {
    console.log(`User ${rootState.user.user.name} is creating an event`);
    return EventService.postEvent(event).then(() => {
      //only commit if the backend has saved the data
      commit("ADD_EVENT", event);
    });
  },
  fetchEvents({ commit }, { page }) {
    // console.log(
    //   "Action fetchEvents => itemsPerPage",
    //   this.state.itemsPerPage,
    //   "; page:",
    //   page,
    // );
    //see https://vuejs.org/v2/api/#created
    EventService.getEvents(this.state.itemsPerPage, page)
      .then((response) => {
        // console.log("Action fetchEvents => events", response.data);
        if (response.headers) {
          commit("SET_EVENT_COUNT", response.headers["x-total-count"]);
        }
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  fetchEvent({ commit }, id) {
    EventService.getEvent(id)
      .then((response) => {
        commit("SET_EVENT", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default actions;
