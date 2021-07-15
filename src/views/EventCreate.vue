<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="saveEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import Datepicker from "vuejs-datepicker";
import { v4 as uuidv4 } from "uuid";
import NProgress from "nprogress";

export default {
  components: { Datepicker },
  data() {
    const times = [];
    for (let index = 1; index < 24; index++) {
      times.push(`${index}:00`);
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.scaffoldEventObject(),
    };
  },
  methods: {
    saveEvent() {
      NProgress.start();
      this.$store
        .dispatch("event/saveEvent", this.event)
        .then(() => {
          //only continue if the action worked
          this.$router.push({
            name: "event-details",
            params: { id: this.event.id },
          });
          this.event = this.scaffoldEventObject();
        })
        .catch(() => {
          NProgress.done();
        });
    },
    scaffoldEventObject() {
      const user = this.$store.state.user.user;
      const eventId = uuidv4();
      console.log(eventId);
      return {
        id: eventId,
        user,
        category: "",
        organizer: user,
        title: "test",
        description: "test",
        location: "france",
        date: "",
        time: "",
        attendees: [],
      };
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 2em;
}
</style>
