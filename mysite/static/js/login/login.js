window.onload = function () {


    $$.checkLogin({
        success: function () {
            location.href = "../../userCenter/myCenter/my_center.html?" + $$.urlCommon();
        }, error: function () {

        }
    })

    $('#div_body').removeClass('ui_hide');
    var phone = $$.getStorage($$.userPhone);
    document.getElementById("phone").value = phone;
    var toUrl = $$.getPar('toUrl');
    if (!toUrl) {
        toUrl = "../home_base/home_base.html?" + $$.urlCommon();
    }

    //立即登录
    document.getElementById("now_login").addEventListener('click', function () {
        var phone = $('.phone').val().trim();
        var pwd = $('.pwd').val().trim();
        if (phone.length != 11) {
            mui.toast('请输入正确的手机号');
            return;
        }
        if (pwd.length == 0) {
            mui.toast('请输入正确的密码');
            return;
        }
        var _data = {
            tel: phone,
            in_pwd: pwd
        }
        $.ajax({
            type: "post",
            url: $$.base_api + "check_login",
            data: _data,
            dataType: "json",
            success: function (res_data) {
                $$.ZZLog(res_data);
                if (res_data.flag == false) {
                    mui.alert(res_data.msg);
                } else {
                    mui.toast('登录成功');
                    window.location.href = toUrl;
                }
            },
            error: function (error, text) {
                mui.alert($$.infoApiError);
                $$.notify('请求错误', $$.infoApiError, ' error-type:' + text);
            }
        });
    });
    //忘记密码
    /*document.getElementById("forget_pwd").addEventListener('click', function () {
        mui.alert('忘记密码');
    });*/
    //立即注册
    document.getElementById("now_register").addEventListener('click', function () {
        location.href = 'register.html?toUrl=' + $$.getPar('toUrl') + '&' + $$.urlCommon();
    });
}