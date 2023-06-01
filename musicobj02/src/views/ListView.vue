<template>
  <div class="about">
    <!-- 歌单详情 -->
    <listview-top :playlist="music.playlist"></listview-top>
    <!--歌曲列表-->
    <play-list :playlist="music.playlist"></play-list>
  </div>
</template>
  <script>
import listviewTop from "@/components/ListViewTop.vue";
import playList from "@/components/PlayList.vue";
import { getMusicList } from "@/api/index.js";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import store from "@/store";
export default {
  name: "listview",
  setup() {
    var route = useRoute(); //当前路由信息对象等价于$route
    var music = reactive({
      list: [],
      playlist: {
        creator: {}, //歌单详情
        tracks: [], //播放列表。
      },
    });

    onMounted(async () => {
      const id = route.query.id;
      console.log(id);
      var res = await getMusicList(id);
      //   musicls.musics = res.data.result;
      console.log(res);
      music.playlist = res.data.playlist;
      console.log(music);

      //将当前专辑播放列表的数据传递到store中playlist中
      store.commit("setPlayList", music.playlist.tracks);
    });
    return { music };
  },
  components: {
    listviewTop,
    playList,
  },
};
</script>
  