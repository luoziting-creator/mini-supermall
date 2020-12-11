
App({
  globalData: {
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1. 先从缓存中取出token
    const token = wx.getStorageSync('token')
    // 2.判断token是否有值
    if (token && token.length !== 0) { //已经有token。验证token是否已经过期了
      // 有token验证是否过期
      this.checkToken(token)

    } else {  //没有token进行登陆操作
      this.login()
     
    }

  },
  checkToken(token){
    console.log('执行了验证token的操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header: {
        token
      },
      success: (res)=>{
       if(!res.data.errCode) {
         this.globalData.token =token;
         console.log('token有效')
       } else {
         this.login()
       }
      },
      fail: function(err){
        console.log(err)
      }

    })


  },
  login(){
    console.log('执行了登录的操作')

     // 登录操作
      // code只有5分钟的有效期
      wx.login({
        success: (res) => {
          console.log(res)
          //1. 获取code
          const code = res.code;

          // 2.将code发送给服务器
          wx.request({
            url: 'http://123.207.32.32:3000/login',
            method: 'post',
            data: {
              code
            },
            success: (res) => {
              console.log(res)
              //1.取出token
              const token = res.data.token
              // 2. 将token保存到globalData中
              this.globalData.token = token;
              console.log(this.globalData.token)
              // 3.进行本地存储
              // setStorage异步  setStorageSync 同步
              wx.setStorageSync('token', token)

            }
          })
        }
      })
  }







})