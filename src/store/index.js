import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user";
import * as event from "@/store/modules/event";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    categoryCount: (state) => {
      return state.categories.length;
    },
  },
  modules: { user, event },
});
