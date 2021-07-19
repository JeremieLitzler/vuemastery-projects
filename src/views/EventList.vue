<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="event in event.events" :key="event.id" :event="event" />
    <event-list-paging :page="page" />
  </div>
</template>
<script>
import EventListPaging from "@/components/EventListPaging.vue";
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
import store from "@/store";
import ErrorHandler from "@/helpers/ErrorHandler";

function getPageEvents(to, next) {
  const currentPage = parseInt(to.query.page) || 1;
  store
    .dispatch("event/fetchEvents", {
      page: currentPage,
    })
    .then(() => {
      to.params.page = currentPage;
      next();
    })
    .catch((err) => {
      ErrorHandler.Handle404VsConnectivity(next, err, to);
    });
}
export default {
  components: {
    EventListPaging,
    EventCard,
  },
  props: { page: { type: Number, required: true } },
  computed: {
    ...mapState(["event", "user"]),
  },
  beforeRouteEnter(to, from, next) {
    getPageEvents(to, next);
  },
  beforeRouteUpdate(to, from, next) {
    getPageEvents(to, next);
  },
};
</script>
