<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>by {{ user.id }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
    <p>There is {{ categoryCount }} categorie(s).</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['categoryCount']),
    ...mapState(['user', 'categories']),
  },
};
</script>

<style scoped></style>
