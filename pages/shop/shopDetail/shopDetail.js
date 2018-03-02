// pages/shop/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    count:1,
    good:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var good=JSON.parse(options['good'])
    console.log(good)
    this.setData({good:good})
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
  
  },

  subtractCount:function(){
    var count = this.data.count;
    if (count>0){
      this.setData({count:count-1})
    }
  },

  addCount:function(){
    var count = this.data.count;
    if (count <100000) {
      this.setData({ count: parseInt(count) + 1 })
    }
  },

  rechargeGood:function(){
    this.setData({
      showModal: true
    })
  },

  changeCount:function(e){
    var count=e.detail.value;
    if (count>=0){
      this.setData({count:count})
    }
  },

  /**
     * 弹出框蒙层截断touchmove事件
     */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  }
})