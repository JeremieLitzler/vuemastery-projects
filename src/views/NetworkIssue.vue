<template>
  <div>
    <h1>Oops</h1>
    <p>
      It seems you are having connectivity issues...
      <router-link :to="{ name: 'event-list' }" class="brand"
        >Go back home!</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
