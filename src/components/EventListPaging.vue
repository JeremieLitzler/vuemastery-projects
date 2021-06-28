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
      return this.eventCount < this.itemsPerPage || this.currentPage !== 1;
    },
    showPagingNext() {
      return this.eventCount > this.currentPage * this.itemsPerPage;
    },
    ...mapState(["eventCount", "itemsPerPage"]),
  },
};
</script>

<style scoped></style>
