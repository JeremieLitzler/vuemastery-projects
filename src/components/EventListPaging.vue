<template>
  <div>
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
import { mapState } from "vuex";

export default {
  props: ["current-page"],
  computed: {
    showPagingPrev() {
      // console.table({"eventCount": this.event.eventCount, "itemsPerPage": this.event.itemsPerPage, "currentPage": })
      return (
        this.event.eventCount < this.event.itemsPerPage ||
        this.currentPage !== 1
      );
    },
    showPagingNext() {
      return this.event.eventCount > this.currentPage * this.event.itemsPerPage;
    },
    ...mapState(["event"]),
  },
};
</script>

<style scoped></style>
