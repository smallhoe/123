var util = require("../../utils/util.js");
var bmap = require("../../libs/bmap-wx.min.js");
var checkWeather = require("../../utils/checkWeather.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    index:[],
    result: [],
    optStr:"",
    index:0,//索引值  从0开始
    dayUrl:"",
    nightUrl:"",
    currentResult:{
      cn:"",
      pm:"",
      sswd:"",
      tp:"",
      wd:"",
      fl:""
    },
   
    inputVal:""
  },
  // 自定义函数
  tab_click:function(e){ //事件对象
    var tabVal = e.currentTarget.dataset.current;
    var _this = this;
    if (_this.data.tab == tabVal){
      return;
    }else {
      _this.setData({
        index:tabVal
      })
    }
  },
  // 点击查询
 
  // 记录输入框的值
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   
    // console.log(h)

    var that = this;
    // checkWeather.checkWeather('',function(data){
    //   console.log(data)
    //     var weatherData = data.currentWeather[0];
    //     var wd = data.originalData.results[0].weather_data;
    //     wd[0].date="今天";
    //     wd[1].date = "明天";
    //     var index = data.originalData.results[0].index;
    //     that.setData({
    //       //谁是数组[]  ， 谁是对象{}
    //       dayUrl: data.originalData.results[0].weather_data[0].dayPictureUrl,
    //       nightUrl: data.originalData.results[0].weather_data[0].nightPictureUrl,
    //       index:index,
    //       result: wd,
    //       currentResult:{
    //         cn: weatherData.currentCity,
    //         pm: weatherData.pm25,
    //         sswd: weatherData.date.substring(14,17),
    //         tp: weatherData.temperature ,
    //         wd: weatherData.weatherDesc ,
    //         fl: weatherData.wind
    //       }
    //     });
    // })
    var str = options.jwd;
    console.log(str)
    checkWeather.checkWeather(str, function (data) {
      console.log(data)
      var weatherData = data.currentWeather[0];
      var wd = data.originalData.results[0].weather_data;
      wd[0].date = "今天";
      wd[1].date = "明天";
      var index = data.originalData.results[0].index;
      that.setData({
       
        //谁是数组[]  ， 谁是对象{}
        dayUrl: data.originalData.results[0].weather_data[0].dayPictureUrl,
        nightUrl: data.originalData.results[0].weather_data[0].nightPictureUrl,
        index: index,
        result: wd,
        currentResult: {
          cn: weatherData.currentCity,
          pm: weatherData.pm25,
          sswd: weatherData.date.substring(14, 17),
          tp: weatherData.temperature,
          wd: weatherData.weatherDesc,
          fl: weatherData.wind
        }
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