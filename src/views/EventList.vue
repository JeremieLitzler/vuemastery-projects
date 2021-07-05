<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="event in event.events" :key="event.id" :event="event" />
    <event-list-paging :current-page="currentPage" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import EventListPaging from "../components/EventListPaging.vue";
import EventCard from "../components/EventCard.vue";

export default {
  components: {
    EventListPaging,
    EventCard,
  },
  created() {
    this.fetchEvents({
      page: this.currentPage,
    });
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["event", "user"]),
  },
  methods: mapActions("event", ["fetchEvents"]), //using namespacing
};
</script>
