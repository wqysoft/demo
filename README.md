<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="vue.js"></script>
    <title>Document</title>
    <script>
        window.onload = function () {
            new Vue({
                el: "#box",
                data: {
                    myData: [],
                    username:"Angela",
                    age:"18",
                    nowIndex:-2
                    },
                    methods:{
                        add:function(){
                          this.myData.push({
                           name:this.username,
                           age:this.age
                          });
                         this.username="";
                         this.age=""
                         nowIndex:0
                        },
                        deleteMsg:function(n){
                            if(n==-2){
                                this.myData=[];
                            }else
                            {this.myData.splice(n,1);}
                            }     
                    }
            });
        }
    </script> 
</head>
<body>
    <div class="container" id="box">
        <form role="form">
            <div class="form-group">
                <label for="username">用户名：</label>
                <input v-model="username" type="text" id="username" class="form-control" placeholder="请输入用户名">
            </div>
            <div class="form-group">
                <label for="age">年 龄：</label>
                <input v-model="age" type="text" id="age" class="form-control" placeholder="请输入年龄">
            </div>
            <div class="form-group">
                <input type="button" value="添加" class="btn btn-primary" v-on:click="add()">
                <input type="reset" value="重置" class="btn btn-danger" v-on:click="deleteMsg(nowIndex)">
            </div>
        </form>
        <hr>
        <table class="table table-bordered table-hover">
            <caption class="h3 text-info text-center">用户信息表</caption>
            <tr class="text-danger">
                <th class="text-center">序号</th>
                <th class="text-center">名字</th>
                <th class="text-center">年龄</th>
                <th class="text-center">操作</th>
            </tr>
            <tr class="text-center" v-for="(index,item) in myData">
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td><button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#layer" 
                    v-on:click="nowIndex=index">删除</button></td>
            </tr>
            <tr v-show="myData.length!=0">
                <td colspan="4" class="text-right">
                    <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#layer"
                    v-on:click="nowIndex=-2">删除全部</button> 
                </td>
            </tr>
            <tr v-show="myData.length==0">
                <td colspan="4" class="text-center text-muted">
                    <p>暂无数据...</p>
                </td>
            </tr>
        </table>
        <!-- 模态框 弹框 -->
        <div role="dialog" class="modal fade bs-example-modal-sm" id="layer" data-index="{{nowIndex}}">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">确认删除吗？</h4>
                    
                </div>
            </div>
                <div class="modal-body text-right">
                    <button class="btn btn-primary btn-sm" data-dismiss="modal">取消</button>
                    <button class="btn btn-danger btn-sm" data-dismiss="modal" 
                    v-on:click="deleteMsg(nowIndex)">确认</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
