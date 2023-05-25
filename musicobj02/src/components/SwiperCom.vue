<template>
  <div class="SwiperCon" id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item.pic" alt="" />
        </div>
        <!-- 分页器-->
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
  
  <script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import { getBanner } from "@/api/index.js"; //@指的是项目 目录src
export default {
  name: "SwiperCon",
  data() {
    return {
      imgs: [
        //轮播图的数据
        { pic: require("../assets/swiper01.jpg") },
        { pic: require("../assets/swiper02.jpg") },
        { pic: require("../assets/swiper01.jpg") },
        { pic: require("../assets/swiper02.jpg") },
        { pic: require("../assets/swiper01.jpg") },
        { pic: require("../assets/swiper02.jpg") },
        { pic: require("../assets/swiper01.jpg") }
      ],
    };
  },
  async mounted() {
    //async...await异步ajax请求函数
    var res = await getBanner(1);
    this.imgs = res.data.banners;
    var swiper = new Swiper("#swiperIndex", {
      loop: true,
      // autoplay: true,//自动轮播
      // paginationCickab1e: true,
      // direction:'vertical',
      //分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, //分页小圆点可以点击
      },
    });
  },
};
</script>

<style lang="less" >
#swipercom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;

    .swiper-slide img {
      width: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: orangered;
    }
  }
}
</style>

  