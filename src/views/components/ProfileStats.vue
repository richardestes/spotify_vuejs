<template>
  <div id="main">
    <div id ="userHeaderInfo">
      <h1>Full Name: {{displayName}}</h1>
      <h2>Username: {{username}}</h2>
      <img v-bind:src=profilePic class="profilePic"/>
      <p>Songs Saved: {{songCount}}</p>
      <p>Playlists Created: {{playlistCount}}</p>
      <p>Followers: {{followerCount}}</p>
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
  },
  methods: {
    
  },
  mounted() {
    console.log(this.data);
  }
}
</script>

<style scoped>

</style>

