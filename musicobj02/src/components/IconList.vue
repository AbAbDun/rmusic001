<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanjutuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-airec"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>

  <!-- <div class="center1">
    <div class="c1_boxs">
      <div class="c1_box" v-for="(item, index) in use1" :key="index">
        <img :src="item.url" />
        <p>{{ item.uname }}</p>
      </div>
    </div>
  </div> -->
</template>
  
  <script>
export default {
  name: "IconList",
  data() {
    return {
      use1: [
        { url: require("../img/tuijiian.svg"), uname: "每日推荐" },
        { url: require("../img/Siren.svg"), uname: "私人FM" },
        { url: require("../img/gedan.svg"), uname: "歌单" },
        { url: require("../img/paihangbang.svg"), uname: "排行榜" },
      ],
    };
  },
};
</script>
<!-- <style scoped>
.c1_boxs {
  width: 7.5rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.4em;
}
.c1_box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.c1_box img {
  width: 2.5em;
}
.c1_box p {
  font-size: 0.6em;
}
</style> -->
<style lang="less" scoped>
.iconList{
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 1.2rem;
            height: 1.2rem;
        }
        span{
            font-size: 0.26rem;
        }
    }
}

</style>