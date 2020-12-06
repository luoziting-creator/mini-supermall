// 注册一个小程序的示例
App({
  // 小程序默认两个小时之内用户关闭小程序，两个小时之内没有打开小程序的话会把小程序杀死，重新执行onLaunch，如果两个小时之内有打开的话，则会执行onshow函数

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('数据初始化完成 onLaunch')
    // 1.网络请求
    wx.request({
      url: '',
    })
    // 2.获取用户的相关信息
    // 异步调用
    wx.getUserInfo({
      
      // 数据拿到之后,在进行回调
      success:function(res){
        console.log(res)

      }
    })
    // setTimeout(()=>{
    //   const err= new Error()
    //    throw err
    // },1000)
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow(可能触发多次)
   * 小程序界面显示出来之后会执行的生命周期函数
   */
  // 可以在此函数中知道用户是通过那种方式进入小程序的，判断小程序的进入场景
  onShow: function (options) {
    console.log('数据初始化完成 onShow')
    console.log(options)
    switch (options.scence) {
      case 1001:
        break;
        case 1005:
        break;
    }


    // 2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递到服务器

    
  
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 小程序隐藏之后触发的函数
   */
  onHide: function () {
    console.log('小程序隐藏 onHide')
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序中发生了一些错误')
    
  },
  // 可以定义全局的数据，可以在组件之间共享
  globalData:{
    name:'lzt',
    age:18
  }
})
