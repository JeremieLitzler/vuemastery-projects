import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.Nobackend';

Vue.use(Vuex);

// import EventService from '@/services/EventService.Nobackend.js';
export default new Vuex.Store({
  state: {
    user: {
      name: 'Jeremie L.',
      id: 'jeremiel',
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    /**
     * Save a new event
     * @param {Object} param0 context object
     * @param {Object} event event to save
     */
    saveEvent({ commit }, event) {
      return EventService.postEvent(event).then(() =>
        //only commit if the backend has saved the data
        commit('ADD_EVENT', event),
      );
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
