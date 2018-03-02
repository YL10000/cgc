var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    lastLoadTime: {},
    matchMessages:[
      {
        id:1,
        content:'创建一切宇宙万物的最基本万能单位是信息。'
      },
      {
        id: 2,
        content: '信息，指音讯、消息、通讯系统传输和处理的对象，泛指人类社会传播的一切内容。人通过获得、识别自然界和社会的不同信息来区别不同事物，得以认识和改造世界。'
      },
      {
        id: 3,
        content: '信息，指音讯、消息、通讯系统传输和处理的对象，泛指人类社会传播的一切内容。人通过获得、识别自然界和社会的不同信息来区别不同事物，得以认识和改造世界。'
      },
      {
        id: 4,
        content: '信息，指音讯、消息、通讯系统传输和处理的对象，泛指人类社会传播的一切内容。人通过获得、识别自然界和社会的不同信息来区别不同事物，得以认识和改造世界。'
      },
      {
        id: 5,
        content: '信息奠基人香农（Shannon）认为“信息是用来消除随机不确定性的东西”，这一定义被人们看作是经典性定义并加以引用。'
      },
      {
        id: 6,
        content: '信息是对客观世界中各种事物的运动状态和变化的反映，是客观事物之间相互联系和相互作用的表征，表现的是客观事物运动状态和变化的实质内容。'
      },
      {
        id: 7,
        content: '根据这几个特点，如果用数学上对数函数来表示，就正好可以表示信息量和消息发生的概率之间的关系式：I=-loga(P(x))。这样，信息不就可以被量化了吗？既然信息可以被量化，那么总得给它一个单位吧？人的体重是以公斤来计量的，人的身高是以米来计量的，那么信息量该以什么单位来计量呢？通常是以比特（bit）为单位来计量信息量的，这样比较方便，因为一个二进制波形的信息量恰好等于1bit。'
      },
      {
        id: 8,
        content: '南唐李中《暮春怀故人》诗：“梦断美人沉信息，目穿长路倚楼台。” 宋陈亮《梅花》诗：“欲传春信息，不怕雪埋藏。”《水浒传》第四四回：“ 宋江大喜，说道：“只有贤弟去得快，旬日便知信息。”巴金《家》三一：“二表哥的事情怎样了？为什么连信息也不给我一个？”'
      }
    ],
    personalMessages:[
      {
        id: 1,
        content: '个人信息泄露危害巨大，除了个人要提高信息保护的意识以外，国家也正在积极推进保护个人信息安全的立法进程。'
      },
      {
        id: 2,
        content: '随着互联网应用的普及和人们对互联网的依赖，互联网的安全问题也日益凸显。恶意程序、各类钓鱼和欺诈继续保持高速增长，同时黑客攻击和大规模的个人信息泄露事件频发，与各种网络攻击大幅增长相伴的，是大量网民个人信息的泄露与财产损失的不断增加。'
      },
      {
        id: 3,
        content: '研究发现，人为倒卖信息、PC电脑感染、网站漏洞、手机漏洞是目前个人信息泄露的四大途径。'
      },
      {
        id: 4,
        content: '自2011年国内最大的IT技术社区CSDN曝出泄密事件以后，网站被拖库和撞库事件不断发生。2014年，撞库攻击达到前所未有的高峰期。2014年，包括无秘（原秘密）、大众点评网、搜狐、安智网、汽车之家、搜狗、印象笔记等多家国内知名网站都遭到了撞库攻击，导致大量用户的个人信息泄露。'
      },
      {
        id: 5,
        content: '“黑洞门”引两会关注张德江指示制定网络安全法'
      },
      {
        id: 6,
        content: 'BSI英国标准协会于2009年正式发布BS 10012:2009个人信息管理体系(Personal Information Management System, PIMS)，此标准具体说明了对个人信息管理体系的各项要求，其提供了一个架构，让组织能维持和改善对数据保护法律及最佳实践的遵循，同时也是对ISO27001信息安全管理体系在个人信息保护方面的进一步深化，以在个人数据利用与保护之间进行合理的平衡，降低组织运营与合规方面的风险。'
      },
      {
        id: 7,
        content: 'PIMS是“个人信息管理体系”(Personal Information Management System)的缩写，是一套对个人信息进行保护的管理方法论，主要针对管理或使用个人信息的企业或组织，目的是保护个人隐私。'
      },
      {
        id: 8,
        content: '日程计划：一般以日历形式展示最为方便，目的是明确每日的日程和任务主题。”'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ currentFoot: app.globalData.currentFoot});
    console.log("onload ----"+this.data.currentFoot)
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
  
  //切换标签
  swichTab: function (e) {
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
      console.log("查询更多")
    }
  }

})