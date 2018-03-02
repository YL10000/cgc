var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/01.png',
      '../images/02.png',
      '../images/03.png',
      '../images/04.png',
      '../images/05.png',
      '../images/06.png',
      '../images/07.png',
      '../images/08.gif',
      '../images/09.png',
      '../images/10.png',
      
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    currentPage:0,
    currentTab:0,
    currentFoot: app.globalData.currentFoot,
    lastLoadTime:{},
    method:1,
    clock:null,
    bettingFlag:false,
    //可投注的比赛
    ableMatchs:[
      {
        method:1,//冠军玩法
        name:"冠军",
        palyerName:"阿斯蒂芬",
        time:"2018-02-25 12:36:58"

      },
      {
        method:2,//胜负玩法
        name: "胜负120109-神龙",
        players:[
          {
            avater:'../images/player-01.png',
            name:"VGJ.Thunder",
            money:"3.00"
          },
          {
            avater: '../images/player-02.png',
            name: "NGA Gaming",
            money: "2.00"
          }
        ],
        time:"2018-03-25 13:36:25"
      },
      {
        method:3,//胜负串联玩法
        name: "胜负串联玩法",
        palyerName: "2018年上半年比赛",
        time: "2018-01-31 10:36:36"

      }
    ],

    //待揭晓的比赛
    waitMatchs: [
      {
        method: 1,//冠军玩法
        name: "冠军1203-1",
        palyerName: "冠军杯"

      },
      {
        method: 2,//胜负玩法
        name: "胜负-待揭晓",
        players: [
          {
            avater: 'http://192.168.1.10:8092/fs/img/team/2017/1115/lWSfTcY2Gb73lFa7kpzkr20x2XeOS0xI.jpg',
            name: "阿森纳",
            money: "1.88"
          },
          {
            avater: 'http://192.168.1.10:8092/fs/img/team/2017/1124/WYdipkUzuXGlH8rf34sPkiVt86Q2esul.png',
            name: "曼联",
            money: "1.73"
          }
        ]
      }
    ],

    //已结束的比赛
    endMatchs: [
      {
        method: 1,//冠军玩法
        name: "冠军1203-1",
        palyerName: "冠军杯"

      },
      {
        method: 2,//胜负玩法
        name: "胜负-已结束",
        players: [
          {
            avater: 'http://192.168.1.10:8092/fs/img/team/2017/1115/lWSfTcY2Gb73lFa7kpzkr20x2XeOS0xI.jpg',
            name: "阿森纳",
            money: "1.88",
            
          },
          {
            avater: 'http://192.168.1.10:8092/fs/img/team/2017/1124/WYdipkUzuXGlH8rf34sPkiVt86Q2esul.png',
            name: "曼联",
            money: "1.73",
            success: true
          }
        ]
      },
      {
        method: 3,//胜负串联玩法
        name: "胜负串联玩法",
        palyerName: "2018年上半年比赛"

      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ "method": options.method });
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
    console.log("show")
    console.log(this.data.ableMatchs)
    this.clocks();
    //this.data.clock=setInterval(this.clocks,1000)
    var lastLoadTime = this.data.lastLoadTime;
    for (var index = 0; index < 3; index++){
      lastLoadTime[index] = new Date().getTime();
      this.setData({ "lastLoadTime": lastLoadTime })
    }
    
  },


  clocks: function () {
    console.log("clocks");
    var matchs = this.data.ableMatchs;
    if (matchs && matchs.length > 0) {
      for (var i = 0; i < matchs.length; i++) {
        var end_time = matchs[i].time;
        var mills = new Date(end_time).getTime() - new Date().getTime()
        matchs[i].durion = formatDuring(mills)
      }
    }
    this.setData({ "ableMatchs": matchs });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("hide")
    clearInterval(this.data.clock)
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
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onPageScroll:function(){
    console.log("onPageScroll")
  },

  //点击具体某个比赛的图标事件
  itemDetail:function(e){
    this.data.currentPage = e.target.dataset.index
    var that = this; 
    that.setData({ "currentPage": this.data.currentPage }); 
    
    that.setData({ "currentTab": 0 }); 
  },
  
  //切换比赛详情中的菜单
  swichNav:function(e){
    
    this.data.currentTab = e.target.dataset.index
    var that = this;
    that.setData({ currentTab: this.data.currentTab });
    console.log(this.data.currentTab)
  },

  itemFoot:function(e){
    this.data.currentFoot = e.target.dataset.index
    var that = this;
    //设置本页面的变量
    that.setData({ currentFoot: this.data.currentFoot });
    //设置全局变量
    //app.setGlobalData({ "currentFoot": this.data.currentFoot})
    console.log(app.globalData)
    console.log(this.data.currentFoot)
    app.footNavigation(e.target.dataset.index)
    if (this.data.currentFoot!=0){
      clearInterval(this.data.clock)
    }
  },


  openDetail:function(e){
    var index = e.target.dataset.index;
    var currentTab = this.data.currentTab;
   
    var key="";
    if (currentTab==0){
      key ="ableMatchs";
      
    } else if (currentTab == 1){
      key = "waitMatchs";
      
    } else if (currentTab == 2) {
      key = "endMatchs";
     
    }

    var matchs = this.data[key];

    var details =[
        {
        avater:"../images/player-01.png",
          name:"地球",
          matchIndex:"第一局",
          odd:4.61
        },
        {
        avater: "../images/player-02.png",
          name: "葫芦娃",
          matchIndex: "第二局",
          odd: 1.32,
          success:true
        },
        {
          avater: "http://192.168.1.10:8092/fs/img/team/2017/1027/j6pIAMgdU2c4qqZMlahRyjWQ7PdjlfWz.png",
          name: "Start",
          matchIndex: "第三局",
          odd: 2.61
        }
      ]

    //胜负玩法
    if (matchs[index].method==2){
      details={
        kills:[
          {
            avater: "../images/player-01.png",
            name: "Start",
            odd: 1.98
          },
          {
            avater: "../images/player-02.png",
            name: "VGA Gaming",
            odd: 1.65,
            success:true
          }
        ],
        helps:[
          {
            avater: "../images/player-01.png",
            name: "Start",
            odd: 1.50
          },
          {
            avater: "../images/player-02.png",
            name: "VGA Gaming",
            odd: 2.25
          }
        ]
      }
    }
    matchs[index].details=details;
    if (matchs[index].open){
      matchs[index].open=0;
    }else{
      matchs[index].open = 1;
    }
    var obj=new Object();
    obj[key]=matchs;
    this.setData(obj);
  },

  openBetting:function(e){
    this.setData({ "bettingFlag": true });
  },

  closeBetting:function(e){
    this.setData({ "bettingFlag": false });
  },

  loadMore:function(e){
    var index = e.currentTarget.dataset.index;
    var lastLoadTime = this.data.lastLoadTime;
    var nowTime=new Date().getTime();
    //console.log(index + "----" + (nowTime - parseInt(lastLoadTime[index])));
    if ((nowTime - parseInt(lastLoadTime[index]))>1000){
      console.log(index + "----" + parseInt(lastLoadTime[index]))
      lastLoadTime[index] = nowTime;
      this.setData({ "lastLoadTime": lastLoadTime })

      //分页查询
    }
    
    
  }
  
})


function formatDuring(mss) {
  var days = parseInt(mss / (1000 * 60 * 60 * 24));
  
  var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = parseInt((mss % (1000 * 60)) / 1000);
  return (days>0?(days + "天" ):"")+ hours + ":" + minutes + ":" + seconds;
}