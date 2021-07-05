// import Vue from "vue";
// import Vuex from "vuex";

// import kactions from "@/store/modules/event/actions";
//  import getters from "@/store/modules/event/getters";
//  import mutations from "@/store/modules/event/mutations";
import EventService from "@/services/EventService";

//Vue.use(Vuex);

//export default new Vuex.Store({

export const state = {
  events: [],
  eventCount: 0,
  itemsPerPage: 3,
};

export const actions = {
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
  fetchEvents({ commit }, { page }) {
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
        console.error(error);
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
