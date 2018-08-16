// components/moveList/moveList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: '../../images/movie1.png'
    },

    movieName: {
      type: String,
      value: '电影名'
    },

    score: {
      type: String,
      value: '评分'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    starts: [{
      status: 'full'
    }, {
      status: 'full'
    }, {
      status: 'full'
    }, {
      status: 'half'
    }, {
      status: 'none'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
