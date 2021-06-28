import EventService from "@/services/EventService";

const actions = {
  /**
   * Save a new event
   * @param {Object} param0 context object
   * @param {Object} event event to save
   */
  saveEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      //only commit if the backend has saved the data
      commit("ADD_EVENT", event);
    });
  },
  fetchEvents({ commit }, { itemsPerPage, page }) {
    //see https://vuejs.org/v2/api/#created
    EventService.getEvents(itemsPerPage, page)
      .then((response) => {
        console.log("events", response.data);
        if (response.headers) {
          commit("SET_EVENT_COUNT", response.headers["x-total-count"]);
        }
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default actions;
