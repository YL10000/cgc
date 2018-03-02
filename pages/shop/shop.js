// pages/shop/shop.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFoot: app.globalData.currentFoot,
    lastLoadTime: {},
    goods:[
      {
        id:1,
        image:'http://192.168.1.10:8092/fs/img/ad/2017/1027/cVgQPAXPAanryDDVapRYiUCZZD0mqcDc.png',
        name:"手机充值卡",
        money:"100"
      },
      {
        id: 2,
        image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/p7bVZdqwO2eDb4nqCjxpvMs6simfxBGY.png',
        name: "手机充值卡",
        money: "200"
      }, {
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/URLWH8ojq8pU3Rb3SjvIb1MwZNqGzrtb.png',
        name: "手机充值卡",
        money: "150"
      },
      {
        id: 3,
        image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
        name: "手机充值卡",
        money: "100"
      },
      {
        id: 4,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/j6pIAMgdU2c4qqZMlahRyjWQ7PdjlfWz.png',
        name: "手机充值卡",
        money: "200"
      }, 
      {
        id: 5,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/DHH92QdysvML91nRxemmM4vtUwKyPn6j.png',
        name: "手机充值卡",
        money: "150"
      }, 
      {
        id: 6,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/PBiFZQ4J9tsosVrS5yhxKwMFCOql5i9n.png',
        name: "手机充值卡",
        money: "100"
      },
      {
        id: 7,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/QmsIoserL2uQnpk8guKayXj9AyY7pMzs.png',
        name: "手机充值卡",
        money: "200"
      }, 
      {
        id: 8,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/Kr7bp7Q8EdcWkdJKlbsT9tiHDcst1cwI.png',
        name: "手机充值卡",
        money: "150"
      },
      {
        id: 9,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/DHH92QdysvML91nRxemmM4vtUwKyPn6j.png',
        name: "手机充值卡",
        money: "150"
      },
      {
        id: 10,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/PBiFZQ4J9tsosVrS5yhxKwMFCOql5i9n.png',
        name: "手机充值卡",
        money: "100"
      },
      {
        id: 11,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/QmsIoserL2uQnpk8guKayXj9AyY7pMzs.png',
        name: "手机充值卡",
        money: "200"
      },
      {
        id: 12,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/Kr7bp7Q8EdcWkdJKlbsT9tiHDcst1cwI.png',
        name: "手机充值卡",
        money: "150"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ currentFoot: app.globalData.currentFoot });
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
    lastLoadTime[0] = new Date().getTime();
    this.setData({ "lastLoadTime": lastLoadTime })
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

  goodDetail:function(e){
    var index = e.target.dataset.index
    console.log(index)
    var good=this.data.goods[index]
    wx.navigateTo({
      url: '/pages/shop/shopDetail/shopDetail?good='+JSON.stringify(good)
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
      console.log("查询更多")
    }
  }
})