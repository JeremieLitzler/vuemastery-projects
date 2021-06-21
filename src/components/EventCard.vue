<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-details', params: { id: eventEntity.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow"
        >@{{ eventEntity.time }} on {{ eventEntity.date }}</span
      >
      <h2 class="title">{{ eventEntity.title }}</h2>
      <BaseIcon name="users">{{ totalAttendees }} attending</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    eventEntity: Object,
  },
  computed: {
    totalAttendees() {
      return this.eventEntity.attendes ? this.eventEntity.attendes.length : 0;
    },
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
