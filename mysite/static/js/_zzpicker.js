jQuery.prototype.zzPicker = function(initData) {
	if(!initData) {
		console.warn('zzpicker缺少initData参数!');
		$$.notify('参数错误', 'zzpicker缺少initData参数!')
		return;
	}
    var CUR_THIS = $(this);
	var param = {
		arr: initData['list'] || [],   //1. 列表数据
		showKey: initData['showKey'] || 'text',  //1. 加载数组对象中的键值
		autoShow: initData['autoShow'] || true,  //1. 默认自动显示 
		autoHide: initData['autoHide'] || true,  //1. 选择后自动隐藏
		callback: initData['selectItem'] || function() {},  //1. 选中的回调函数
		showOKbtn: initData['showOKbtn'] || true,  //2. 是否显示右上角确定按钮 若显示，则传以下参数
		showLeftText:initData['showLeftText'] || '',  //2. 确定按钮的显示文字
		showOKbtnText:initData['showOKbtnText'] || '确定',  //2. 确定按钮的显示文字
		showCustomerHTML:initData['showCustomerHTML'] || '',  //2. 自定义显示的HTML 
		callbackOKBtn:initData['btnOK'] || function() {}      //2. 确定按钮的回调函数
	}

	var html = setHTML(param.arr);
	if(html == '') return;
	$(this).html(html);

	var obj = {
		show: function() {
			$('.model_box_picker').removeClass('fadeInUp');
			$('.model_box_picker').removeClass('animated');
			$('.model_box_picker').removeClass('fadeInDown');

			CUR_THIS.show();
			CUR_THIS.addClass('model_picker');
			$('.model_box_picker').show();
			$('body').children().eq(0).addClass('mod_fil');
			//			$(".bigDiv").addClass("mod_fil");
			$('.model_box_picker').addClass('fadeInUp animated');
		},
		hide: function() {
			$('.model_box_picker').addClass('fadeInDown animated');
			setTimeout(function() {
				CUR_THIS.hide();
				$('body').children().eq(0).removeClass('mod_fil');
			}, 400);
		}
	}
	if(param.autoHide) {
		obj.show();
	}
	$(this).on('click', function() {
		obj.hide();
	})
	//解决冒泡
	$(".model_box_picker").on("click", function(e) {
		e.stopPropagation();
	});
	$('.cell_picker').on('click', function() {
		var row = $(this).attr('row');
		var item = param.arr[row];
		if(param.autoHide) {
			obj.hide();
		}
		param.callback(item, obj);
	})
	//点击确定
	$('#zzpicker_btn_ok').on('click',function(){
		param.callbackOKBtn(obj);
	})

	function setHTML(arr) {
		var cstr = '';
		var title_cstr = '';
		if(param.showCustomerHTML!="") {
			cstr = param.showCustomerHTML;
			title_cstr += '<div class="ub-f1 ulev1 text_c_80" >'+param.showLeftText+'</div>' +
				'		<div id="zzpicker_btn_ok" class="text_c_2b ulev2">确定</div>';
		} else {
			cstr = getCstr(arr);
			title_cstr+='请选择<input id="search_txt" type="text" class="ub ub-f1" placeholder="请输入关键字" style="display: none;margin-left: 0.15rem;padding-left: 0.15rem;font-size: 0.12rem;" />' ;
		}
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        var html = '';
        if(winW>960){
            html = '<div class="model_picker" style="margin:0 auto;width:600px">';
        } else {
            html = '<div class="model_picker">';
		}
		html += '	<div style="" class="model_box_picker fadeInUp animated fadeInDown">' +
			'		<div class="ub ub-ver">' +
			'			<div class="ub ub-ver ">' +
			'				<div class="ub ub-pc">' +
			'					<div class="model_la_car"></div>' +
			'				</div>' +
			'				<div class="ub ub-ac" style="padding: 0.08rem 0.15rem 0.08rem 0.15rem;border-bottom: 1px solid #e5e5e5;">' +
			title_cstr +
			'				</div>' +
			'					<div class="ub ub-ver select_hei">' +
			cstr +
			'					</div>' +
			'				</div>' +
			'			</div>' +
			'			</div>' +
			'		</div>';
		return html;
	}
	function getCstr(arr){
		var cstr = '';
		for(var i = 0, m = arr.length; i < m; i++) {
			var dict = arr[i];
			if(!dict.hasOwnProperty(param.showKey)) {
				return '';
				break;
			}
			cstr += '<div class="ub ub-ac cell_picker" row=' + i + ' style="border-bottom: 1px solid #e5e5e5;">' +
				'			<div class=" ulev1 text_c_2b" style="padding: 0.12rem 0.15rem;padding-right: 0.22rem;">' + dict[param.showKey] + '</div>' +
				'			<div class="ulev1 ub-f1 text_c_80"></div>' +
				'			<div style="padding:0.1rem 0.15rem;">' +
				'			</div>' +
				'		</div>';
		}
		return cstr;
	}
}