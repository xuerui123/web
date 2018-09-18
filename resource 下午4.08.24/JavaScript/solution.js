var height = window.innerHeight ||(document.documentElement&&document.documentElement.clientHeight)||document.body.clientHeight;
$('.s_div').css('height',height)
$('.choose .left').click(function () {
    $('.choose .left').addClass('active')
    $('.choose .right').removeClass('active')
    $('.hotel').css('display','none')
    $('.home').css('display','block')
})
$('.choose .right').click(function () {
    $('.choose .right').addClass('active')
    $('.choose .left').removeClass('active')
    $('.home').css('display','none')
    $('.hotel').css('display','block')
})