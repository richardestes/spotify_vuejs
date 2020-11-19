<template>
  <div id="main">
    <div id ="userHeaderInfo">
      <h1>{{displayName}}</h1>
      <h2>{{username}}</h2>
      <img v-bind:src=profilePic class="profilePic"/>
      <p>{{songCount}}</p>
      <p>{{playlistCount}}</p>
      <p>{{followerCount}}</p>
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

