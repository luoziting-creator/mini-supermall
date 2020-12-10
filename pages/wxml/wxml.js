// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "你好，小程序",
    firstname: 'kobe',
    lastname: 'hecke',
    age: 20,
    time: new Date().toLocaleString(),
    isActive:false,
    isShow:false,
    score: 8,
    movies:['相机穿越','大话西游','西游记'],
    nums:[
      [12,13,14,16],
      [22,23,24,26],
      [32,33,34,36],
    ],
    letters:['a','b','c'],
    titles:['衣服','鞋子','帽子']

  },
  handleSwitchColor(){
    this.setData({
     isActive:!this.data.isActive

    })


  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow

    })
  },
  handleIncrment(){
    this.setData({
      score:this.data.score+6,
     
    })

  },
  handleClick(){
    console.log('1111')

  },
  // -------------------------------常见的事件-------------------------
  handletouchstart(){
    console.log('handletouchstart')

  },
  handletouchmove(){
    console.log('handletouchmove')

  },
  handletouchend(){
    console.log('handletouchend')

  },
  handletap(){
    console.log('handletap')

  },
  handlelongpress(){
    console.log('handlelongpress')

  },
  // ----------------------------------------------事件对象的分析---------------------------
  handleEventClick(event){
    console.log('1111111111111',event)

  },
  handleeventend(event){
    console.log('++++++++++++++++++',event)
  },
  handleInner(event){
    console.log('222222222222222',event)

  },
  handleOuter(event){
    console.log('6666666666',event)
  },
  // -----------------------事件的传递参数--------------------------
  handleItemClick(event){
    console.log('333333333333',event)
    const dataset= event.currentTarget.dataset;
    const index =  dataset.index;
    const title = dataset.item;
    console.log(index,title)


  },
  //   ----------------------------事件冒泡和事件捕获
  handleCaptureView1(){
    console.log('handleCaptureView1')

  },
  handleBindView1(){
    console.log('handleBindView1')

  },
  handleCaptureView2(){
    console.log('handleCaptureView2')

  },
  handleBindView2(){
    console.log('handleBindView2')

  },
  handleCaptureView3(){
    console.log('handleCaptureView3')

  },
  handleBindView3(){
    console.log('handleBindView3')

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()


      })

    }, 1000)

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