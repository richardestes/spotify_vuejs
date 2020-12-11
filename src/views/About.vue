<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <h2>About</h2>
    <img v-bind:src="require('../assets/cassette_still.gif')" class="aboutImage" />
    <h3>Spotify stats are refreshed daily</h3>
  </div>
</template>

<script>
import Header from '../views/components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      token: ''
    }
  },
  created() {
    this.token = localStorage.getItem('token');
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-content: center;
  background-color: #FFFFF9;
}
.aboutImage {
  width: 30vw;
  align-self: center;
}
</style>