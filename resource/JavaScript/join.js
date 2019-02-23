function save() {
    let data = {
        truename: $('.truename').val(),
        phone: $('.phone').val(),
        email: $('.email').val(),
        area: $('.area').val(),
        content: $('.content').val()
    };
    let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    if(data.truename==''){
        swal('提示','姓名不可为空','error')
    }else if(data.phone=='' || data.phone.length != 11){
        swal('提示','手机号格式错误','error')
    }else if(data.email=='' || !reg.test(data.email)){
        swal('提示','邮箱格式错误','error')
    }else if(data.area==''){
        swal('提示','地址不可为空','error')
    } else{
        mutual('/Api/index/apply',data,function (res) {
            if (res.ack==1){
                swal('提示','申请成功，请等待客服联系','success')
            }else{
                swal('提示','网络有点问题，请稍后再试','success')
            }
        },function () {

        })
    }
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