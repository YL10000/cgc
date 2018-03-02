var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    currentFoot: app.globalData.currentFoot,
    login: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    var that=this;
    this.setData({ currentFoot: app.globalData.currentFoot });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(this.data.userInfo)
      }
    }

    

    console.log(this.data.userInfo)
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
    console.log("---------------onShow");
    var that=this;
    var value=wx.getStorageSync("login")
    if (value){
      console.log(value)
      that.setData({"login":value})
    }else{
      that.setData({ "login": false })
    }
    
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
  itemFoot: function (e) {
    this.data.currentFoot = e.target.dataset.index
    var that = this;
    //设置本页面的变量
    that.setData({ currentFoot: this.data.currentFoot });
    //设置全局变量
    //app.setGlobalData({ "currentFoot": this.data.currentFoot })
    console.log(this.data.currentFoot)
    app.footNavigation(e.target.dataset.index)
  },
  //去赔率计算页面
  toOddPage:function(e){
    wx.navigateTo({
      url: '/pages/myinfo/odds/odds'
    });
  },
  //去设置页面
  setPage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/set/set'
    });
  },
  //去消息页面
  messagePage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/message/message'
    });
  },

  //账号明细
  accountDetails:function(){
    wx.navigateTo({
      url: '/pages/myinfo/fortune/fortune'
    });
  },

  //充值页面
  recharge:function(){
    wx.navigateTo({
      url: '/pages/myinfo/recharge/recharge'
    });
  },

  //兑换记录
  exchangePage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/exchange/exchange'
    });
  },

  //帮助与反馈页面
  helpPage:function(){
    wx.navigateTo({
      url: '/pages/myinfo/help/help'
    });
  },

  login:function(){
    var that=this;
    wx.openSetting({

      success: function (data) {
        if (data.authSetting['scope.userInfo']) {
          console.log("拥有权限")
          //同步保存
          wx.setStorageSync('login', true)

          that.setData({ "login": true });
          console.log("登录完成")
        }else{
          console.log("没有权限")
        }
      }
    })
    /** 
    
    */
  }



})