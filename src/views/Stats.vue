<template>
  <div class="main">
    <div id="nav">
      <Header />
    </div>
    <div id="profileStats">
      <ProfileStats
        v-bind:displayName="userInfo.display_name"
        v-bind:username="userInfo.id"
        v-bind:profilePic="userInfo.images[0].url"
        v-bind:songCount="userTracks.total"
        v-bind:playlistCount="userPlaylists.total"
        v-bind:followerCount="userInfo.followers.total"
     />
    </div>
  </div>
</template>

<script>
import Header from "../views/components/Header"
import ProfileStats from "../views/components/ProfileStats"
export default {
  name: "Stats",
  data() {
    return {
      token: '',
      userInfo: '',
      userId:'',
      userTracks: '',
      userPlaylists: '',
      url: '',
    }
  },
  components: {
    Header,
    ProfileStats
  },
  methods : {
    async getUserInfo(token){
      const result = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
        const response = await result.json();
        if (response){
          this.userInfo = response;
          this.userId = this.userInfo.id;
        }
        return response;
    },
    async getUserTracks(token){
      const result = await fetch(`https://api.spotify.com/v1/me/tracks`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
        const response = await result.json();
        this.userTracks = response;
        return response;
    },
    async getUserPlaylists(token,userId){
      this.url = `https://api.spotify.com/v1/users/${userId}/playlists`;
      const result = await fetch(this.url, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
        const response = await result.json();
        this.userPlaylists = response;
        return response;
    }
  },
  
  created() {
    if (this.$route.hash) {
      // Gets token
      var access_token = this.$route.hash.substring(14,206);
      this.token = access_token;
      // Main GET
      if (this.token){
        this.getUserInfo(this.token).then(()=>{
          this.getUserTracks(this.token);
          this.getUserPlaylists(this.token,this.userId);
        });
      }
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