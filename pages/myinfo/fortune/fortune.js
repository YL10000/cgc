// pages/fortune/fortune.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    lastLoadTime: {},
    incomes:getIncomes(),
    outcomes:getoutcomes()
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
    for (var index = 0; index < 2; index++) {
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

  //切换标签
  swichTab:function(e){
    this.data.currentTab = e.target.dataset.index
    var that = this;
    that.setData({ currentTab: this.data.currentTab });
    console.log(this.data.currentTab)
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

function getIncomes(){
  var incomes=[];
  for(var i=0;i<10;i++){
    incomes.push({ money: 100, time:'2018-01-05 12:00:00'});
  }
  return incomes;
}

function getoutcomes() {
  var outcomes = [];
  for (var i = 0; i < 10; i++) {
    outcomes.push({ money: 100, time: '2018-01-05 12:00:00' });
  }
  return outcomes;
}