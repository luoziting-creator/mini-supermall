// pages/home/home.js
// getApp()获取app.js中App()产生的示例对象（globalData）
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
const name = app.globalData.name
const age = app.globalData.age
// 注册一个页面
Page({

  /**
   *----------------------------------------------1.初始化数据---------------------------------------
   */
  data: {
    name: 'lzt',
    age: 18,
    students: [{
        id: 1,
        name: 'kobe',
        age: 18
      },
      {
        id: 2,
        name: 'kucy',
        age: 20
      },
      {
        id: 3,
        name: 'mark',
        age: 21
      },
      {
        id: 4,
        name: 'lucy',
        age: 15
      },
    ],
    counter: 0,
    list: [],
  },
  // ---------------------------------------------------2.监听wxml中相关的一些事件-----------------------------------------------

  increment() {
    // 错误的做法,不会实现双向数据绑定
    // this.data.counter++
    // 2，this.setData()
    this.setData({
      counter: this.data.counter++
    })
    console.log(this.data.counter++)

  },
  decrement() {
    this.setData({
      counter: this.data.counter - 1
    })

  },
  handleUserInfo(event) {
    console.log(event)

  },
  // *-------------------------------------------3.监听其他事件-------------------------------------
  // 监听页面的滚动
  onPageScroll(obj){
    // console.log(obj)

  },
   /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('下拉到底部的事件')
  },
  /* 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function () {
   // console.log('onPullDownRefresh')
   console.log('下拉刷新的事件')


 },


  /**
   * -------------------------------------------4.监听页面的生命周期函数--------------------------------------
   * 监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })

      }

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')


  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')


  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})