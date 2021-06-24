const EVENTS = [
  {
    id: 5928101,
    user: {
      id: 'abc123',
      name: 'Adam',
    },
    category: 'animal welfare',
    organizer: 'Adam',
    title: 'Cat Cabaret',
    description: 'Yay felines!',
    location: 'Meow Town',
    date: '2019-01-03T21:54:00.000Z',
    time: '2:00',
    attendees: [],
  },
  {
    id: 8419988,
    user: {
      id: 'abc123',
      name: 'Adam',
    },
    category: 'animal welfare',
    organizer: 'Adam',
    title: 'Kitty Cluster',
    description: 'Yay cats!',
    location: 'Catlandia',
    date: '2019-01-31T22:09:00.000Z',
    time: '7:00',
    attendees: [],
  },
  {
    id: 4582797,
    user: {
      id: 'abc123',
      name: 'Adam',
    },
    category: 'animal welfare',
    organizer: 'Adam',
    title: 'Puppy Parade',
    description: 'Yay pups!',
    location: 'Puptown ',
    date: '2019-02-02T23:27:00.000Z',
    time: '1:00',
    attendees: [],
  },
];

export default {
  getEvents(fakeReject = false) {
    return new Promise((resolve, reject) => {
      if (!fakeReject) {
        resolve({ data: EVENTS });
      } else {
        reject(Error('Events not found!'));
      }
    });
  },
  getEvent(id) {
    return new Promise((resolve, reject) => {
      const matchingEvent = EVENTS.find((event) => event.id === id);
      if (matchingEvent) {
        resolve({ data: matchingEvent });
      } else {
        reject(Error('Event not found!'));
      }
    });
  },
  postEvent(event, fakeReject = false) {
    return new Promise((resolve, reject) => {
      EVENTS.push(event);
      if (!fakeReject) {
        resolve({ data: EVENTS });
      } else {
        reject(Error('Event not added!'));
      }
    });
  },
};
