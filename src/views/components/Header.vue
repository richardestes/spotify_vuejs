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
  font-size: calc(0.3rem + 1vw);
  padding-bottom: 5vh;
}
.header-logo-container {
  display: flex;
  justify-content: flex-start;
  width: 50vw;
}
.header-logo {
  text-decoration: none;
  color: #0E0E0E;
  font-weight: bold;
}
.header-links {
  display: flex;
  justify-content: flex-end;
  width: 50vw;
}
.header-links a{
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  color: #0E0E0E;
  font-weight: bold;
}
.header-links a:hover {
  color:  #FF3057;
}
</style>