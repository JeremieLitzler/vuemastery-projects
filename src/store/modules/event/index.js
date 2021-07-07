import EventService from "@/services/EventService";

export const namespaced = true;
export const state = {
  events: [],
  event: {},
  eventCount: 0,
  itemsPerPage: 3,
};

function dispatchSuccessNotification(dispatch) {
  const notif = {
    type: "success",
    message: `The event was saved`,
  };
  dispatch("notification/add", notif, { root: true });
}
function dispatchErrorNotification(source, dispatch, error) {
  const notif = {
    type: "error",
    message: `There was an error in ${source} => ${error.message}`,
  };
  dispatch("notification/add", notif, { root: true });
}

export const actions = {
  /**
   * Save a new event
   * @param {Object} param0 context object
   * @param {Object} event event to save
   */
  saveEvent({ commit, dispatch, rootState }, event) {
    console.log(`User ${rootState.user.user.name} is creating an event`);
    return EventService.postEvent(event).then(() => {
      //only commit if the backend has saved the data
      commit("ADD_EVENT", event);
      dispatchSuccessNotification(dispatch);
    });
  },
  fetchEvents({ commit, dispatch }, { page }) {
    // console.log(
    //   "Action fetchEvents => itemsPerPage",
    //   this.state.itemsPerPage,
    //   "; page:",
    //   page,
    // );
    //see https://vuejs.org/v2/api/#created
    EventService.getEvents(this.state.event.itemsPerPage, page)
      .then((response) => {
        // console.log("Action fetchEvents => events", response.data);
        if (response.headers) {
          commit("SET_EVENT_COUNT", response.headers["x-total-count"]);
        }
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        dispatchErrorNotification("fetchEvents", dispatch, error);
      });
  },
  fetchEvent({ commit, dispatch }, id) {
    EventService.getEvent(id)
      .then((response) => {
        commit("SET_EVENT", response.data);
      })
      .catch((error) => {
        dispatchErrorNotification("fetchEvent", dispatch, error);
      });
  },
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
  SET_EVENT_COUNT(state, count) {
    state.eventCount = count;
  },
  SET_CURRENT_PAGE(state, newPage) {
    state.currentPage = newPage;
  },
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
