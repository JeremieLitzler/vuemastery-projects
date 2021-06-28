const EVENTS = [
  {
    id: 1,
    title: "Beach Cleanup",
    date: "Aug 28 2018",
    time: "10:00",
    location: "Daytona Beach",
    description: "Let's clean up this beach.",
    organizer: "Adam Jahr",
    category: "sustainability",
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr",
      },
      {
        id: "def456",
        name: "Gregg Pollack",
      },
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 2,
    title: "Park Cleanup",
    date: "Nov 12 2018",
    time: "12:00",
    location: "132 N Magnolia Street, Orlando, Florida",
    description: "We're going to clean up this park.",
    organizer: "Adam Jahr",
    category: "nature",
    attendees: [
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 3,
    title: "Pet Adoption Day",
    date: "Dec 2 2018",
    time: "12:00",
    location: "132 N Magnolia Street, Orlando, Florida",
    description: "Help animals find new homes.",
    organizer: "Gregg Pollack",
    category: "animal welfare",
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr",
      },
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 4,
    title: "Disco Party",
    date: "Aug 28 2018",
    time: "10:00",
    location: "Daytona Beach",
    description: "Let's clean up this beach.",
    organizer: "Adam Jahr",
    category: "sustainability",
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr",
      },
      {
        id: "def456",
        name: "Gregg Pollack",
      },
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 5,
    title: "Vue Users Group",
    date: "Nov 12 2018",
    time: "12:00",
    location: "132 N Magnolia Street, Orlando, Florida",
    description: "We're going to clean up this park.",
    organizer: "Adam Jahr",
    category: "nature",
    attendees: [
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 6,
    title: "Orlando Dev Meetup",
    date: "Dec 2 2018",
    time: "12:00",
    location: "132 N Magnolia Street, Orlando, Florida",
    description: "Help animals find new homes.",
    organizer: "Gregg Pollack",
    category: "animal welfare",
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr",
      },
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 7,
    title: "Yoga Class",
    date: "Aug 28 2018",
    time: "10:00",
    location: "Daytona Beach",
    description: "Let's clean up this beach.",
    organizer: "Adam Jahr",
    category: "sustainability",
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr",
      },
      {
        id: "def456",
        name: "Gregg Pollack",
      },
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 8,
    title: "Breathing Meditation",
    date: "Nov 12 2018",
    time: "12:00",
    location: "132 N Magnolia Street, Orlando, Florida",
    description: "We're going to clean up this park.",
    organizer: "Adam Jahr",
    category: "nature",
    attendees: [
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 9,
    title: "Dancing Class",
    date: "Dec 2 2018",
    time: "12:00",
    location: "132 N Magnolia Street, Orlando, Florida",
    description: "Help animals find new homes.",
    organizer: "Gregg Pollack",
    category: "animal welfare",
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr",
      },
      {
        id: "ghi789",
        name: "Beth Swanson",
      },
      {
        id: "jkl101",
        name: "Mary Gordon",
      },
    ],
  },
  {
    id: 10,
    category: "animal welfare",
    organizer: {
      user: {
        id: "abc123",
        name: "Adam Jahr",
      },
    },
    title: "Gregg's Event",
    description: "We'll do stuff",
    location: "Your House",
    date: "",
    time: "5:00",
    attendees: [],
  },
  {
    id: 11,
    category: "animal welfare",
    organizer: {
      user: {
        id: "abc123",
        name: "Adam Jahr",
      },
    },
    title: "Gregg's Event",
    description: "We'll do stuff",
    location: "Your House",
    date: "",
    time: "5:00",
    attendees: [],
  },
];

export default {
  getEvents(itemsPerPage, page, fakeReject = false) {
    return new Promise((resolve, reject) => {
      if (!fakeReject) {
        let start = 0;
        if (page > 1) start = (page - 1) * itemsPerPage;
        if (EVENTS.length < start) start = EVENTS.length - itemsPerPage;
        const end = itemsPerPage + start;

        // console.log(
        //   "EventService.Nobackend => itemsPerPage:",
        //   itemsPerPage,
        //   "page:",
        //   page,
        // );
        // console.log("EventService.Nobackend=>start:", start, "end:", end);
        resolve({
          data: EVENTS.slice(start, end),
          headers: { "x-total-count": EVENTS.length },
        });
      } else {
        reject(Error("Events not found!"));
      }
    });
  },
  getEvent(id) {
    return new Promise((resolve, reject) => {
      const matchingEvent = EVENTS.find((event) => event.id === id);
      if (matchingEvent) {
        resolve({ data: matchingEvent });
      } else {
        reject(Error("Event not found!"));
      }
    });
  },
  postEvent(event, fakeReject = false) {
    return new Promise((resolve, reject) => {
      EVENTS.push(event);
      if (!fakeReject) {
        resolve({ data: EVENTS });
      } else {
        reject(Error("Event not added!"));
      }
    });
  },
};
