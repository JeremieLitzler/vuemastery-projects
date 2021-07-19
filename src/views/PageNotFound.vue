<template>
  <div>
    <h1>Oops</h1>
    <p>
      The
      <em
        >{{ resource }} <i>{{ value }}</i></em
      >
      was not found
      <router-link :to="{ name: 'event-list' }" class="brand"
        >Try this way!</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
