let title = decodeURIComponent(window.location.search.split('?')[1])
let titleArr = title.split('&');
let titleObj = {};
for(let i =0;i<titleArr.length;i++){
    titleObj[titleArr[i].split('=')[0]] =titleArr[i].split('=')[1]
}
if(window.innerWidth<1400){
    $('.sidebar').css('display','none')
}
if(titleObj.num==1){
    $(document).scrollTop(10)
    $('.sidebar a').eq(0).delay(300).addClass("active").siblings("a").removeClass("active");
}else if(titleObj.num==2){
    $(document).scrollTop(510)
    $('.sidebar a').eq(1).delay(300).addClass("active").siblings("a").removeClass("active");
}else if(titleObj.num==3){
    $(document).scrollTop(1430)
    $('.sidebar a').eq(2).delay(300).addClass("active").siblings("a").removeClass("active");
}else if(titleObj.num==4){
    $(document).scrollTop(2340)
    $('.sidebar a').eq(3).delay(300).addClass("active").siblings("a").removeClass("active");
}else if(titleObj.num==5){
    $(document).scrollTop(2840)
    $('.sidebar a').eq(4).delay(300).addClass("active").siblings("a").removeClass("active");
}else{
    $('.sidebar a').eq(0).delay(300).addClass("active").siblings("a").removeClass("active");
}
$(window).scroll(function () {
    if($(document).scrollTop()<510){
        $('.sidebar a').eq(0).delay(300).addClass("active").siblings("a").removeClass("active");
    }else if($(document).scrollTop()>510&&$(document).scrollTop()<1430){
        $('.sidebar a').eq(1).delay(300).addClass("active").siblings("a").removeClass("active");
    }else if($(document).scrollTop()>1430&&$(document).scrollTop()<2340){
        $('.sidebar a').eq(2).delay(300).addClass("active").siblings("a").removeClass("active");
    }else if($(document).scrollTop()>2340&&$(document).scrollTop()<2840){
        $('.sidebar a').eq(3).delay(300).addClass("active").siblings("a").removeClass("active");
    }else if($(document).scrollTop()>2840&&$(document).scrollTop()<3240){
        $('.sidebar a').eq(4).delay(300).addClass("active").siblings("a").removeClass("active");
    }
})