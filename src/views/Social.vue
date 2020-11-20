<template>
  <div class="main">
    <div class="nav">
      <Header />
    </div>
    <h2>Social</h2>
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
  max-width: 100%;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
}
</style>