<template>
  <div class="center2">
    <div class="center2-top">
      <div class="center2-top-1">发现好歌单</div>
      <a class="center2-top-2">查看更多</a>
    </div>

    <div class="center2-bottom swiper-container_two" style="">
      <div class="swiper-wrapper">
        <div
          class="c2-box swiper-slide"
          v-for="(item, index) in user2"
          :key="index"
        >
          <img :src="item.picUrl" />
          <p style="font-size: 0.6em; margin-left: 1em">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- view-source: 查看网页源代码 -->
  <script>
import { getMusic } from "@/api/index.js"; //@指的是项目 目录src
import "swiper/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "MusicList",
  data() {
    return {
      user2: [
        // {
        //   picUrl: require("../img/_109951168563563698.jpg"),
        //   name: "『日系』总是忍不住单曲循环～",
        //   id: "1",
        // },
        // {
        //   picUrl: require("../img/_109951167176460912.jpg"),
        //   name: "『Just the Two of Us』衍生万能和弦进行",
        //   id: "2",
        // },
        // {
        //   picUrl: require("../img/_109951168569750288.jpg"),
        //   name: "超级无敌宝藏电音系列",
        //   id: "3",
        // },
      ],
    };
  },
  async mounted() {
    //async...await异步ajax请求函数
    var res = await getMusic(10);
    this.user2 = res.data.result;
    var mySwiper1 = new Swiper(".swiper-container_two", {
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      observer: true,
      // observeSlideChildren: true,
      // observeParents: true, //这三个可以去文档看下介绍，主要就是异步情况会重新加载swiper。
      loop: true, //开启环路
      spaceBetween: 10, //每个轮播图间隔
      slidesPerView: 3, //当前页面显示几个，这里是auto
      loopedSlides: 5, //比你页面显示的数量大于2就好
      updateOnWindowResize: false, //分辨率改变时，防止样式错乱加上！
    });
  },
};
</script>

  <style scoped>
.center2 {
  width: 7.5rem;
  padding: 0 0.4rem;
  margin-top: 0.4em;
}
.center2-top {
  width: 100%;
  height: 2em;
  padding: 0 1em 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.center2-top-1 {
  font-weight: bolder;
}
.center2-top-2 {
  font-size: 1em;
}
.center2-bottom {
  height: 8em;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
}
.c2-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* white-space: nowrap; */
}
.c2-box img {
  width: 100%;
  border-radius: 0.2em;
}
</style>
  