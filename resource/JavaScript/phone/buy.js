
$(document).ready(function (){
    isWeiXin()
})

//判断是否是微信浏览器的函数
function isWeiXin(){

    var ua = window.navigator.userAgent.toLowerCase();

    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        $('.showBuyBg').css('display','block')
    }else{
        $('.showBuyBg').css('display','none')
    }
}
function buy() {
    let data ={
        fee:1/10,
        loginfo:$('.name input').val()+'/'+$('.adrs input').val(),
        phone:$('.phone input').val(),
        hdid:1,
        title:'套餐体验',
        tradetype:'MWEB'

    }
    mutual('/Api/pay/index',data,function (res) {
        if(res.ack==1){
            window.location.href=res.data.code_url;
            setTimeout(function () {
                let time =new Date().getTime();
                let timer = setInterval(function () {
                    let obj = {
                        ddh:res.data.ddh
                    };
                    if(new Date().getTime()<time+300000){
                        clearInterval(timer)
                        swal('提示','支付失败','error')
                    }else{
                        mutual('/Api/pay/check',obj,function (res) {
                            if(res.ack==1){
                                swal('提示','支付成功','success')
                                clearInterval(timer)
                            }
                        })
                    }
                },1000)
            },5000)

        }
    },function () {

    })
}




function mutual(url, data, successCallback, errorCallback) {
    $.ajax({
        url: 'http://wx.xq.cspugoing.com' + url,
        type: 'post',
        data: JSON.stringify(data),
        success: function (response) {
            if (response.msg == '未登录') {
                window.location.href = '/'
            } else {
                successCallback(response)
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            errorCallback(XMLHttpRequest, textStatus, errorThrown)

        }
    })
}