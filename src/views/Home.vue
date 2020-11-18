<template>
  <div class="main">
    <div id="nav">
      <Header />
    </div>
    <div id="profile">
      <button v-on:click="redirectToSpotify">Get Started</button>
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
  methods: {
    redirectToSpotify() {
      var clientId = '40babe1ec57c4ce8a664f8304f0da622';
      var state = this.generateState();
      var spotifyEndpoint = 'https://accounts.spotify.com/authorize';
      var responseType = 'token';
      // http://localhost:8080/#/ http://192.168.1.83:8081/#/ https://spotifystats.io/stats/#/
      var origin = window.location.origin;
      var redirectUri = origin + '/stats';
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
