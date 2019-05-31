<template>
  <div id="newList">
    <ul>
     <NewList></NewList>
     <NewList></NewList>
     <NewList></NewList>
     <NewList></NewList>
     <NewList></NewList>
     <NewList></NewList>
     <NewList></NewList>
     <NewList></NewList>
    </ul>
  </div>
</template>
<script>
var NewList={
  template:`
   <li>
    <a href="#">
      <div class="new_img" style="float: left;margin-right:20px;">
        <img style="width: 100px;height: 100px;margin-top: 3px;" src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
      </div>
      <div class="content">
        <h4>我爱你中国我爱你中国我爱你中国我爱你中国</h4>
        <div>
          <p class="summary" style="color:#000;">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
          <p class="edit" style="color:coral;">
            <span class="praise" style="margin-right: 10px;">点赞数:5</span>
            <span class="time">发表时间:2017-08-09</span>
          </p>
        </div>
      </div>
    </a>
  </li>
  `
}
export default {
  data() {
    return {
    };
  },
  components:{
    NewList
  },
created(){
   this.$axios.get('')
   .then(res=>{
     this.newsList=res.data.message;
     console.log(this.newsList);
    
   })
   .catch(err=>{
      console.log("新闻列表异常",err)
   })
},

};
</script>
<style scoped>
ul li{
margin-top: 20px;
}

</style>
