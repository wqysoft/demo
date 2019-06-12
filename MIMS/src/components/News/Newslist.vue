<template>
  <div class="news">
    <Navbar title="新闻资讯"></Navbar>
    <div class="newsList">
    <ul>
     <li v-for="news in newsList.result.data" :key="news.id">
       <a :href="news.url">
         <div class=new_img>
           <img :src="news.thumbnail_pic_s"/>
         </div>
           <h4 class="title">{{news.title}}</h4>
           <span class="author_name">{{news.author_name}}</span>
           <span class="time">{{news.date}}</span>
       </a>
     </li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  name:"newsList",
  data() {
    return {
      newsList:[]
    };
  },
created(){
   this.$axios.get('/toutiao/index', {
    params: {
      type: 'yule'
    },headers: {
            'Authorization': 'APPCODE 4b78d6523aac430aa69bea6d61a421b4'
        }
  })
  .then(res=>{
     this.newsList=res.data;
    
   })
   .catch(err=>{
      console.log("新闻列表异常",err)
   })
},

};
</script>
<style scoped>
.newsList ul li {
  padding: 5px 5px 0 0;
  height:100px;
  border-bottom: .5px solid #c6c6c6;
}
ul li .new_img{
  float: left;
  margin-right:20px;
  margin-top:-8px;
}
ul li .new_img img{
 width: 120px;
 height: 90px;
 margin-top: 10px; 
}
.title{
  color:#000;
  height: 70px;
}
.author_name{
 
   color:coral;
}
.time{
  float:right;
  color: #949494;
 
}
ul li{
margin-top: 20px;
}
</style>
