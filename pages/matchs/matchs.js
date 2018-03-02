// pages/myinfo/matchs/matchs.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFoot: app.globalData.currentFoot,
    currentTab: 0,
    lastLoadTime: {},
    matchs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ currentFoot: app.globalData.currentFoot });
    var matchs=getMatchs();
    this.setData({ matchs: matchs });
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
    var lastLoadTime = this.data.lastLoadTime;
    for (var index = 0; index < 3; index++) {
      lastLoadTime[index] = new Date().getTime();
      this.setData({ "lastLoadTime": lastLoadTime })
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

  toMatchDetailPage:function(e){
    var method = e.currentTarget.dataset.method;
    wx.navigateTo({
      url: '/pages/matchs/detail/detail?method='+method
    });
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

  //切换标签
  swichTab: function (e) {
    this.data.currentTab = e.target.dataset.index
    var that = this;
    that.setData({ currentTab: this.data.currentTab });
    console.log(this.data.currentTab)
  },

  //去竞猜
  toMatch:function(){
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },

  loadMore: function (e) {
    var index = e.currentTarget.dataset.index;
    var lastLoadTime = this.data.lastLoadTime;
    var nowTime = new Date().getTime();
    //console.log(index + "----" + (nowTime - parseInt(lastLoadTime[index])));
    if ((nowTime - parseInt(lastLoadTime[index])) > 1000) {
      console.log(index + "----" + parseInt(lastLoadTime[index]))
      lastLoadTime[index] = nowTime;
      this.setData({ "lastLoadTime": lastLoadTime })

      //分页查询
    }


  }
})

function getMatchs(){
  return [
    {
      id: 1,
      method:1,
      payMoney: 1000,
      status: 0,//0待揭晓，1已结束
      payTime: "2018-01-24 03:53"
    },
    {
      id: 2,
      method: 1,
      payMoney: 1000,
      backMoney: 2000,
      status: 1,//0待揭晓，1已结束
      payTime: "2018-01-14 03:53"
    }, {
      id: 1,
      method: 2,
      payMoney: 500,
      status: 0,//0待揭晓，1已结束
      payTime: "2018-01-24 03:53"
    },
    {
      id: 1,
      method: 3,
      payMoney: 800,
      backMoney: 1500,
      status: 1,//0待揭晓，1已结束
      payTime: "2018-01-24 03:53"
    }
  ];
}