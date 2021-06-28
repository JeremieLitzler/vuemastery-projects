import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

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
  mutations,
  actions,
  getters,
  modules: {},
});
