<template>
  <div class="main">
    <li class="listItem" v-for="(item,index) in list.items" :key="item.name" >
      <h3 class="listNumber">{{index+1}}</h3><h3 class="listTitle"> - {{item.name}}</h3>
    </li>
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
</style>