<template>
<div class="header">
  <div class="d-flex justify-content-start">
      <router-link to="/">SpotifyStats.io</router-link>
  </div>
  <div class="d-flex justify-content-end">
      <router-link to="/stats">Stats</router-link>
    <router-link to="/social">Social</router-link>
    <router-link to="/about">About</router-link>
  </div>
</div>
</template>

<script>
export default {
  name : "Header",
}
</script>

<style scoped>
.header {
  display: flex;
}
</style>