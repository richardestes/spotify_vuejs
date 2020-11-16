<template>
<div class="header">
  <div class="header-logo">
      <router-link to="/">SpotifyStats.io</router-link>
  </div>
  <div class="header-links">
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
.header-logo {
  display: flex;
  justify-content: start;
}
.header-links {
  display: flex;
  justify-content: end;
}
</style>