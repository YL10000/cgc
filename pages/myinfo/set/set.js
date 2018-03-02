// pages/myinfo/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
       console.log("授权信息")
       console.log(res)
       res.authSetting['scope.userInfo']=false;
      }
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
  
  },

  /**
   * 去修改密码
   */
  toUpdatePassword:function(e){
    wx.navigateTo({
      url: '/pages/myinfo/set/password/password'
    });
  },

  /**
   * 清空缓存
   */
  clearCache:function(){
    wx.showModal({
      title: '',
      content: '确定清除缓存吗？',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorageSync()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 去玩法介绍
   */
  toPayerPage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/set/payer/payer'
    });
  },

  /**
   * 去规则与条款
   */
  toRulePage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/set/rule/rule'
    });
  },

  /**
   * 去赔率计算表
   */
  toOddsPage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/set/odds/odds'
    });
  },

  //退出登录
  logout:function(){
    wx.setStorage({
      key: "login",
      data: false
    })
    wx.navigateBack(1)
  }
})