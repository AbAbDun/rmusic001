<template>

  <router-view/>
  <playcontroller></playcontroller>
</template>
<script>
import playcontroller from "@/components/PlayController.vue"
export default {
  components:{
    playcontroller
  },
  setup() {
    
  },
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.icon{
  width: 0.30rem;
  height: 0.3rem;
}
a{
  color: #333;
  text-decoration: none;
}


</style>