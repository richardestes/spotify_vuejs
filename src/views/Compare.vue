<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <div class="searchContainer">
      <input id="userIdSearch" class="searchBar" v-model.trim="userIdToSearch" placeholder="Enter Spotify User Link">
      <button class="submitButton" v-on:click="searchUser">Search</button>
    </div>
    <div class="resultsContainer">
      <LoadingScreen v-if="loading" />
    </div>
  </div>
</template>

<script>
import Header from '../views/components/Header'
import LoadingScreen from "../views/components/LoadingScreen"

export default {
  components: {
    Header,
    LoadingScreen
  },
  data() {
    return {
      token: '',
      userId: '',
      userIdToSearch: '',
      userToComparePublicPlaylistNames: '',
      userToComparePublicPlaylistLinks: '',
      loading:false
    }
  },
  methods: {
    async searchUser(){
      if (this.userIdToSearch){
        this.loading = true;
        const body = JSON.stringify({token:this.token,userId:this.userId,userIdToCompare:this.userIdToSearch});
        const urlCheck = this.userIdToSearch.substring(0,30); // https://open.spotify.com/user/
        if (urlCheck == 'https://open.spotify.com/user/'){
          const response = await fetch('https://y0pt80cel4.execute-api.us-west-1.amazonaws.com/beta/compareuser',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            body:body,
            headers: {
              "Content-Type": "application/json",
            }
          }
          );
          let rawData = await response;
          let retrievedData = await rawData.json();
          let data = retrievedData.body;
          this.loading = false;
          console.log(data);
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
}
</style>