import axios from "axios";
import EventServiceNoBackend from "@/services/EventService.Nobackend";

const noBackend = true;

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  /**
   *
   * @param {*} itemsPerPage Number of items per page to retrieve
   * @param {*} page The page number
   * @returns {Array} The events filtered
   */
  getEvents(itemsPerPage, page) {
    // console.log("EventService=>No backend use: ", noBackend);
    return noBackend
      ? EventServiceNoBackend.getEvents(itemsPerPage, page)
      : apiClient.get(`/events?_limit=${itemsPerPage}&_page=${page}`);
  },
  /**
   * Read an event
   * @param {*} id The event identifier
   * @returns {Object}
   */
  getEvent(id) {
    return noBackend
      ? EventServiceNoBackend.getEvent(id)
      : apiClient.get(`/events/${id}`);
  },
  /**
   * Save the event
   * @param {Object} event The event to save
   * @returns {Promise}
   */
  postEvent(event) {
    return noBackend
      ? EventServiceNoBackend.postEvent(event)
      : apiClient.post("/events", event);
  },
};
