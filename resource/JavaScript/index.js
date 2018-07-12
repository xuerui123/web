$("#carousel_1").FtCarousel();
window.onload=function () {

    let productH = $('.product img')[0].height;
    let productW = document.body.clientWidth<1200?1200:document.body.clientWidth*0.265625;
    let productML = document.body.clientWidth<1200?1200:document.body.clientWidth*0.05078125;
    $('.product .list').css('height',productH+'px');
    $('.product li').css('width',productW+'px');
    $('.product li').css('margin-left',productML+'px');
    $('.product ul').css('width',productW*4 + productML * 5+'px');
    $('.product ul').css('left',0);
    $('.product .prev').click(function () {
        setTimeout(function () {
            let left = parseInt($('.product ul').css('left'));
            if(left< -productML ){
                $('.product ul').animate({left : 0 +'px'});
            }else{
                left = left - productW - productML;
                $('.product ul').animate({left : left +'px'});
            }
        },300)


    })
    $('.product .next').click(function () {
        setTimeout(function () {
            let left = parseInt($('.product ul').css('left'));
            if(left>-productW){
                $('.product ul').animate({left : -(productW + productML) +'px'});
            }else{
                left = left + productW + productML;
                $('.product ul').animate({left : left +'px'});
            }
        },300)
    })
}