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