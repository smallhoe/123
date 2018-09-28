var util = require("../../utils/util.js");
var bmap = require("../../libs/bmap-wx.min.js");
var checkWeather = require("../../utils/checkWeather.js");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentResult: {
      cn: "",
      pm: "",
      sswd: "",
      tp: "",
      wd: "",
      fl: ""
    },
      paramStr:"",
      bj:"",
      sh:"",
      gz:""
  },



  /**
  * 点击查询
  */
  // 监听输入框的值
  search_input: function (e) {

    var res = e.detail.value;
    this.setData({
      inpVal: res
    })
    var cityName = this.data.inpVal;
    
    // 所有的城市
    var cityInfo = util.allcitys;
    // 变量 拼接经纬度 
    var paramStr = "";
    for (var i = 0; i < cityInfo.length; i++) {

      if (cityName == cityInfo[i].city) {

        paramStr += cityInfo[i].lng + "," + cityInfo[i].lat
      }
    }
    console.log(cityName)
    var _this = this;
    _this.setData({
      paramStr: paramStr,
      
    })
    
  },
 
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var str = options.jwd;
    console.log(str)
    checkWeather.checkWeather(str, function (data) {
      console.log(data)
      var weatherData = data.currentWeather[0];
      var index = data.originalData.results[0].index;
      that.setData({
        currentResult: {
          cn: weatherData.currentCity,
          pm: weatherData.pm25,
          sswd: weatherData.date.substring(14, 17),
          tp: weatherData.temperature,
          wd: weatherData.weatherDesc,
          fl: weatherData.wind
        },
        bj: '116.407395,39.904211',
        sh: '121.473701,31.230416',
        gz: '113.264385,23.12911'
      });
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
    
  }
})