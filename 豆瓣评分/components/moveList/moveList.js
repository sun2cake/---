// components/moveList/moveList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: 'url'
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
    stars: []
  },

  attached: function() {
    var fullStar = parseInt(parseFloat(this.data.score) / 2);
    var halfStar = Math.round(parseFloat(this.data.score) / 2)-fullStar;
    var arr = [];
    for (var i = 0; i < fullStar; i++) {
      arr.push({"status":"full"});
    }
    for (var j = 0; j < halfStar; j++) {
      arr.push({ "status": "half" });
    }
    for (var k = arr.length; k < 5; k++) {
      arr.push({ "status": "none" });
    }
    this.setData({
      stars: arr
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lookDetail() {
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
  }
})
