// components/my-style/my-style.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   

  },
  options:{
    // 在components 对象中，可以传入一个options属性中有一个styleIsolation（隔离）属性，
    // styleIsolation有三个值：  
    // 1.  isolated  表示启用样式隔离，在自定义组件外，使用class指定的样式将不会相互影响
    // 2.  apply-shared  表示页面wxss样式将影响自定义组件，但是自定义组件wxss中呢贵指定的样式不会影响页面
    // 3. shared 表示页面wxss演示将影响到自定义组件，自定义组件wxss中给指定的样式也会影响到页面和其他设置
    styleIsolation:'apply-shared',
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
