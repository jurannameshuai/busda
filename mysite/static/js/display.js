/**
 * Created by 李健 on 2017/9/14.
 */
(function() {
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = winW / 3.75 + "px";
    window.onresize = function() {
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        var tabberObj = document.getElementsByClassName('tabbar');
        document.documentElement.style.fontSize = winW / 3.75 + "px";
        if(winW>960){
            document.documentElement.style.fontSize = winW / 16 + "px";
            if(tabberObj.length>0){
                tabberObj[0].style='width:600px';
            }
        } else {
            if(tabberObj.length>0){
                tabberObj[0].style='';
            }
        }
    };
    if(winW>960){
        document.documentElement.style.fontSize = winW / 16 + "px";
        var tabberObj = document.getElementsByClassName('tabbar');
        if(tabberObj.length>0){
            tabberObj[0].style='width:600px';
        }
    }
})(window)