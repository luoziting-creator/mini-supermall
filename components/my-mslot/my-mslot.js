// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   * -----------------------1 让使用者可以给组件传入数据------------------------
   */
  properties: {
    // 两种写法：
    // 第一种
    title: String,
    // 第二种
    content: {
      type: String,
      value: ''
    }

  },
  // --------------------------2  定义一些组件的配置选项-----------------
  options: {
    // 使用多插槽时需要设置为true
    multipleSlots: true,
    // 样式的隔离方式
    // styleIsolation:'apply-shared',

  },

  /**
   *  ----------------------3 定义组件内部的初始化数据通过data----------------------
   */
  data: {

  },

  /**
   * ------------------------------------4  定义组件内部的函数------------------------------------
   */
  methods: {
    foo() {

    }

  },

  // -------------------------5   外界给组件传入额外的样式-------------------------
  externalClasses: [],

  // -----------------------------6   可以监听properties / data 的改变-------------------------------
  observers: {
    // 没有oldVal
    counter: function (newVal) {
    },
  },

  // ---------------------------------7 组件中监听生命周期函数--------------------------------
  // 1.组件本身有生命周期
  lifetimes:{
    created(){
      console.log('组件被创建出来时')

    },
    attached(){
      console.log('组件被添加到页面')

    },
    moved(){
      console.log('组件被移动另外一个节点时')
    },
    ready(){
      console.log('组件被渲染时候')
    },
    detached(){
      console.log('组件被移除掉')
    }


  },

  // 2.监听所在页面的生命周期
  pageLifetimes: {
    // 监听组件所在页面显示出来时的生命周期
    show() {
      console.log('监听组件所在页面显示出来时')

    },
    // 监听所在所在页面隐藏起来时
    hide(){
      console.log(' 监听所在所在页面隐藏起来时')


    },
    // 监听页面尺寸的改变
    resize() {
      console.log('监听页面尺寸的改变')
    }
  }
})