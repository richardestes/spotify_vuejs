<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/stats">Stats</router-link>
    <router-link to="/social">Social</router-link>
    <router-link to="/about">About</router-link>
    <hr>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
