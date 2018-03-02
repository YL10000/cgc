//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        var that=this;

		//myapid
        var appid ='my5f7dafa708d29f69';
		//mySecret 
        var secret ='55de93d7ee7a9651b36b3d3c7da97067';
        //调用request请求api转换登录凭证  
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + res.code,
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res) //获取openid  
            console.log("openid----" + res.data["openid"])
            that.setGlobalData({"openid":res.data["openid"]});
            console.log(that.globalData)
          }
        })  
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid:null,
    currentFoot: 0
  },

  //设置全局变量
  setGlobalData:function(obj){
    var datas = this.globalData;
    //变量要设置的属性集合
    for(var key in obj){
      this.globalData[key] = obj[key]
    }
  },
  //底部导航
  footNavigation:function(index){
    console.log("footNavigation");
    console.log(this.globalData.currentFoot, index, (this.globalData.currentFoot != index))
    if (this.globalData.currentFoot!=index){
      this.globalData.currentFoot=index;
      console.log("globalData---" + this.globalData.currentFoot);
      if(index==0){
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }else if(index==1){
        wx.redirectTo({
          url: '/pages/matchs/matchs'
        });
      } else if (index == 2) {
        wx.redirectTo({
          url: '/pages/shop/shop'
        });
      } else if (index == 3) {
        wx.redirectTo({
          url: '/pages/myinfo/myinfo'
        });
      }
    }
  }
})