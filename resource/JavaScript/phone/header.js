$('.menu').click(function () {
    $('.navList').css('display','block');
    $('.menu').css('display','none')
    $('.close').css('display','block');
    $('body').css({'position':'fixed',"width":"100%"});

})
$('.close').click(function () {
    $('.navList').css('display','none');
    $('.close').css('display','none')
    $('.menu').css('display','block');
    $("body").css({"position":"initial","height":"auto"});

})
$('.jiejue').click(function () {
    if($('.children').css('display')=='block'){
        $('.children').css('display','none');
    }else{
        $('.children').css('display','block');
    }

})
function code(e) {
    $('.codebox').css('display','block')
    // $('body,html').addClass('notScroll');
    $(e).css('display','block')
}
function hidcode(){
    $('.codebox').css('display','none')
    $('.codebox img').css('display','none')
}