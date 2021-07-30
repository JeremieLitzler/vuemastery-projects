<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="saveEvent">
      <base-select
        class="field"
        label="Select a category"
        :options="categories"
        :selected="option === value"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>
      <base-input
        class="field"
        label="Title"
        type="text"
        placeholder="Add an event title"
        v-model="event.title"
      />
      <base-input
        class="field"
        label="Description"
        type="text"
        placeholder="Add a description"
        v-model="event.description"
      />
      <h3>Where is your event?</h3>
      <base-input
        class="field"
        label="Location"
        type="text"
        placeholder="Add a location"
        v-model="event.location"
      />
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <base-select
        class="field"
        label="Select a time"
        :options="times"
        :selected="option === value"
        v-model="event.time"
      />
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import Datepicker from "vuejs-datepicker";
import { v4 as uuidv4 } from "uuid";
import NProgress from "nprogress";
import BaseSelect from "../components/BaseSelect.vue";
import BaseInput from "../components/BaseInput.vue";

export default {
  components: { Datepicker, BaseSelect, BaseInput },
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
