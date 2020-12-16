<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <h2>Compare</h2>
    <h3>Coming soon...</h3>
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
      token: ''
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
</style>