jQuery.prototype.tabbar = function(t_index,callback) {
	t_index = t_index || 0;

	var arr = [{
		title: '车态',
		img: 'http://wx.zhizhuchuxing.com/web/zzcx/images/tabbar/xingcheng_n.png',
		sel_img: 'http://wx.zhizhuchuxing.com/web/zzcx/images/tabbar/xingcheng_s.png'
	}, {
		title: '首页',
		img: 'http://wx.zhizhuchuxing.com/web/zzcx/images/tabbar/shouye_n.png',
		sel_img: 'http://wx.zhizhuchuxing.com/web/zzcx/images/tabbar/shouye_s.png'
	}, {
		title: '我的',
		img: 'http://wx.zhizhuchuxing.com/web/zzcx/images/tabbar/wode_n.png',
		sel_img: 'http://wx.zhizhuchuxing.com/web/zzcx/images/tabbar/wode_s.png'
	}];
	var t_tabAry = arr;
	createHTML(t_tabAry);

	function createHTML(t_tabAry) {
		var html = '';
		t_tabAry.forEach(function(dict, index) {
			var tempHTML = '<div class="ub-f1 ub ub-ver tx-c controller ub-pc ub-ac" data-index=' + index + ' >' +
				'<div style="background-image:url(' + dict.img + ');background-repeat: no-repeat;background-size: 100% 100%;width:0.25rem;height:0.25rem;margin-bottom:0.03rem;"></div>' +
				'<div class="select_title">' + dict.title + '</div>' +
				'</div>'
			html += tempHTML;
		})
		$('.tabbar').html(html);
	}
	
	$('.controller').each(function(index, domE) {
			$(this).children().eq(1).removeClass('select_title');
			$(this).children().eq(1).addClass('normal_title');

			if(index == t_index) {
				$(this).children().eq(0).css("background-image","url("+t_tabAry[t_index].sel_img+")");
//				$(this).children().eq(0).css('background-color','red');
				$(this).children().eq(1).removeClass('normal_title');
				$(this).children().eq(1).addClass('select_title');
			}
		});
		$('.controller').on('click', function() {
			var c_index = $(this).attr('data-index')-0;		
			if(typeof(callback) == 'function'){
				callback(c_index);
			}
		})
	
}