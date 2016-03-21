(function() {

    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */
    var array = [];
    for (var i in aqiData) {
        // alert(aqiData[i])
        if (aqiData[i][1] > 60) {
            array.push(aqiData[i]);
        }
    }
    array.sort(function(pre,next) {
        return next[1]-pre[1];
    });
    var result = '';
    for (i = 0; i < array.length; i++) {
        result += '<li>第' + (i + 1) + '名：' + array[i][0] + ' ' + array[i][1] + '</li>';
    }
    document.getElementById('aqi-list').innerHTML = result;
})();