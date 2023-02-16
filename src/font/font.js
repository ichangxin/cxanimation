/*
 * @Author: xuyanjie 1096405650@qq.com
 * @Date: 2022-11-02 15:41:58
 * @LastEditors: xuyanjie 1096405650@qq.com
 * @LastEditTime: 2022-11-02 16:33:32
 * @FilePath: \project\src\js\font.js
 * @Description: 
 * 
 * Copyright (c) 2022 by xuyanjie 1096405650@qq.com, All Rights Reserved. 
 */
(function(doc, win) {
	var docEl = doc.documentElement, //文档根标签
		resizeEvent = 'orientationchange' in window ? 'orientationchang' : 'resize'; //viewport变化事件源
	var rescale = function() {
		//重置方法
		win.clientWidth = docEl.clientWidth;
		if (!win.clientWidth) return;
		//  设置临界值，防止无限放大
		//  目前已知手机端最大宽度是  iphone13 pro max  428px，所以设置500目前是足够的,pc端的显示就是，最大500px，内容水平居中效果
		if (win.clientWidth > 500) {
			win.clientWidth = 500;
		}
		//  如果设计图是750的，就除以750, 720的就除以720 ，得到0.5  再乘以一个值，个人喜欢40，这样750的设计图html根元素字体大小就是20px
		docEl.style.fontSize = 40 * (win.clientWidth / 750) + 'px';
	}
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvent, rescale, false);
	doc.addEventListener('DOMContentLoaded', rescale, false);
})(document, window);


// 禁用双指放大 document.documentElement.addEventListener(
	'touchstart',
	function(event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, {
		passive: false,
	}
)

// 禁用双击放大 var lastTouchEnd = 0;
 document.documentElement.addEventListener(
	'touchend',
	function(event) {
		var now = Date.now();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault()
		}
		lastTouchEnd = now;
	}, {
		passive: false,
	}
)
