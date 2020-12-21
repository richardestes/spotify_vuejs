<template>
  <div class="main">
    <div id="nav">
      <Header />
    </div>
    <LoadingScreen v-if="loading" />
    <div id="profileStats" v-if="!loading">
      <ProfileStats
        v-bind:displayName="userInfo.display_name"
        v-bind:username="userInfo.id"
        v-bind:songCount="userTracks.total"
        v-bind:playlistCount="userPlaylists.total"
        v-bind:userUrl="userUrl"
        v-bind:profilePic="userInfo.images[0].url"
        v-bind:followerCount="userInfo.followers.total"
     />
    </div>
    <div id="topTracks">
      <h1 class ="topSongsTitle">Top Songs ({{songButtonChoice}})</h1>
      <button class="toggleButton" v-on:click="getTopTracks(token,'short_term')">Past 4 Weeks</button>
      <button class="toggleButton" v-on:click="getTopTracks(token,'medium_term')">Past 6 Months</button>
      <button class="toggleButton" v-on:click="getTopTracks(token,'long_term')">All Time</button>
      <LoadingScreen v-if="loading" />
      <List v-if="!loading" v-bind:list="userTopTrackNames" v-bind:listLinks="userTopTrackLinks" v-bind:listName="topSongHeader"/>
    </div>
    <div id="topArtists">
      <h1 class="topArtistsTitle">Top Artists ({{artistButtonChoice}})</h1>
      <button class="toggleButton" v-on:click="getTopArtists(token,'short_term')">Past 4 Weeks</button>
      <button class="toggleButton" v-on:click="getTopArtists(token,'medium_term')">Past 6 Months</button>
      <button class="toggleButton" v-on:click="getTopArtists(token,'long_term')">All Time</button>
      <LoadingScreen v-if="loading" />
      <List v-if="!loading" v-bind:list="userTopArtistNames" v-bind:listLinks="userTopArtistLinks" v-bind:listName="topArtistHeader"/>
    </div>
  </div>
</template>

<script>
import Header from "../views/components/Header"
import ProfileStats from "../views/components/ProfileStats"
import List from "../views/components/List"
import LoadingScreen from "../views/components/LoadingScreen"

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
      userTopTrackNames: [],
      userTopTrackLinks: [],
      userTopArtistNames: [],
      userTopArtistLinks: [],
      topSongHeader: 'Top Songs',
      topArtistHeader: 'Top Artists',
      songButtonChoice: '',
      artistButtonChoice: '',
      userUrl: '',
      loading: false
    }
  },
  components: {
    Header,
    ProfileStats,
    List,
    LoadingScreen
  },
  methods : {
    async getUserInfo(token){
      this.loading = true;
      const result = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
        });
      const response = await result.json();
      if (response){
        this.userInfo = response;
        this.userId = this.userInfo.id;
        this.userUrl = 'https://open.spotify.com/user/' + this.userId;
        console.log(this.userInfo);
      }
      this.loading = false;
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
    async getTopTracks(token,timeRange) {
      let dataCall = await callSpotifyApi(token,timeRange);
      let retrievedData = await dataCall.json();
      let response = retrievedData.body;
      // clear so that songs don't get stuck/data overload
      this.userTopTrackNames = [];
      this.userTopTrackLinks = [];
      response.forEach(obj=>{
        this.userTopTrackNames.push(obj['Name']);
        this.userTopTrackLinks.push(obj['Href']);
      })
      console.log(this.userTopTrackNames);
      console.log(this.userTopTrackLinks);
      switch(timeRange){
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
      async function callSpotifyApi(token,timeRange) {
        // console.log(token);
        const body = JSON.stringify({token:token,timeRange:timeRange});
        const response = await fetch(
          'https://y0pt80cel4.execute-api.us-west-1.amazonaws.com/beta/getusertoptracks',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            body: body,
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        let rawData = await response;
        return rawData;
      }
    },
    async getTopArtists(token,timeRange) {
      let dataCall = await callSpotifyApi(token,timeRange);
      let retrievedData = await dataCall.json();
      let response = retrievedData.body;
      // clear so that songs don't get stuck/data overload
      this.userTopArtistNames = [];
      this.userTopArtistLinks = [];
      response.forEach(obj=>{
        this.userTopArtistNames.push(obj['Name']);
        this.userTopArtistLinks.push(obj['Href']);
      })
      console.log(this.userTopArtistNames);
      console.log(this.userTopArtistLinks);
      switch(timeRange){
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
      async function callSpotifyApi(token,timeRange) {
        // console.log(token);
        const body = JSON.stringify({token:token,timeRange:timeRange});
        const response = await fetch(
          'https://y0pt80cel4.execute-api.us-west-1.amazonaws.com/beta/getusertopartists',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            body: body,
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        let rawData = await response;
        return rawData;
      }
    },
  },
  
  created() {
    if (this.$route.hash) {
      // Gets token
      var url = this.$route.hash;
      var access_token = url.split("=")[1].split("&")[0]
      this.token = access_token;
      localStorage.setItem('token',this.token);
      // Main GET
      if (this.token){
        this.getUserInfo(this.token).then(()=>{
          localStorage.setItem('userID',this.userId);
          this.getUserTracks(this.token);
          this.getUserPlaylists(this.token,this.userId);
          this.getTopTracks(this.token,"short_term"); // default display
          this.getTopArtists(this.token,"short_term");
        });
      }
    }
    else if (localStorage.getItem('token')){
      // Gets token
      access_token = localStorage.getItem('token');
      this.token = access_token;
      localStorage.setItem('token',this.token);
      // Main GET
      if (this.token){
        this.getUserInfo(this.token).then(()=>{
          localStorage.setItem('userID',this.userId);
          this.getUserTracks(this.token);
          this.getUserPlaylists(this.token,this.userId);
          this.getTopTracks(this.token,"short_term");
          this.getTopArtists(this.token,"short_term");
        });
      }      
    }
    else {
      window.alert('No Token Found');
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
  height: 25vh;
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
  height: 6vh;
  color:white;
  /* Adjust the following values, it's just
   * going to be trial and error: */
  font-size: calc(0.3rem + 1.2vw);
  margin: 3vw
}
.topSongsTitle {
  font-size: calc(0.8rem + 1vw);
}
.topArtistsTitle {
  font-size: calc(0.8rem + 1vw);
}
</style>