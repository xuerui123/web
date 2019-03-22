
function buy() {
    let data ={
        fee:1/100,
        loginfo:'薛瑞',
        phone:'123',
        hdid:1,
        title:'套餐体验',
        tradetype:''

    }
    mutual('/Api/pay/index',data,function (res) {
        if(res.ack==1){
            $('.showBG').css('display','block');
            var qrcode = new QRCode(document.getElementById("code"), {
                width : 200,//设置宽高
                height : 200
            });
            qrcode.makeCode(res.data.code_url)
        }
    },function () {

    })
}


    function onBridgeReady(){
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
                "total_fee":1,
                "appId":"wxe05df87a337f4cd4",     //公众号名称，由商户传入
                "timeStamp":new Date().getTime(),         //时间戳，自1970年以来的秒数
                "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
                "package":"prepay_id=u802345jgfjsdfgsdg881",
                "signType":"MD5",         //微信签名方式：
                "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
            },
            function(res){
                alert(JSON.stringify(res))
                if(res.err_msg == "get_brand_wcpay_request:ok" ){
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                }
            });
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