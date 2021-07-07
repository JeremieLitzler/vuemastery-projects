export const namespaced = true;
export const state = {
  notifications: [],
};

import { v4 as uuidv4 } from "uuid";
let nextId = uuidv4();

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId,
    });
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== notificationToRemove.id,
    );
  },
};

export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  delete({ commit }, notification) {
    commit("DELETE", notification);
  },
};
export const getters = {};
