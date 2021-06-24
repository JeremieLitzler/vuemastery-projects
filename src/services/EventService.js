import axios from 'axios';
import EventServiceNoBackend from '@/services/EventService.Nobackend';

const noBackend = true;

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return noBackend
      ? EventServiceNoBackend.getEvents()
      : apiClient.get('/events');
  },
  getEvent(id) {
    return noBackend
      ? EventServiceNoBackend.getEvent(id)
      : apiClient.get(`/events/${id}`);
  },
  postEvent(event) {
    return noBackend
      ? EventServiceNoBackend.postEvent(event)
      : apiClient.post('/events', event);
  },
};
