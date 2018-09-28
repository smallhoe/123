var bmap = require("../libs/bmap-wx.min.js");
var util = require("util.js");
function checkWeather(location,callback){
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: util.config.ak
    });
    var fail = function (data) {
      console.log(data)
    };
    // 这是百度地图提供的API , 请求api成功返回的data
    var success = function (data) {
      callback(data);
    }
    // 发起weather请求  116.43,40.75
    BMap.weather({
      location: location,
      fail: fail,
      success: success
    }); 
}
module.exports = {
  checkWeather: checkWeather
}