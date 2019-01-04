
//上拉加载函数
//slideLoad('bottom',callback);   //第一个参数值为bottom或top,第二个上拉加载函数
function slideLoad(direction,callback){
    var startPosition, endPosition, flag = true,stop = false;
    var checkborder = function () {
        return ($(window).scrollTop() + $(window).height() > $(document).height() - 20) ? 'bottom' : ($(window).scrollTop() < 5) ? 'top' : null;
    };
    $(document).on('touchstart', function (e) {
        flag = checkborder();
        startPosition = e.touches[0].pageY;
    });
    $(document).on('touchcancel touchmove', function (e) {
        //e.preventDefault();
        endPosition = e.touches[0].pageY
        var diance = startPosition - endPosition;
        if (startPosition > endPosition && Math.abs(diance) >= 10) {
            if (flag == direction && !stop) {
                stop = true;
                callback(e);
                setTimeout(function(){stop = false;},1000); //防止加载多次
            }
        }
    });
};

