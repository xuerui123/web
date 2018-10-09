var height = window.innerHeight ||(document.documentElement&&document.documentElement.clientHeight)||document.body.clientHeight;
$('.s_div').css('height',height)
$('.choose .left').click(function () {
    $('.choose .left').addClass('active')
    $('.choose .right').removeClass('active')
    $('.hotel').css('display','none')
    $('.home').css('display','block')
});
$('.choose .right').click(function () {
    $('.choose .right').addClass('active')
    $('.choose .left').removeClass('active')
    $('.home').css('display','none')
    $('.hotel').css('display','block')
});

let title = decodeURIComponent(window.location.search.split('?')[1])
let titleArr = title.split('&');
let titleObj = {};
for(let i =0;i<titleArr.length;i++){
    titleObj[titleArr[i].split('=')[0]] =titleArr[i].split('=')[1]
}
if(titleObj.key=='left'){
    $('.choose .left').addClass('active')
    $('.choose .right').removeClass('active')
    $('.hotel').css('display','none')
    $('.home').css('display','block')
}else if(titleObj.key=='right'){
    $('.choose .right').addClass('active')
    $('.choose .left').removeClass('active')
    $('.home').css('display','none')
    $('.hotel').css('display','block')
}