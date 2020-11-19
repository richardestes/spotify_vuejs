<template>
  <div class="main">
    <li class="listItem" v-for="(item,index) in list.items" :key="item.name" >{{index+1}} - {{item.name}}</li>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: Object,
    listName: String
  }
}
</script>

<style scoped>
.listItem{
  padding: 10px;
}
</style>