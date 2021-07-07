<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>
      {{ notification.message }}
      <span class="notification-dismiss" @click="manuallyDismiss">X</span>
    </p>
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
    return { timeout: null, automaticDismiss: true };
  },
  mounted() {
    if (!this.automaticDismiss) return;
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
  methods: {
    manuallyDismiss() {
      this.delete(this.notification);
    },
    ...mapActions("notification", ["delete"]),
  },
};
</script>

<style scoped>
.notification-bar {
  margin: 0 1em 1em;
  padding: 0.25em 0.5em;
  font-size: 0.75rem;
}
.text-success {
  background-color: greenyellow;
}
.text-error {
  background-color: red;
  color: white;
}

.notification-dismiss {
  background-color: black;
  color: white;
  border-radius: 10em;
}
</style>
