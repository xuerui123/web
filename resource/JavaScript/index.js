$("#carousel_1").FtCarousel();
window.onload=function () {
    $('.product ul li').css('width',(document.body.clientWidth-80)/3+'px')
    function foucs(con) {

        var $container = $('#index_b_hero')
            , $imgs = $container.find('li.hero')
            , $leftBtn = $container.find('a.prev')
            , $rightBtn = $container.find('a.next')
            , config = {
            interval: con && con.interval || 350000000,
            animateTime: con && con.animateTime || 500,
            direction: con && (con.direction === 'right'),
            _imgLen: $imgs.length
        }
            , i = 0
            , getNextIndex = function (y) {
            return i + y >= config._imgLen ? i + y - config._imgLen : i + y;
        }
            , getPrevIndex = function (y) {
            return i - y < 0 ? config._imgLen + i - y : i - y;
        }
            , silde = function (d) {
            $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('left', (d ? '-1370px' : '1370px'))
            $imgs.animate({
                'left': (d ? '+' : '-') + '=685px'
            }, config.animateTime);
            i = d ? getPrevIndex(1) : getNextIndex(1);
        }
            , s = setInterval(function () {
            silde(config.direction);
        }, config.interval);
        $imgs.eq(i).css('left', 0).end().eq(i + 1).css('left', '685px').end().eq(i - 1).css('left', '-685px');
        $container.find('.hero-wrap').add($leftBtn).add($rightBtn).hover(function () {
            clearInterval(s);
        }, function () {
            s = setInterval(function () {
                silde(config.direction);
            }, config.interval);
        });
        $leftBtn.click(function () {
            if ($(':animated').length === 0) {
                silde(false);
            }
        });
        $rightBtn.click(function () {

            if ($(':animated').length === 0) {
                silde(true);
            }
        });
    }


    foucs()
    $('.down img').click(function () {
        $(document).scrollTop(2310)
    })
}
