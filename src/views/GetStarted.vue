<template>
  <div class="getStarted">
      <p class="landing-title">Friendify</p>
      <p class="landing-subtitle">Compare your Spotify listening <br> with your friends</p>
        <LottieAnimation path="./assets/21008-social-media-concept.json" :speed="1" :width="256" :height="256"></LottieAnimation>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components :{
      LottieAnimation
  }
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
