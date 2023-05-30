import axios from "axios"

const baseUrl ="http://localhost:3000";

//封装获取轮播图的api   调用例子: /banner, /banner ?type=2 type=0,1,2,3
//获取发现页面banner轮播数据
export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

//获取发现页面推荐歌单数据
export function getMusic(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}
//获取推荐歌单详细数据
export function getMusicList(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//对外抛出
export default { getBanner,getMusic,getMusicList};
