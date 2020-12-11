// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'

  },
  handlepushdetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?title="您好啊"',
    })
    // wx.redirectTo({
    //   url: 'url',
    // })
  }

  
})