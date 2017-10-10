window.onload = function() {
	$('#div_body').removeClass('ui_hide');

	var timer_t = null;
	$$.checkLogin({
		success:function(){
			location.href="../../userCenter/myCenter/my_center.html?"+$$.urlCommon();
		},error:function(){
			
		}
	})
//	return;
	$('.send_code').on('click', function() {
		if(timer_t) return;
		var phone = $('.phone').val().trim();
		if(phone.length != 11) {
			mui.toast('请输入正确的手机号');
			return;
		}

		var data = {
			tel: phone
		};
		$.ajax({
			type: "post",
			url: $$.base_api+"site/send-msg-sign-up",
			data: data,
			dataType: 'json',
			success: function(res_data) {
				$$.ZZLog(res_data);
				if(res_data.flag == false) {
					mui.alert(res_data.msg);
				} else {
					mui.toast('验证码发送成功')
                    var count = 30;
                    timer_t = setInterval(function() {
                        if(count > 1) {
                            count--;
                            $('.send_code').text('剩余' + count + '秒');
                        } else {
                            $('.send_code').text('发送验证码');

                            clearInterval(timer_t);
                            timer_t = null;
                        }
                    }, 1000);
				}
			},
			error: function(error, text) {
				mui.alert($$.infoApiError);
				$$.notify('请求错误register.js,' + $$.base_api + 'site/send-msg-sign-up', $$.infoApiError, ' error-type:' + text);
			}
		});
	})

	//立即注册
	document.getElementById("now_register").addEventListener('click', function() {

		var phone = $('.phone').val().trim();
		var code = $('.code').val().trim();
		if(phone.length != 11) {
			mui.toast('请输入正确的手机号');
			return;
		}
		if(code.length == 0) {
			mui.toast('请输入正确的验证码');
			return;
		}
		var _data = {
			tel: phone,
			auth_code: code
		}
		$.ajax({
			type:"post",
			url: $$.base_api+"site/validate-code",
			data: _data,
			dataType:"json",
			success: function(res_data) {
				$$.ZZLog(res_data);
				if(res_data.flag == false) {
					mui.alert(res_data.msg);
				} else {
					$('.register_div').toggle();
					$('.finish_register_div').toggle();
					$('title').html('完成注册')
				}
			},
			error: function(error, text) {
				mui.alert($$.infoApiError);
				$$.notify('请求错误register.js,' + $$.base_api + 'site/login', $$.infoApiError, ' error-type:' + text);
			}
		});
	})

	//完成注册
	document.getElementById("finish_register").addEventListener('click', function() {
		var pwd1 = document.getElementById("pwd1").value.trim();
		var pwd2 = document.getElementById("pwd2").value.trim();
		if(pwd1 == '' || pwd2 == '') {
			mui.toast('密码不能为空');
			return;
		}
		if(pwd1.length<6 || pwd1.length>20 || pwd2.length<6 || pwd2.length>20){
			mui.toast('密码必须是6-20位的字母数字符号');
			return;
		}
		if(pwd1 != pwd2) {
			mui.toast('两次密码输入不一致');
			return;
		}
		var phone = $('.phone').val().trim();
		$$.setStorage($$.userPhone,phone,'d30');
		var _data = {
			tel: phone,
			password_hash: pwd1,
			repassword: pwd2
		}
		$.ajax({
			type:"post",
			dataType:"json",
			url: $$.base_api+"site/signup",
			data: _data,
			beforeSend: function() {
				document.getElementById("finish_register").setAttribute('disabled', 'disabled');
			},
			complete: function() {
				document.getElementById("finish_register").removeAttribute('disabled');
			},
			success: function(res_data) {
				$$.ZZLog(res_data);
				if(res_data['flag'] == false) {
					mui.alert(res_data['msg']);
				} else {
					var data = res_data['data'];
//					location.href = 'login.html?toUrl='+$$.getPar('toUrl')+'&' + $$.urlCommon();		
					mui.toast('注册成功');
					$$.delay(function(){
						window.history.go(-1);location.reload();
					},2500);
				}
			},
			error: function(error, text) {
				mui.alert($$.infoApiError);
				$$.notify('请求错误register.js,' + $$.base_api + '', $$.infoApiError, ' error-type:' + text);
			}
		});
	})

	//立即登录
	document.getElementById("now_login").addEventListener('click', function() {
		window.history.go(-1);
	});

    $('.register_info').on('click',function(){
        location.href="register_protocol.html?"+$$.urlCommon();
    });

}