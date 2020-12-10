<template>
  <div class="main">
    <li class="listItem" v-for="(item,index) in list" :key="item" >
      <h3 class="listNumber">{{index+1}}</h3><h3 class="listTitle"> - <a v-bind:href="listLinks[index]"> {{item}}</a></h3>
    </li>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: Array,
    listLinks: Array,
    listName: String
  },
  created() {
    console.log(this.list);
  }
}
</script>

<style scoped>
.main {
  flex-wrap: nowrap;
}
.listItem{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.listNumber {
  color:  #FF3057;
  font-size: 2vw;
}
.listTitle {
  font-size: 2vw;
}
.main a {
  text-decoration: none;
  color: #0E0E0E;
}
</style>