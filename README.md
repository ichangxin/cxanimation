# cxanimation
Vue使用lottie动画，Vue使用PixiJS动画示例

1、安装lottie-web

npm install lottie-web

2、使用lottie-web

import lottie from "lottie-web";

3、加载lottie动画


//加载Lottie动画  

initLottieAnimation()   

{  
		this.CXLottieAnimation = lottie.loadAnimation  ({  
		
		container: document.getElementById("cx_rocket_launching"), //当前需要渲染的DOM  
		
		renderer: "svg", //渲染方式，默认为svg,还可以渲染为html和canvas  
		
		loop: true, //循环播放  
		
		autoplay: true, //自动播放  
		
		// animationData和path二选一  
		
		// animationData: CXRocketData.default, //本地动画  
		
		path: 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json', //网络json地址  
		
	});  
				
	//设置动画速度
	this.CXLottieAnimation.setSpeed(5);  
				

	//设置为循环播放，不会调用  
	
	this.CXLottieAnimation["addEventListener"]("complete", () => {  
	
	/** 销毁lottie动画对象; */  
	
	this.CXLottieAnimation["destroy"]();  
	
		console.log('动画销毁！');  
		
	});  

},  
      
4、常用方法
      
//停止
stop: function() {  

	this.CXLottieAnimation.stop();  
	
},  

//暂停  

pause: function() {  

	this.CXLottieAnimation.pause();  
	
},  

//播放  

play: function() {  

	this.CXLottieAnimation.play();  
	
},  

5、加载本地资源图片需要修改一下路径，否则会加载失败。  

created() {  

	//修改本地图片路径。  
	
	CXRocketData.assets.forEach((item, index) => {  
	
		if (index >= 8) {  
		
			return;  
			
		}  
		
		item.u = ''  
		
		item.p = require(`@/assets/mz_rocket/images/img_${index}.png`)  
		
		// console.log(item);  
		
		// item.p = require('@/assets/mz_rocket/images/img_'+ index + '.png')  
		
		});  
		

		//修改本地图片路径  
		
		// for (var i = 0; i < 8; i++) {  
		
		// 	 CXRocketData.assets[i].p = require(`@/assets/mz_rocket/images/img_${i}.png`);  
		
		// 	 CXRocketData.assets[i].u = '';  
		
		// 	// console.log(CXRocketData.assets[i]);  
		
},  
