let bannerwidth = window.outerWidth;
let bannerheight = window.outerHeight;
$('.banner').css('width',bannerwidth);
// $('.banner').css('height',bannerheight-60);
$('.banner ul').css('width',bannerwidth*3);
// $('.banner ul').css('height',bannerheight-60);
$('.banner li').css('width',bannerwidth);
// $('.banner li').css('height',bannerheight-60);
$('.banner img').css('width',bannerwidth);
// $('.banner img').css('height',bannerheight-60);

$.mggScrollImg('.banner ul ', {
    loop: true,//循环切换
    auto: true,//自动切换
    callback: function (ind) {//这里传过来的是索引值
        if(ind==0){
            $('.yuan .i1').addClass("active").siblings("span").removeClass("active");
        }else if(ind==1){
            $('.yuan .i2').addClass("active").siblings("span").removeClass("active");
        }else if(ind==2){
            $('.yuan .i3').addClass("active").siblings("span").removeClass("active");
        }
    }
});