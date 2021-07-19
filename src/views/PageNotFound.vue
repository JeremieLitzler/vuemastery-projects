<template>
  <div>
    <h1>Oops</h1>
    <p>
      Wrong way...
      <router-link :to="{ name: 'event-list' }" class="brand"
        >Try this way!</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
