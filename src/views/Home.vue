<template>
  <div class="get-started-main">
  </div>
</template>

<script>

import Header from "/components/Header"

export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    redirectToSpotify() {
      var clientId = '40babe1ec57c4ce8a664f8304f0da622';
      var state = this.generateState();
      var spotifyEndpoint = 'https://accounts.spotify.com/authorize';
      var responseType = 'token';
      var redirectUri = 'https://spotifystats.io/landingpage';
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
.get-started-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
