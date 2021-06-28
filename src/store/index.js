import Vue from "vue";
import Vuex from "vuex";
// import actions from "./actions";
// import getters from "./getters";
// import mutations from "./mutations";

Vue.use(Vuex);

import EventService from "@/services/EventService.Nobackend.js";
export default new Vuex.Store({
  state: {
    user: {
      name: "Jeremie L.",
      id: "jeremiel",
    },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    events: [],
    eventCount: 0,
    itemsPerPage: 3,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT_COUNT(state, count) {
      console.log("eventCount", count);
      state.eventCount = count;
    },
    SET_CURRENT_PAGE(state, newPage) {
      state.currentPage = newPage;
    },
  },
  actions: {
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
      console.log(
        "Action fetchEvents => itemsPerPage",
        this.state.itemsPerPage,
        "; page:",
        page,
      );
      //see https://vuejs.org/v2/api/#created
      EventService.getEvents(this.state.itemsPerPage, page)
        .then((response) => {
          console.log("Action fetchEvents => events", response.data);
          if (response.headers) {
            commit("SET_EVENT_COUNT", response.headers["x-total-count"]);
          }
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    categoryCount: (state) => {
      return state.categories.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
  modules: {},
});
