const EVENTS = [
  {
    id: "b95504d5-c9b3-4ada-a998-6a4beadf72b3",
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
    id: "529425aa-6837-46b0-a797-f83cd1a2c884",
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
    id: "de1bdd02-dd20-4aaa-bd13-19a8a815936a",
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
    id: "86a1292c-261b-4d41-9364-8b43ff1bfbb6",
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
    id: "12530610-8c11-4f0c-a5a3-beb3bdac0419",
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
    id: "ee4753db-df4d-435b-8c72-a9186d810711",
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
    id: "1c426171-9c57-4091-88b8-76e76af7b2a0",
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
    id: "f7bab5ff-2e35-4266-8110-bc6cbde3ac9b",
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
    id: "2f682b13-90d3-4985-b1ca-7c87fa540415",
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
    id: "ed353f92-0d1e-4539-b1af-c140a0614b53",
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
    id: "c7c1142f-6a1c-4040-b8eb-fd623675e65e",
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

        setTimeout(() => {
          //Similate API process time
          resolve({
            data: EVENTS.slice(start, end),
            headers: { "x-total-count": EVENTS.length },
          });
        }, 2000);
      } else {
        reject(Error("Events not found!"));
      }
    });
  },
  getEvent(id) {
    return new Promise((resolve, reject) => {
      console.table(EVENTS);
      console.log("id", id);
      const matchingEvent = EVENTS.find((event) => event.id === id);
      console.log(matchingEvent);
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
