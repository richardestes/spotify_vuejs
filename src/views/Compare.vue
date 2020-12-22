<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <div class="searchContainer">
      <input id="userIdSearch" class="searchBar" v-model.trim="userToCompareId" placeholder="Enter Spotify User Link">
      <button class="submitButton" v-on:click="searchUser">Search</button>
    </div>
    <LoadingScreen v-if="loading" />
    <div v-if="userToCompareDisplayName" class="resultsContainer">
      <h2 class="userDisplayName">{{userToCompareDisplayName}}</h2>
      <h2 class="userFollowers">{{userToCompareFollowerCount}} followers</h2>
      <h2 class="listTitle">{{listTitle}}</h2>
      <List v-if="!loading" v-bind:list="userToComparePublicPlaylistNames" v-bind:listLinks="userToComparePublicPlaylistLinks" v-bind:listName="listTitle" v-bind:ordered="ordered"/>
    </div>
  </div>
</template>

<script>
import Header from '../views/components/Header'
import LoadingScreen from "../views/components/LoadingScreen"
import List from "../views/components/List"

export default {
  components: {
    Header,
    LoadingScreen,
    List
  },
  data() {
    return {
      token: '',
      userId: '',
      userToCompareDisplayName: '',
      userToCompareFollowerCount: '',
      userToCompareId: '',
      userToComparePublicPlaylistNames: '',
      userToComparePublicPlaylistLinks: '',
      userToComparePublicPlaylistCount: '',
      userInDatabase: false, //use this to dynamically display results
      listTitle: 'Public Playlists',
      loading:false,
      ordered: false
    }
  },
  methods: {
    async searchUser(){
      if (this.userToCompareId){
        this.loading = true;
        const body = JSON.stringify({token:this.token,userId:this.userId,userIdToCompare:this.userToCompareId});
        const urlCheck = this.userToCompareId.substring(0,30); // https://open.spotify.com/user/
        const awsUrl = 'https://y0pt80cel4.execute-api.us-west-1.amazonaws.com/beta/compareuser';
        if (urlCheck == 'https://open.spotify.com/user/'){
          const response = await fetch(awsUrl,{ method: 'POST',mode: 'cors',cache: 'no-cache',credentials: 'same-origin',body:body,headers: {"Content-Type": "application/json",}});
          let rawData = await response;
          let dataJson = await rawData.json();
          console.log(dataJson.body);
          if(dataJson.body){
            if (dataJson.body.userArtistFrequency){ // lazy way of checking if user in database
              this.userToCompareDisplayName = dataJson.body.displayName;
              this.userToCompareId = dataJson.body.userId;
              this.userToCompareFollowerCount = dataJson.body.followerCount;
            }
            else if (dataJson.body.UserInfoToCompare.PlaylistNames) {
              this.userToCompareDisplayName = dataJson.body.UserInfoToCompare.display_name;
              this.userToCompareId = dataJson.body.id;
              this.userToComparePublicPlaylistNames = dataJson.body.PlaylistNames;
              this.userToComparePublicPlaylistLinks = dataJson.body.PlaylistLinks;
              this.userToComparePublicPlaylistCount = dataJson.body.PlaylistNames.length;
              this.userToCompareFollowerCount = dataJson.body.UserInfoToCompare.followers.total;
            }
            this.loading = false;
          }
          return;
        }
        else {
          window.alert("Invalid User ID submitted");
        }
      }
      else {
        console.log("No User ID found");
        window.alert("No User ID found");  
      }
    }
  },
  created() {
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userID');
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFFFF9;
}
.searchContainer {
  align-items: center;
}
.searchBar {
  background-color: #DFDFDF;
  width: 30vw;
  height: 60px;
  text-decoration: none;
  border: none;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  text-emphasis: none;
}
.searchContainer input:focus {
  outline:none;
}
.submitButton{
  width: 150px;
  height: 79px; 
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
}
.resultsContainer {
  background-color: #FFFFF9;
  height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: right;
}
.listTitle {
  font-size: 2vw;
  color:black
}
.userDisplayName{
  font-size: 2vw; 
  color:black
}
.userFollowers {
  font-size: 2vw;
  color:black
}
</style>