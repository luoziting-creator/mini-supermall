

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    age:1,
    name:'lzt',
    index:0,
    title:'流行',
    isShow:true

  },
  handelEventBtn(event){
    console.log(event)
    this.setData({
      counter:this.data.counter+1,
      age:event.detail.age,
      name:event.detail.name,
    })
  },
  tabcontrolclick(event){
    console.log(event)
    this.setData({
      index:event.detail.index,
      title:event.detail.title,

    })
  },
  handleIncCrementCpn(){
    // 最终的目的： 修改my-select 的counter
    // 获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    console.log(my_sel)
    // 2，通过setData修改组件内的数据(不合理)
    // my_sel.setData({
    //   counter:my_sel.data.counter+10

    // })
    // 3 通过方法对数据进行修改
    my_sel.incrementCount(10)

  },
  handlechangeshow(){
      this.setData({
        isShow:!this.data.isShow
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})