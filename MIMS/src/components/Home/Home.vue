<template>
  <div>
    <div id="home">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000" style="height:250px" class="swiper">
        <mt-swipe-item v-for="(banner,index) in banners" :key="index">
          <img :src="banner.src">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 九宫格 -->
      <div class="list">
        <ul>
          <li v-for="(image,index) in images" :key="index">
            <router-link :to="image.router">
              <img :src="image.src">
            </router-link>
            <p>{{image.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import src1 from "../../assets/news.png";
import src2 from "../../assets/share.png";
import src3 from "../../assets/display.png";
import src4 from "../../assets/inform.png";
import src5 from "../../assets/callback.png";
import src6 from "../../assets/contact.png";
import food1 from "../../assets/foodO.jpg";
import food2 from "../../assets/foodT.jpg";
import food3 from "../../assets/foodTH.jpg";
import food4 from "../../assets/foodF.jpg";

export default {
  name: "Home",
  data() {
    return {
      // imgs:[],
      images: [
        { id: 1, src: src1, title: "新闻资讯",router:{name:"news.list"}},
        { id: 2, src: src2, title: "图文分享" ,router:{name:"news.list"}},
        { id: 3, src: src3, title: "商品展示",router:{name:"news.list"} },
        { id: 4, src: src4, title: "资讯" ,router:{name:"news.list"}},
        { id: 5, src: src5, title: "留言反馈" ,router:{name:"news.list"}},
        { id: 6, src: src6, title: "联系我们" ,router:{name:"news.list"}}
      ],
      banners:[
        {id:1,src:food1},
        {id:2,src:food2},
        {id:3,src:food3},
        {id:4,src:food4}
      ]
    };
  }
  //  created(){//发起请求
  //      this.$axios.get('data_api.html')
  //      .then(res=>{
  //          console.log(res.data.message);
  //          this.imgs=res.data.message;
  //      })
  //      .catch(err=>{
  //          console.log('轮播图数据异常',err);
  //      })
};
</script>
 <style lang="css" scoped>

.swiper img {
  width: 100%;
  height: 250px;
}
.list{
  width:100%;
  
}
.list ul{
display: flex;
flex-wrap:wrap;
justify-content: center;
margin-top: 40px;
}
.list ul li{
  widows: 33%;
  height: 100px;
  text-align: center;
  font-size: 14px;
  padding:0 30px;
 list-style: none;

}
.list ul li a{
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.list ul li a img{
  width: 50px;
  height: 50px;
}

</style>

