// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent: "",
    history: [],
    hot: ["升级","爱情公寓","成人"]
  },

  /**搜索框输入 */
  search: function(e) {
    this.setData({
      searchContent: e.detail.value
    });
  },

  /**搜索 */
  complete: function() {
    var arr = [];
    arr = this.data.history;
    arr.push(this.data.searchContent);
    wx.setStorage({
      key: "history",
      data: arr,
    })
  },

  /**取消 */
  cancel: function() {
    wx.reLaunch({
      url: '../index/index',
    })
  },

  /**历史记录点击 */
  historyClick: function(e) {
    this.setData({
      searchContent: e.target.dataset.value
    });
  },

  /**清除 */
  clear: function() {
    this.setData({
      history: []
    });
    wx.setStorage({
      key: "history",
      data: [],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'history',
      success: function (res) { 
        that.setData({
          history: res.data.reverse()
        });
      },
    })
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