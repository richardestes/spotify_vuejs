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
        v-bind:userUrl="userUrl"
     />
    </div>
    <div id="topTracks">
      <h1>Top Songs ({{songButtonChoice}})</h1>
      <button class="toggleButton" v-on:click="getTopTracks(token,'short_term')">Past 4 Weeks</button>
      <button class="toggleButton" v-on:click="getTopTracks(token,'medium_term')">Past 6 Months</button>
      <button class="toggleButton" v-on:click="getTopTracks(token,'long_term')">All Time</button>
      <List v-bind:list="userTopTracks" v-bind:listName="topSongHeader"/>
    </div>
    <div id="topArtists">
      <h1>Top Artists ({{artistButtonChoice}})</h1>
      <button class="toggleButton" v-on:click="getTopArtists(token,'short_term')">Past 4 Weeks</button>
      <button class="toggleButton" v-on:click="getTopArtists(token,'medium_term')">Past 6 Months</button>
      <button class="toggleButton" v-on:click="getTopArtists(token,'long_term')">All Time</button>
      <List v-bind:list="userTopArtists" v-bind:listName="topArtistHeader"/>
    </div>
  </div>
</template>

<script>
import Header from "../views/components/Header"
import ProfileStats from "../views/components/ProfileStats"
import List from "../views/components/List"

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
      userTopTracks: '',
      userTopArtists: '',
      topSongHeader: 'Top Songs',
      topArtistHeader: 'Top Artists',
      songButtonChoice: '',
      artistButtonChoice: '',
      userUrl: '',
    }
  },
  components: {
    Header,
    ProfileStats,
    List
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
        this.userUrl = 'https://open.spotify.com/user/' + this.userId;
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
    },
    //TODO: Add time range parameter
    async getTopTracks(token,time_range){
      this.url = `https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}`;
      const result = await fetch(this.url, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
      const response = await result.json();
      this.userTopTracks = response;
      switch(time_range){
        case 'short_term':
          this.songButtonChoice = 'Past 4 Weeks';
          break;
        case 'medium_term':
          this.songButtonChoice = 'Past 6 Months';
          break;
        case 'long_term':
          this.songButtonChoice = 'All Time';
          break;
      }
      return response;
    },
    //TODO: Add time range parameter
    async getTopArtists(token,time_range) {
      this.url = `https://api.spotify.com/v1/me/top/artists?time_range=${time_range}`;
      const result = await fetch(this.url, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
      });
      const response = await result.json();
      this.userTopArtists = response;
      switch(time_range){
        case 'short_term':
          this.artistButtonChoice = 'Past 4 Weeks';
          break;
        case 'medium_term':
          this.artistButtonChoice = 'Past 6 Months';
          break;
        case 'long_term':
          this.artistButtonChoice = 'All Time';
          break;
      }
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
          this.getTopTracks(this.token,"long_term");
          this.getTopArtists(this.token,"long_term");
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
  max-width: 100%;
  /* width: 100%; */
}
.profileStats {
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  width: 200px;
  align-items: center;
  justify-content: center;
}
.topTracks {
  display: flex;
  padding: 30px;
}
.topArtists {
  padding: 30px;
  display: flex;
}
.toggleButton {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color:  #FF3057;
  border-radius: 10px;
  border: none;
  width: 25vw;
  height: 10vh;
  color:white;
  /* Adjust the following values, it's just
   * going to be trial and error: */
  font-size: calc(0.3rem + 1.2vw);
  margin: 3vw
}
</style>