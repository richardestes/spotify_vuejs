<template>
  <div class="main">
    <div id="nav">
      <Header />
    </div>
    <div class="getStartedContainer">
      <img v-bind:src="require('../assets/21008-social-media-concept.gif')" class="getStartedGif" />
      <button class="getStartedButton" v-on:click="redirectToSpotify">Get Started</button>
    </div>
  </div>
</template>

<script>
import Header from '../views/components/Header'

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components : {
    Header
  },
  data() {
    return {
      token: '',
      gifPath: '../assets/21008-social-media-concept.gif'
    }
  },
  methods: {
    redirectToSpotify() {
      var clientId = '40babe1ec57c4ce8a664f8304f0da622';
      var state = this.generateState();
      var spotifyEndpoint = 'https://accounts.spotify.com/authorize';
      var responseType = 'token';
      // http://localhost:8080/#/ http://192.168.1.83:8081/#/ https://spotifystats.io/stats/#/
      var origin = window.location;
      var redirectUri = encodeURIComponent(origin + 'stats'); // Use this with hash mode on
      var scopes = 'user-read-private playlist-read-private user-library-read user-top-read user-read-recently-played'
      var requestUrl = spotifyEndpoint + '?client_id=' + clientId + '&response_type=' + responseType + '&redirect_uri=' + redirectUri + '&scope=' + scopes + '&state=' + state;
      window.location = requestUrl;
      return;
    },
    generateState() {
        var length = 16;
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
  },
  created() {
    this.token = localStorage.getItem('token');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFFFFF;
}
.getStartedButton {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color:  #FF3057;
  border-radius: 10px;
  border: none;
  width: 60vw;
  height: 10vh;
  color:white;
  /* Adjust the following values, it's just
   * going to be trial and error: */
  padding: 0.25rem 0.35rem;
  font-size: calc(1rem + 1vw);
  position:absolute;
  bottom:40px;
}
.getStartedContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.getStartedGif {
  width: 30vw;
  padding-bottom: 40px;
}
</style>
