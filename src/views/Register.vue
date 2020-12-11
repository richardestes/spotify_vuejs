<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <h2>About</h2>
    <img v-bind:src="require('../assets/cassette_still.gif')" class="aboutImage" />
    <div class="registerContainer">
      <button class="registerButton" v-on:click="registerUser(token)">Get Started</button>
    </div>
  </div>
</template>

<script>
import Header from "../views/components/Header"

export default {
  components: {
    Header
  },
  data() {
    return {
      token: '',
      userInfo: '',
      userUrl: '',
      userId: ''
    }
  },
  created() {
    if (this.$route.hash) {
      // Gets token
      var access_token = this.$route.hash.substring(14,206);
      this.token = access_token;
      localStorage.setItem('token',this.token);
    }
    else if (localStorage.getItem('token')){
      // Gets token
      access_token = localStorage.getItem('token');
      this.token = access_token;
      localStorage.setItem('token',this.token);
    }
    else {
      window.alert('No Token Found');
    }
  },
  methods: {
    async getUserInfo(token){
      const result = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
      const response = await result.json();
      console.log(response); //DEBUGGING
      if (response){
        this.userInfo = response;
        this.userId = this.userInfo.id;
        this.userUrl = 'https://open.spotify.com/user/' + this.userId;
      }
      return response;
    },
    async registerUser(token) {
      let dataCall = await userLibraryUpload(token);
      let retrievedData = await dataCall.json();
      console.log(retrievedData);
      async function userLibraryUpload(token) {
        console.log(token);
        const body = {token:token};
        const response = await fetch(
          'https://y0pt80cel4.execute-api.us-west-1.amazonaws.com/beta/register',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          }
        );
        let rawData = await response;
        return rawData;
      }
    }
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
.registerContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.registerButton {
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
</style>