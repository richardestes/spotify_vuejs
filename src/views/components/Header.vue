<template>
<div class="header">
  <div class="header-logo-container">
      <router-link to="/" class="header-logo">SpotifyStats.io</router-link>
  </div>
  <div class="header-links">
    <router-link to="/stats" class="header-link">Stats</router-link>
    <router-link to="/social" class="header-link">Social</router-link>
    <router-link to="/about" class="header-link">About</router-link>
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
.header-logo-container {
  display: flex;
  justify-content: start;
  width: 30vw;
}
.header-logo {
  text-decoration: none;
}
.header-links {
  display: flex;
  justify-content: end;
  width: 80vw;
}
.header-link{
  padding-left: 10px;
  text-decoration: none;
}
.header-link:hover {
  color: #FF3057;
}
</style>