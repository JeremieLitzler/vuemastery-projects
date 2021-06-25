<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link
      v-if="showPagingPrev"
      :to="{ name: 'event-list', query: { page: currentPage - 1 } }"
      rel="prev"
      >Previous page</router-link
    >
    <span v-if="showPagingNext && showPagingPrev"> | </span>
    <router-link
      v-if="showPagingNext"
      :to="{ name: 'event-list', query: { page: currentPage + 1 } }"
      rel="prev"
      >Nex page</router-link
    >
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      itemsPerpage: 3,
    };
  },
  created() {
    console.log('itemPerPage:', this.itemsPerpage, 'page:', this.currentPage);
    this.$store.dispatch('fetchEvents', {
      itemsPerpage: this.itemsPerpage,
      page: this.currentPage,
    });
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    showPagingPrev() {
      return this.currentPage !== 1;
    },
    showPagingNext() {
      console.log(
        'eventCount=',
        this.eventCount,
        'this.currentPage * this.itemsPerpage=',
        this.currentPage * this.itemsPerpage,
      );
      return this.eventCount > this.currentPage * this.itemsPerpage;
    },
    ...mapState(['events', 'eventCount']),
  },
};
</script>
