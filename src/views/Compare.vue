<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <div class="searchContainer">
      <input class="searchBar" v-model.trim="userIdToSearch" placeholder="Enter Spotify User Link">
      <button class="submitButton" v-on:click="searchUser">Search</button>
    </div>
  </div>
</template>

<script>
import Header from '../views/components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      token: '',
      userIdToSearch: '',
    }
  },
  methods: {
    searchUser(){
      if (this.userIdToSearch){
        console.log(this.userIdToSearch);
        window.alert(this.userIdToSearch);
      }
      else {
        console.log("No User ID found");
        window.alert("No User ID found");  
      }
    }
  },
  created() {
    this.token = localStorage.getItem('token');
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
}
.submitButton{
  width: 150px;
  height: 79px; 
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
}
</style>