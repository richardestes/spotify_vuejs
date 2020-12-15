<template>
  <div id = "main">
    <img v-bind:src="require('../../assets/loading.gif')" class="loadingGif" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-content: center;
  background-color: #FFFFF9;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.loadingGif {
  width: 15vw;
  align-self: center;
  background-color: #FFFFF9;
}
</style>