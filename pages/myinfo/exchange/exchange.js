// pages/myinfo/exchange/exchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastLoadTime: {},
    goods: getJSONList()
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

      var goods=this.data.goods;
      var newGoods=getJSONList();
      goods=goods.concat(newGoods)
      this.setData({ "goods": goods })
    }
  }

})

function getJSONList(){
  return [
    {
    id:1,
    name:'手机充值卡',
    money:100,
    image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/cVgQPAXPAanryDDVapRYiUCZZD0mqcDc.png',
    fortune:100,
    status:0,//0 兑换中 ，1 已兑换
    time:'2017-12-12 12:00:00'
    },
    {
      id: 2,
      name: '手机充值卡',
      money: 150,
      image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/p7bVZdqwO2eDb4nqCjxpvMs6simfxBGY.png',
      fortune: 150,
      status: 1,//0 兑换中 ，1 已兑换
      time: '2017-12-12 12:00:00'
    },
    {
      id: 3,
      name: '手机充值卡',
      image: 'http://192.168.1.10:8092/fs/img/team/2017/1027/URLWH8ojq8pU3Rb3SjvIb1MwZNqGzrtb.png',
      money: 100,
      fortune: 100,
      status: 0,//0 兑换中 ，1 已兑换
      time: '2017-12-12 12:00:00'
    },
    {
      id: 4,
      name: '手机充值卡',
      image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
      money: 100,
      fortune: 100,
      status: 0,//0 兑换中 ，1 已兑换
      time: '2017-12-12 12:00:00'
    },
    {
      id: 5,
      name: '手机充值卡',
      image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
      money: 100,
      fortune: 100,
      status: 0,//0 兑换中 ，1 已兑换
      time: '2017-12-12 12:00:00'
    },
    {
      id: 6,
      name: '手机充值卡',
      image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
      money: 100,
      fortune: 100,
      status: 0,//0 兑换中 ，1 已兑换
      time: '2017-12-12 12:00:00'
    },
    {
      id: 7,
      name: '手机充值卡',
      image: 'http://192.168.1.10:8092/fs/img/ad/2017/1027/5L8rx4MpwUtVeQ3FAsJqBmBw6cSIxr14.png',
      money: 100,
      fortune: 100,
      status: 0,//0 兑换中 ，1 已兑换
      time: '2017-12-12 12:00:00'
    }
  ]
}