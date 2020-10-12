<template>
  <div class="getStarted">
      <p class="landing-title">Friendify</p>
      <p class="landing-subtitle">Compare your Spotify listening <br> with your friends</p>
      <img src='../assets/21008-social-media-concept.gif'></img>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.landing-title {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 80px;
    color: #01007F;
    margin-bottom: 0%;
}
.landing-subtitle {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
