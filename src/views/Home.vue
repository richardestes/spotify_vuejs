<template>
  <div class="get-started-main">
    <p class="landing-title">SpotifyStats.io</p>
    <p class="landing-subtitle">
      Compare your Spotify listening <br />
      with your friends
    </p>
    <img src="../assets/21008-social-media-concept.gif" class="landing-image" />
    <button
      v-on:click="requestAuthorization"
      id="btn_get_started"
      class="btn btn-landing"
    >
      Get Started
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    requestAuthorization() {
      var clientId = '40babe1ec57c4ce8a664f8304f0da622';
      var authEndpoint = 'https://accounts.spotify.com/authorize';
      var state = this.generateState();
      var responseType = 'code';
      var redirectUri = 'https://spotifystats.io/landingpage';
      var scopes = 'user-read-private playlist-read-private user-library-read user-top-read user-read-recently-played';
      var requestUrl = authEndpoint + '?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&responseType=' + responseType + '&scope=' + scopes + '&state=' + state;
      console.log(requestUrl);
      axios.get(requestUrl)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      
    },
    redirectToSpotify() {
      var clientId = '40babe1ec57c4ce8a664f8304f0da622';
      var state = this.generateState();
      var spotifyEndpoint = 'https://accounts.spotify.com/authorize';
      var responseType = 'token';
      var redirectUri = 'https://friendify.onrender.com/landingpage';
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
.landing-image {
  padding-bottom: 30px;
  width: 85%;
  height: auto;
}
h3 {
  margin: 40px 0 0;
}
.btn-landing {
  background-color: #01007f !important;
  color: white;
  font-weight: 700;
  font-size: 20px;
  width: 300px;
  height: 80px;
  border: 0;
  border-radius: 10px;
}
.landing-title {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 10vh;
  color: #01007f;
  margin-bottom: 0%;
}
.landing-subtitle {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 3vh;
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
