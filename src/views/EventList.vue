<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="event in event.events" :key="event.id" :event="event" />
    <event-list-paging :current-page="currentPage" />
  </div>
</template>
<script>
import { mapState } from "vuex";

import EventListPaging from "../components/EventListPaging.vue";
import EventCard from "../components/EventCard.vue";

export default {
  components: {
    EventListPaging,
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents", {
      page: this.currentPage,
    });
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["event", "user"]),
  },
};
</script>
