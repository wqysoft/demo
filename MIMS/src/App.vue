<template>
  <div id="app">
    <!-- 顶部栏 -->
    <mt-header fixed title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件的出口 -->
    <router-view/>
    <!-- 底部栏 -->
    <div class="tabBar">
      <ul>
        <li v-for='tab in tabs' :key='tab.id'>
          <router-link :to='tab.routerName'>
            <img :src="tab.imgSrc" alt="" />
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import index from "./assets/index.png";
import vip from "./assets/vip.png";
import cart from "./assets/cart.png";
import search from "./assets/search.png";
let tabs = [
  { id: 1, title: "首页", imgSrc: index, routerName: { name: "home" } },
  { id: 2, title: "会员", imgSrc: vip, routerName: { name: "vip" } },
  { id: 3, title: "购物车", imgSrc: cart, routerName: { name: "cart" } },
  { id: 4, title: "查找", imgSrc: search, routerName: { name: "search" } }
];
export default {
  name: "App",
  data() {
    return {
      selected: "",
      tabs: tabs
    };
  },
  watch: {
    selected: function(newV, oldV) {
      // console.log(newV); //返回值对应鼠标点击的id值
      this.$router.push({ name: this.selected }); //当前选中的路由
    }
  }
};
</script>

<style scoped>
.tabBar ul {
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.tabBar ul li {
  float: left;
  width: 25%;
  height: 55px;
  text-align: center;
}
.tabBar ul li a.link-active{
  background-color: #e0e0e0;
}
.tabBar ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
.tabBar ul li p {
  font-size: 12px;
  color:#000;
}
.tabBar ul li a img {
  width: 25px;
}
</style>
