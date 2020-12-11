// pages/detail/detail.js
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
    console.log(options)

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面退出')
    // 获取首页的页面对象
    // getCurrentPages 当前的所有的页面
    const pages = getCurrentPages()
    console.log(pages)
    const home = pages[pages.length-2]
    // 调用页面对象的setdata方法
    home.setData({
      title:'呵呵呵'

    })


  },
  handlebackhome(){
    wx.navigateBack({
      delta: 0,
    })
  }
})