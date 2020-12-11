// pages/home/home.js
// const app = getApp()

Page({

  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      // Image: '/assets/icon/icon.png'
      mask: true,
      success: function () {
        console.log('展示成功')
      },
      fail: function () {
        console.log('展示失败')
      },
      complete: function () {
        console.log('完成函数的调用')
      },
    })

  },
  handleShowModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      cancelText: '退出',
      cancelColor: '#ccc',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(() => {
      // 必须手动调取hideLoading才会让loading消失
      wx.hideLoading()

    }, 1000)
  },
  handleshowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function (res) {
        console.log(res)
        switch (res.tapIndex) {
          case 0:
            console.log('客户点击了相册')
            break;
          case 1:
            console.log('客户点击了拍照')
            break
        }
      }
    })
  },
  onShareAppMessage(options) {
    return {
      title: '你好啊',
      path: '/pages/home/home',
      // imageUrl:'图片的地址： 本地图片或者网络图片'

    }



  }
})