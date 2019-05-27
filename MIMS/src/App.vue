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
<!-- <div class="tabBar">
  <ul>
    <li v-for='(index,tab) in tabs' :key='tab.id'>
      <router-link :to='tab.routerName'>
        <img src="tab.imgSrc"/>>
        <p>{{tab.title}}</p>
      </router-link>
    </li>
  </ul>
</div> -->
<!-- 底部栏  -->
 <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
      <img slot="icon" src="./assets/index.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="vip">
      <img slot="icon" src="./assets/vip.png">
      会员
    </mt-tab-item>
    <mt-tab-item id="cart">
      <img slot="icon" src="./assets/cart.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="search">
      <img slot="icon" src="./assets/search.png">
      查找
    </mt-tab-item>
 </mt-tabbar>
  </div>
</template>

<script>
// import index from './assets/index.png'
// import vip from './assets/vip.png'
// import cart from './assets/cart.png'
// import search from './assets/search.png'
// let tabs=[
//   {id:1,title:"首页",imgSrc:index,routerName:{name:'home'}},
//   {id:2,title:"会员",imgSrc:vip,routerName:{name:'vip'}},
//   {id:3,title:"购物车",imgSrc:cart,routerName:{name:'cart'}},
//   {id:4,title:"查找",imgSrc:search,routerName:{name:'search'}},
// ]
export default {
  name: 'App',
  data(){
    return{
      selected:'',
      // tabs:tabs
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV);//返回值对应鼠标点击的id值
      this.$router.push({name:this.selected});//当前选中的路由
    }
  }
}
</script>

<style scoped>
#bottomnav{
  height: 20px;
}
</style>
