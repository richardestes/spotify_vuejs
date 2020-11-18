<template>
  <div class="main">
    <div id="nav">
      <Header />
    </div>
    <p>{{token}}</p>
  </div>
</template>

<script>
import Header from "../views/components/Header"
export default {
  name: "Stats",
  data() {
    return {
      token: ''
    }
  },
  components: {
    Header
  },
  methods : {
    getUserTracks(){
      
    }
  },
  created() {
    if (this.$route.hash) {
      // Gets token
      var access_token = this.$route.hash.substring(14,206);
      this.token = access_token;
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