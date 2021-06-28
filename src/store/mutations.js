export default {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT_COUNT(state, count) {
    console.log('eventCount', count);
    state.eventCount = count;
  },
  SET_CURRENT_PAGE(state, newPage) {
    state.currentPage = newPage;
  },
};
