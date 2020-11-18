<template>
  <div class="main">
    <div id="nav">
      <Header />
    </div>
    <p>{{token}}</p>
    <button v-on:click="getUserInfo(token)">Get User Info</button>
  </div>
</template>

<script>
import Header from "../views/components/Header"
export default {
  name: "Stats",
  data() {
    return {
      token: '',
      userInfo: '',
    }
  },
  components: {
    Header
  },
  methods : {
    async getUserInfo(token){
      const result = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
        const response = await result.json();
        this.userInfo = response;
        return response;
    } 
  },
  
  created() {
    if (this.$route.hash) {
      // Gets token
      var access_token = this.$route.hash.substring(14,206);
      this.token = access_token;
      if (this.token)
        this.getUserInfo(this.token);
    }
    else {
      window.alert('No Token Found')
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>