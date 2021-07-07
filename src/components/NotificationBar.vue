<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { timeout: null };
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.delete(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    //prevent a memory leak if the notification is dismissed manually via a closer icon
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `text-${this.notification.type}`;
    },
  },
  methods: mapActions("notification", ["delete"]),
};
</script>

<style scoped>
.notification-bar {
  margin: 0;
  padding: 0.25em 0.5em;
  font-size: 1rem;
}
.text-success {
  background-color: greenyellow;
}
.text-error {
  background-color: red;
  color: white;
}
</style>
