// pages/home/home.js
import request from '../../service/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  ------------------------------------------------------原生的方式发送网络请求------------------------------------------------
    this. get_data_origin()
    // ------------------------------------------------------使用封装的request发送网络请求----------------------------------------------
    // 使用promise最大的好处就是降低和wx.request的耦合度和在使用promise的时候让别人在用的时候使用链式编程来拿到结果来防止回调地狱
    request({
      url:'http://152.136.185.210:7878/api/m5/recommend',
    }).then(res=>{
      console.log(res)

    }).catch(err=>{
      console.log(err)
    })
   
  },
  get_data_origin(){
     // 发送网络请求
    // 1.基本的网络请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/recommend',
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
    // get请求但是携带参数
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
    // 3.post请求并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data: {
    //     name:'lzt',
    //     age:18
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  }
})