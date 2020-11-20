<template>
  <div class="mainContainer">
    <div class="profilePicContainer">
      <a v-bind:href="userUrl"><img v-bind:url="userUrl" v-bind:src=profilePic class="profilePic"/></a>
    </div>
    <div class ="profileNameContainer">
      <a v-bind:href="userUrl" class="profileFullName">{{displayName}}</a>
      <a v-bind:href="userUrl" class="profileUsername">@{{username}}</a>
    </div>
    <div class="songsContainer">
      <h1 class="statCount">{{songCount}}</h1>
      <h2 class="statCountTitle">Songs Saved</h2>
    </div>
    <div class="playlistsContainer">
      <h1 class="statCount">{{playlistCount}}</h1>
      <h2 class="statCountTitle">Playlists Created</h2>
    </div>
    <div class="followersContainer">
      <h1 class="statCount">{{followerCount}}</h1>
      <h2 class="statCountTitle">Followers</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileStats",
  props: {
    displayName: String,
    username: String,
    profilePic: String,
    songCount: Number,
    playlistCount: Number,
    followerCount: Number,
    userUrl: String,
  },
  methods: {
    
  },
  mounted() {
    console.log(this.data);
  }
}
</script>

<style scoped>
.mainContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.profilePicContainer {
  justify-content: center;
  width: 15%;
  margin-right: -20px;
}
.profilePic {
  border-radius: 50%;
  width: 9vw;
}
.profileNameContainer {
  text-align: left;
  width:20%;
  display: flex;
  flex-direction: column;
}
.profileFullName {
  color: #0E0E0E;
  margin: 0;
  text-decoration: none;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: calc(1rem + 1vw);
}
.profileUsername {
  color: #747474;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
  font-size: calc(.2rem + 0.7vw);
  text-decoration: none;
}
.songsContainer {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 10vw;
}
.statCount{
  color:  #FF3057;
  font-weight: bolder;
  margin:0px;
  padding-bottom: 1vh;
}
.statCountTitle {
  font-weight:bold;
  margin: 0px;
  color: #0E0E0E;
  font-size: calc(.5rem + .8vw);
}
.playlistsContainer {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 10vw;
}
.followersContainer{
  display: flex;
  flex-direction: column;
  text-align: left; 
  margin-right: 10vw;
}
</style>

