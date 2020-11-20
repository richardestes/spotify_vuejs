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
  padding: 10px;
  color: #2c3e50;
  font-size: 1.4vw;
  padding-bottom: 10vh;
}
.header-logo-container {
  display: flex;
  justify-content: start;
  width: 30vw;
}
.header-logo {
  text-decoration: none;
  color: #0E0E0E;
  font-weight: bold;
}
.header-links {
  display: flex;
  justify-content: end;
  width: 80vw;
}
.header-links a{
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  color: #0E0E0E;
  font-weight: bold;
}
.header-links a:hover {
  color:  #FF3057;
}
</style>