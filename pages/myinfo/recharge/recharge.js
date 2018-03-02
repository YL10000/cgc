// pages/myinfo/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aggree:false,
    lastLoadTime: {},
    goods: [
      {
        id: 1,
        image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/cVgQPAXPAanryDDVapRYiUCZZD0mqcDc.png',
        name: "手机充值卡",
        money: "100",
        fortune:"100"
      },
      {
        id: 2,
        image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/p7bVZdqwO2eDb4nqCjxpvMs6simfxBGY.png',
        name: "手机充值卡",
        money: "200",
        fortune: "110"
      }, {
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/URLWH8ojq8pU3Rb3SjvIb1MwZNqGzrtb.png',
        name: "手机充值卡",
        money: "150",
        fortune: "150"
      },
      {
        id: 3,
        image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
        name: "手机充值卡",
        money: "100",
        fortune: "101"
      },
      {
        id: 4,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/j6pIAMgdU2c4qqZMlahRyjWQ7PdjlfWz.png',
        name: "手机充值卡",
        money: "200",
        fortune: "210"
      },
      {
        id: 5,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/DHH92QdysvML91nRxemmM4vtUwKyPn6j.png',
        name: "手机充值卡",
        money: "150",
        fortune: "150"
      },
      {
        id: 6,
        image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
        name: "手机充值卡",
        money: "100",
        fortune: "101"
      },
      {
        id: 7,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/j6pIAMgdU2c4qqZMlahRyjWQ7PdjlfWz.png',
        name: "手机充值卡",
        money: "200",
        fortune: "210"
      },
      {
        id: 8,
        image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/DHH92QdysvML91nRxemmM4vtUwKyPn6j.png',
        name: "手机充值卡",
        money: "150",
        fortune: "150"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  changeCheck:function(){
    var aggree = this.data.aggree;
    this.setData({ aggree: !aggree})
    console.log("changeCheck")
  },

  readPayAgreement:function(){
    console.log("readAgreement")
    wx.navigateTo({
      url: '/pages/myinfo/recharge/agreement/agreement'
    });
  },

  launchPay:function(){
    
  },

  viewLog:function(){
    wx.navigateTo({
      url: '/pages/logs/logs'
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


function getNum() {
  var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var nums = "";
  for (var i = 0; i < 32; i++) {
    var id = parseInt(Math.random() * 61);
    nums += chars[id];
  }
  return nums;
}  