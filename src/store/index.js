import Vue from 'vue';
import Vuex from 'vuex';

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
  },
  mutations: {},
  actions: {},
  getters: {
    categoryCount: (state) => {
      return state.categories.length;
    },
  },
  modules: {},
});
