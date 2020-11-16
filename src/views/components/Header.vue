<template>
<div class="header">
  <router-link to="/">SpotifyStats.io</router-link>
  <router-link to="/stats">Stats</router-link>
  <router-link to="/social">Social</router-link>
  <router-link to="/about">About</router-link>
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