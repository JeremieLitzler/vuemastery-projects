<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    notificationTypeClass() {
      return `text-${this.notification.type}`;
    },
  },
};
</script>

<style scoped>
.notification-bar {
  margin: 0;
  padding: 0.25em 0.5em;
}
.text-success {
  background-color: greenyellow;
}
.text-error {
  background-color: red;
  color: white;
}
</style>
