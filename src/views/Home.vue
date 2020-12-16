<template>
  <div class="main">
    <h1>SpotifyStats.io</h1>
    <div class="getStartedContainer">
      <img v-bind:src="require('../assets/21008-social-media-concept.gif')" class="getStartedGif" />
      <button class="getStartedButton" v-on:click="redirectToSpotify">Get Started</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components : {
  },
  data() {
    return {
      token: '',
      gifPath: '../assets/21008-social-media-concept.gif',
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

<style lang="scss" scoped>
// @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

// figure {
//   margin-block-start: 0;
//   margin-block-end: 0;
//   margin-inline-start: 10px;
//   margin-inline-end: 0;
// }
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
  width: 13vw;
  padding-bottom: 40px;
  padding-top: 40px;
}
</style>
