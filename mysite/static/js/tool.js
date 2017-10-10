(function(wd) {
	$$ = {};
	document.write('<script async="async" src="https://og6593g2z.qnssl.com/fundebug.0.1.7.min.js" apikey="1576165e5789436fead47b4366e8b42c699a25a0e0b527f24e15d765cd8f1635"></script>');
})(window);
//配置
(function($$) {
	$$.img = {
		imgSceneBus: "http://img.zhizhuchuxing.cn/wechat/jingquzhitongche.jpg",
		imgDisney: "http://img.zhizhuchuxing.cn/wechat/dishinijiebo.jpg",
		imgMainInfo: "images/home/qiandaohuzu.png"
	}
//	$$.base_api = "http://nwx.zhizhuchuxing.cn/zzcx/"; //接口地址
//	$$.base_api = "http://wxtest/zzcx/"; //接口地址
	$$.base_api = "/"; //接口地址
	$$.version = "version=3.0.2"; //版本
	$$.isLog = true; //是否打印
	$$.logCount = 0; //打印的次数
	$$.infoApiError = "服务器开小差了，请联系技术部相关人员";
	$$.infoNotLogin = "您还没有登录，点击确定前往登录页面";
	$$.codeNotLogin = "401";
	$$.userPhone = "userPhoneKey";
	$$.delayTime = 1000;
})($$);

(function($$) {
	/**
	 * @description js工具类，内置常用方法以及基本配置
	 * */
	/**
	 * @param {Object} ajaxObj 
	 * @description 原生ajax请求 zajax
	 * */
	$$.zjax = function() {
			var ajaxData = {
				type: arguments[0].type || "POST",
				url: $$.base_api + arguments[0].url || "",
				async: arguments[0].async || "true",
				data: arguments[0].data || null,
				dataType: arguments[0].dataType || "json",
				contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
				beforeSend: arguments[0].beforeSend || function() {},
				complete: arguments[0].complete || function() {},
				success: arguments[0].success || function() {},
				error: arguments[0].error || function() {}
			}
			ajaxData.beforeSend()
			var xhr = createxmlHttpRequest();
			xhr.responseType = ajaxData.dataType;
			xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
			xhr.setRequestHeader("Content-Type", ajaxData.contentType);
			xhr.send(convertData(ajaxData.data));
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4) {
					ajaxData.complete(xhr);
					if(xhr.status == 200) {
						if(typeof(xhr.response) == 'object') {
							ajaxData.success(xhr.response)
						} else {
							ajaxData.success(JSON.parse(xhr.response))
						}

					} else {
						ajaxData.error(xhr, xhr.statusText)
					}
				}
			}

			function createxmlHttpRequest() {
				if(window.ActiveXObject) {
					return new ActiveXObject("Microsoft.XMLHTTP");
				} else if(window.XMLHttpRequest) {
					return new XMLHttpRequest();
				}
			}

			function convertData(data) {
				if(typeof data === 'object') {
					var convertResult = "";
					for(var c in data) {
						convertResult += c + "=" + data[c] + "&";
					}
					convertResult = convertResult.substring(0, convertResult.length - 1)
					return convertResult;
				} else {
					return data;
				}
			}
		},
		/**
		 * @param {Function} function
		 * @param {Number} time
		 * @description 延迟函数
		 * */
		$$.delay = (function() {
			var timer = 0;
			return function(callback, time) {
				clearTimeout(timer);
				timer = setTimeout(callback, time);
			};
		})();
	/*
	 * 定时器
	 * */
	$$.timer = function() {
		var data = {
			toDo: arguments[0].toDo || function() {},
			didStop: arguments[0].didStop || function() {},
			interval: arguments[0].interval || 1000,
			repeats: arguments[0].repeats || false
		}
		var timer_t = null;
		var count = 1;
		var obj = {
			clear: function() {
				clearInterval(timer_t);
				data.didStop();
			}
		}
		timer_t = setInterval(function() {
			if(data.repeats) {
				data.toDo(obj);
			} else {
				if(count > 0) {
					count--;
					data.toDo(obj);
				} else {
					clearInterval(timer_t);
					timer_t = null;
					data.didStop();
				}
			}
		}, data.interval);
	}
	/**
	 * @description 得到uuid
	 */
	$$.getUUID = function() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return(c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	};
	/**
	 * @param {Number}
	 * @description 得到随机字符串
	 * */
	$$.getRdStr = function(len) {
		len = len || 1;
		var rdmString = "";
		for(; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
		return rdmString.substr(0, len);
	};
	/*
	 * @param {}
	 * @description 克隆一个对象
	 * */
	$$.clone = function(obj) {
		// Handle the 3 simple types, and null or undefined
		if(null == obj || "object" != typeof obj) return obj;

		// Handle Date
		if(obj instanceof Date) {
			var copy = new Date();
			copy.setTime(obj.getTime());
			return copy;
		}

		// Handle Array
		if(obj instanceof Array) {
			var copy = [];
			for(var i = 0, len = obj.length; i < len; ++i) {
				copy[i] = $$.clone(obj[i]);
			}
			return copy;
		}

		// Handle Object
		if(obj instanceof Object) {
			var copy = {};
			for(var attr in obj) {
				if(obj.hasOwnProperty(attr)) copy[attr] = $$.clone(obj[attr]);
			}
			return copy;
		}
		console.warn("Unable to copy obj! Its type isn't supported.");
		throw new Error("Unable to copy obj! Its type isn't supported.");
	};
	/**
	 * @param {String} dom str
	 * @description 得到原生dom
	 * */
	$$.navDom = function(str) {
		return document.querySelector(str);
	};
	/**
	 * @param {Element} element
	 * @param {String} type
	 * @param {Event} handler
	 * @description 添加监听
	 * */
	$$.addHandler = function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	}
	/**description 自定义打印日志*/
	$$.ZZLog = function() {
		var isSign = false; //是否签名
		if($$.isLog) {
			this.logCount++;
			console.group("第" + this.logCount + "次打印");

			if(isSign) {
				//如果要加前缀
				var args = Array.prototype.slice.call(arguments);
				args.unshift('[ZZCX:DeBug:Log]');
				console.log.apply(console, args);
			} else {
				console.log.apply(console, arguments);
			}
		}
		console.groupEnd();
		//ES6
		/*
		 * // 打印日志
		 //function ZZLog(...type) {
		 //	var isLog = true; //是否打印
		 //	if(isLog) {
		 //		type.forEach(v => {
		 //			if(typeof(v) == 'object') {
		 //				console.log(v);
		 //			} else {
		 //				console.log('%c' + v, 'color:#666699');
		 //			}
		 //		})
		 //	}
		 //}
		 *
		 */
	}
	/**
	 * @param {Object} arrObj []
	 * @description 自定义打印table arrObj必须是数组且成员是object
	 */
	$$.ZZLogTable = function(arrObj) {
		this.logCount++;
		console.group("第" + this.logCount + "次打印");
		console.table(arrObj);
		console.groupEnd();
	}
	/**
	 * @param {String} par
	 * @description  从URL上获得参数
	 */
	$$.getPar = function(par) {
		//获取当前URL
		var local_url = document.location.href;
		local_url = decodeURI(local_url);
		//获取要取得的get参数位置
		var get = local_url.indexOf(par + "=");
		if(get == -1) {
			return "";
		}
		//截取字符串
		var get_par = local_url.slice(par.length + get + 1);

		//判断特殊par toUrl
		if(par == 'toUrl') {
			return get_par;
		}

		//判断截取后的字符串是否还有其他get参数
		var nextPar = get_par.indexOf("&");
		if(nextPar != -1) {
			get_par = get_par.slice(0, nextPar);
		}
		return get_par;
	}
	/**
	 * @param {String} name
	 * @param {String} value
	 * @param {String} time
	 * @description 设置cookie   eg:time='d30|s30|h24'
	 * */
	$$.setCookie = function(name, value, time) {
		var strsec = getsec(time);
		var exp = new Date();
		exp.setTime(exp.getTime() + strsec * 1);
		document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();

		function getsec(str) {
			var str1 = str.substring(1, str.length) * 1;
			var str2 = str.substring(0, 1);
			if(str2 == "s") {
				return str1 * 1000;
			} else if(str2 == "h") {
				return str1 * 60 * 60 * 1000;
			} else if(str2 == "d") {
				return str1 * 24 * 60 * 60 * 1000;
			}
		}
	}
	/**
	 * @param {String} name
	 * @description 删除指定cookie
	 * */
	$$.delCookie = function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = this.getCookie(name);
		if(cval != null)
			document.cookie = name + "=" + cval + ";path=/;expires=" + exp.toGMTString();
	}
	/**
	 * @param {String} name
	 * @description 得到指定cookie
	 * */
	$$.getCookie = function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	}
	/**
	 * @param {String} objName
	 * @param {String} objValue
	 * @description 设置字符串类型的本地缓存
	 * */
	$$.setStorage = function(objName, objValue, time) {
		time = time || 'd180';
		var strsec = getsec(time);
		var nowTime = this.getDateTime(4) - 0;
		var setTime = nowTime + strsec / 1000;
		var obj = {};
		obj['maxage'] = setTime;
		obj['value'] = objValue;

		function getsec(str) {
			var str1 = str.substring(1, str.length) * 1;
			var str2 = str.substring(0, 1);
			if(str2 == "s") {
				return str1 * 1000;
			} else if(str2 == "h") {
				return str1 * 60 * 60 * 1000;
			} else if(str2 == "d") {
				return str1 * 24 * 60 * 60 * 1000;
			}
		}

		var sto = window.localStorage;
		if(sto)
			sto.setItem(objName, JSON.stringify(obj));
	}
	/**
	 * @param {String} objName
	 * @description 读取字符串类型的本地缓存
	 * */
	$$.getStorage = function(objName) {
		var sto = window.localStorage;
		var resu = '';
		if(sto) {
			var ret = JSON.parse(sto.getItem(objName));
			if(ret) {
				var maxage = ret['maxage'] - 0;
				var nowTime = this.getDateTime(4) - 0;
				if(maxage - nowTime >= 0) {
					resu = ret['value'];
				} else {
					this.clearStorage(objName);
				}
			}
		}
		return resu;
	}
	/**
	 * @param {String} objName
	 * @description 清除本地缓存，如没指定名称则为清空所有缓存
	 * */
	$$.clearStorage = function(objName) {
		var sto = window.localStorage;
		if(sto) {
			if(objName)
				sto.removeItem(objName);
			else
				sto.clear();
		}
	}
	/**
	 * @param {String} objName
	 * @param {Object} json
	 * @description 设置Json类型的本地缓存
	 * */
	$$.setStorJson = function(objName, json, time) {
		if(json) this.setStorage(objName, JSON.stringify(json), time);
	}
	/**
	 * @param {String} objName
	 * @description 读取Json类型的本地缓存
	 * */
	$$.getStorJson = function(objName) {
		var ret = null;
		var str = this.getStorage(objName);
		if(str)
			ret = JSON.parse(str);
		return ret;
	}
	/**
	 * @param {Date} day
	 * @description js判断一个日期是星期几 传入 年/月/日
	 * */
	$$.getWeekDay = function(day) {
		var a = new Array("日", "一", "二", "三", "四", "五", "六");
		var week = new Date(day).getDay();
		var str = "星期" + a[week];
		return str;
	}
	/**
	 * @param {Date} date
	 * @description 获取前一天日期 传入指定时间
	 * */
	$$.before = function(date) {
		var d = date;
		d = new Date(d);
		d = +d - 10006060 / 3 * 24;
		d = new Date(d);
		//格式化
		var year = ";" + d.getFullYear() + ";";
		var month = ";" + (d.getMonth() + 0 + 1) + ";";
		var day = ";" + d.getDate() + ";";
		if(year.length < 4) {
			year = "0" + year;
		}
		if(month.length < 4) {
			month = "0" + month;
		}
		if(day.length < 4) {
			day = "0" + day;
		}
		var datestr = year + "-" + month + "-" + day;
		datestr = datestr.replace(/;/g, "");
		return datestr;
	}
	/**
	 * @param {Number} addDayCount
	 * @param {Date} curDate
	 * @description 获取指定日期的前后几天
	 * */
	$$.getDateByDay = function(addDayCount, curDate) {
		var d = new Date(curDate);
		d.setDate(d.getDate() + addDayCount); //获取AddDayCount天后的日期
		//格式化
		var year = ";" + d.getFullYear() + ";";
		var month = ";" + (d.getMonth() + 0 + 1) + ";";
		var day = ";" + d.getDate() + ";";
		if(year.length < 4) {
			year = "0" + year;
		}
		if(month.length < 4) {
			month = "0" + month;
		}
		if(day.length < 4) {
			day = "0" + day;
		}
		var datestr = year + "-" + month + "-" + day;
		datestr = datestr.replace(/;/g, "");
		return datestr;
	}
	/**
	 * @param {Date} date
	 * @description 获取后一天日期  传入指定时间
	 * */
	$$.after = function(date) {
		var d = date;
		d = new Date(d);
		d = +d + 10006060 / 3 * 24;
		d = new Date(d);
		//格式化
		var year = ";" + d.getFullYear() + ";";
		var month = ";" + (d.getMonth() + 0 + 1) + ";";
		var day = ";" + d.getDate() + ";";
		if(year.length < 4) {
			year = "0" + year;
		}
		if(month.length < 4) {
			month = "0" + month;
		}
		if(day.length < 4) {
			day = "0" + day;
		}
		var datestr = year + "-" + month + "-" + day;
		datestr = datestr.replace(/;/g, "");
		return datestr;
	}
	/**
	 * @description 解决冒泡
	 * */
	$$.solveBubbing = function() {
		var e = getEvent();
		if(window.event) {
			e.cancelBubble = true; //阻止冒泡
		} else if(e.preventDefault) {
			e.stopPropagation(); //阻止冒泡
		}
		//得到事件
		function getEvent() {
			if(window.event) {
				return window.event;
			}
			func = getEvent.caller;
			while(func != null) {
				var arg0 = func.arguments[0];
				if(arg0) {
					if((arg0.constructor == Event || arg0.constructor == MouseEvent ||
							arg0.constructor == KeyboardEvent) ||
						(typeof(arg0) == "object" && arg0.preventDefault &&
							arg0.stopPropagation)) {
						return arg0;
					}
				}
				func = func.caller;
			}
			return null;
		}
	}
	/**
	 * @description 得到浏览器
	 * */
	$$.myBrowser = function() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1;
		//判断是否Opera浏览器
		if(isOpera) {
			return "Opera"
		};
		//判断是否Firefox浏览器
		if(userAgent.indexOf("Firefox") > -1) {
			return "Firefox";
		}
		//判断是否Chrome浏览器
		if(userAgent.indexOf("Chrome") > -1) {
			return "Chrome";
		}
		//判断是否Safari浏览器
		if(userAgent.indexOf("Safari") > -1) {
			return "Safari";
		}
		if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
			return "IE";
		}; //判断是否IE浏览器
	}
	/**
	 * @param {Number} nTypeFlag
	 * @description 切割日期字符串
	 * */
	$$.getMonthAndDayByDate = function(datestr, info) {
		var dateAry = datestr.split('-');
		var cNewTimeStr;
		switch(info) {
			case 'year':
				cNewTimeStr = dateAry[0];
				break;
			case 'month':
				cNewTimeStr = dateAry[1];
				break;
			default:
				cNewTimeStr = dateAry[2];
				break;
		}
		return cNewTimeStr;
	}
	/**
	 * @param {Number} nTypeFlag
	 * @description 得到时间组合
	 * */
	$$.getDateTime = function(nTypeFlag) {
		var tNowTime = new Date();
		var myYear = ';' + tNowTime.getFullYear() + ';';
		var myMonth = ';' + (tNowTime.getMonth() + 1 - 0) + ';';
		var myDay = ';' + tNowTime.getDate() + ';';
		var myHour = ';' + tNowTime.getHours() + ';';
		var myMinu = ';' + tNowTime.getMinutes() + ';';
		var mySecond = ';' + tNowTime.getSeconds() + ';';

		if(myMonth.length < 4) myMonth = '0' + myMonth;
		if(myDay.length < 4) myDay = '0' + myDay;
		if(myHour.length < 4) myHour = '0' + myHour;
		if(myMinu.length < 4) myMinu = '0' + myMinu;
		if(mySecond.length < 4) mySecond = '0' + mySecond;

		var cNewTimeStr;
		//alert(tNowTime);
		switch(nTypeFlag + 1 - 1) {
			case 0:
				cNewTimeStr = myYear + '-' + myMonth + '-' + myDay;
				break;
			case 1:
				cNewTimeStr = myYear + myMonth + myDay;
				break;
			case 2:
				cNewTimeStr = myHour + ':' + myMinu + ':' + mySecond;
				break;
			case 3:
				cNewTimeStr = myHour + myMinu + mySecond;
				break;
			case 4:
				cNewTimeStr = myYear + myMonth + myDay + myHour + myMinu + mySecond;
				break;
			case 5:
				cNewTimeStr = myYear + '年' + myMonth + '月' + myDay + '日';
				break;
			case 6:
				cNewTimeStr = myYear;
				break;
			case 7:
				cNewTimeStr = myYear + '-' + myMonth;
				break;
			case 8: //得到上一个月的今天
				var date = getDateTime(0);
				var arr = date.split('-');
				var year = arr[0]; //获取当前日期的年份
				var month = arr[1]; //获取当前日期的月份
				var day = arr[2]; //获取当前日期的日
				var days = new Date(year, month, 0);
				days = days.getDate(); //获取当前日期中月的天数
				var year2 = year;
				var month2 = parseInt(month) - 1;
				if(month2 == 0) {
					year2 = parseInt(year2) - 1;
					month2 = 12;
				}
				var day2 = day;
				var days2 = new Date(year2, month2, 0);
				days2 = days2.getDate();
				if(day2 > days2) {
					day2 = days2;
				}
				if(month2 < 10) {
					month2 = '0' + month2;
				}
				cNewTimeStr = year2 + '-' + month2 + '-' + day2;
				break;
			case 9: //得到下一个月的今天
				var date = getDateTime(0);
				var arr = date.split('-');
				var year = arr[0]; //获取当前日期的年份
				var month = arr[1]; //获取当前日期的月份
				var day = arr[2]; //获取当前日期的日
				var days = new Date(year, month, 0);
				days = days.getDate(); //获取当前日期中的月的天数
				var year2 = year;
				var month2 = parseInt(month) + 1;
				if(month2 == 13) {
					year2 = parseInt(year2) + 1;
					month2 = 1;
				}
				var day2 = day;
				var days2 = new Date(year2, month2, 0);
				days2 = days2.getDate();
				if(day2 > days2) {
					day2 = days2;
				}
				if(month2 < 10) {
					month2 = '0' + month2;
				}

				var t2 = year2 + '-' + month2 + '-' + day2;
				return t2;
				break;
			default:
				cNewTimeStr = myYear + '-' + myMonth + '-' + myDay + ' ' + myHour + ':' + myMinu + ':' + mySecond;
				break;
		}

		cNewTimeStr = cNewTimeStr.replace(/;/g, "");

		return cNewTimeStr;
	}

})($$);

//追加方法
(function($$) {
	/**
	 * @description url上拼接fx_uid,user_id等
	 * */
	$$.urlCommon = function() {
		return this.version;
	}
	/**
	 * @param {Function} function
	 * @param {Function} function
	 * @description 校验是否登录
	 * */
	$$.checkLogin = function() {
		var loginData = {
			success: arguments[0].success || function() {},
			error: arguments[0].error || function() {}
		}
		var _this = this;
		$.ajax({
			type: "post",
			url: $$.base_api + "site/index",
			async: true,
			data: {},
			dataType: "json",
			success: function(res_data) {
				$$.ZZLog(res_data);
				if(res_data['flag']==false){
					if(res_data['code']==$$.codeNotLogin){
						loginData.error();
					}
				}else{
					loginData.success();
				}
			},
			error: function(error, text) {
				mui.alert(_this.infoApiError);
				_this.notify('请求错误tool.js,site/index', _this.infoApiError, ' error-type:' + text);
			}
		});
	}
	/**
	 * @description 错误监控  eg: $$.notify('错误标题','错误信息','错误信息2');
	 * */
	$$.notify = function() {
			var args = Array.prototype.slice.call(arguments);
			var c_arg0 = $$.clone(args[0]);
			args.shift();
			fundebug.notify(c_arg0, args.join(''));
		},
		/**
		 * @description 错误监控  eg: $$.notifyError('错误标题','错误信息','错误信息2');
		 * */
		$$.notifyError = function() {
			var args = Array.prototype.slice.call(arguments);
			var c_arg0 = $$.clone(args[0]);
			args.shift();
			fundebug.notifyError(c_arg0, args.join(''));
		}
	/**
	 * @param {String} category_id
	 * @param {String} pro_cate_id
	 * @description 根据类型跳转
	 * */
	$$.hrefOrderByInfo = function(category_id, pro_cate_id) {

		// category_id 1车票 2门票 3酒店 4巴士自由行 5上门接
		if('1' == category_id) window.location.href = 'create_bus_order.html?pro_cate_id=' + pro_cate_id + '&' + this.urlCommon();
		if('2' == category_id) window.location.href = 'create_ticket_order.html?pro_cate_id=' + pro_cate_id + '&' + this.urlCommon();
		//		if('3'==category_id)
		if('4' == category_id) window.location.href = 'create_free_order.html?pro_cate_id=' + pro_cate_id + '&' + this.urlCommon();
		//		if('5'==category_id)
	}

})($$);