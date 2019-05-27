<template>
  <div class="newList">
    <ul>
      <li>
        <a href="#">
          <div class="new_img">
            <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
          </div>
          <div class="content">
            <h4 class="title">我爱你中国我爱你中国我爱你中国我爱你中国</h4>
            <div class="news-desc">
              <p class="summary">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
              <p class="edit">
                <span class="praise">点赞数:5</span>
                <span class="time">发表时间:2017-08-09</span>
              </p>
            </div>
          </div>
        </a>
      </li>
       <li>
        <a href="#">
          <div class="new_img">
            <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
          </div>
          <div class="content">
            <h4 class="title">我爱你中国我爱你中国我爱你中国我爱你中国</h4>
            <div class="news-desc">
              <p class="summary">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
              <p class="edit">
                <span class="praise">点赞数:5</span>
                <span class="time">发表时间:2017-08-09</span>
              </p>
            </div>
          </div>
        </a>
      </li>
       <li>
        <a href="#">
          <div class="new_img">
            <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
          </div>
          <div class="content">
            <h4 class="title">我爱你中国我爱你中国我爱你中国我爱你中国</h4>
            <div class="news-desc">
              <p class="summary">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
              <p class="edit">
                <span class="praise">点赞数:5</span>
                <span class="time">发表时间:2017-08-09</span>
              </p>
            </div>
          </div>
        </a>
      </li>
       <li>
        <a href="#">
          <div class="new_img">
            <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
          </div>
          <div class="content">
            <h4 class="title">我爱你中国我爱你中国我爱你中国我爱你中国</h4>
            <div class="news-desc">
              <p class="summary">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
              <p class="edit">
                <span class="praise">点赞数:5</span>
                <span class="time">发表时间:2017-08-09</span>
              </p>
            </div>
          </div>
        </a>
      </li>
       <li>
        <a href="#">
          <div class="new_img">
            <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
          </div>
          <div class="content">
            <h4 class="title">我爱你中国我爱你中国我爱你中国我爱你中国</h4>
            <div class="news-desc">
              <p class="summary">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
              <p class="edit">
                <span class="praise">点赞数:5</span>
                <span class="time">发表时间:2017-08-09</span>
              </p>
            </div>
          </div>
        </a>
      </li>
       <li>
        <a href="#">
          <div class="new_img">
            <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg" alt="">
          </div>
          <div class="content">
            <h4 class="title">我爱你中国我爱你中国我爱你中国我爱你中国</h4>
            <div class="news-desc">
              <p class="summary">我的摘要内容我的摘要内容我的摘要内容我的摘要内容</p>
              <p class="edit">
                <span class="praise">点赞数:5</span>
                <span class="time">发表时间:2017-08-09</span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
 newsList:[]
    };
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
ul li img{
   width: 100px;
   height: 100px;
   margin-top: 10px;
}
ul li{
margin-top: 20px;
}
ul li .new_img{
   float: left;
   margin-right:20px;
}
ul li .content .summary{
   margin-top: 10px;
}
ul li .content .praise{
   margin-right: 10px;
}
ul li .content{
   color:#000;
}
ul li .content .edit{
   color:coral;
}
</style>
