<template>
	<div class="home">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<button @click="stop">停止</button>
		<button @click="pause">暂停</button>
		<button @click="play">播放</button>
		<!-- 第一种方法 -->
		<div id="cx_rocket_launching">
		</div>


		<!-- 第二种方法 -->
		<lottie :options="defaultOptions" :height="500" :width="375" @animCreated="handleAnimation"
			class="cx_lottie_animation" />
		<div>
			<p>速度: x{{animationSpeed}}</p>
			<input type="range" value="1" min="0" max="6" step="0.1" v-on:change="onSpeedChange"
				v-model="animationSpeed">
		</div>
		<button @click="cx_stop">停止</button>
		<button @click="cx_pause">暂停</button>
		<button @click="cx_play">播放</button>




	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	import lottie from "lottie-web";
	//本地资源
	import * as CXRocketData from '@/assets/mz_rocket/mz_rocket.json';
	// import * as CXRocketData1 from 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json';
	// let CXLottieAnimation = {};

	export default {
		name: 'LottieAnimation',
		components: {

		},


		data() {
			return {
				CXLottieAnimation: '',
				defaultOptions: {
					animationData: CXRocketData.default /*文件资源*/ ,
					path: 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json', //网络json地址
				},
				animationSpeed: 1 /*动画速度*/ ,
			}
		},

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
			// };
		},


		mounted() {
			//加载Lottie动画
			this.initLottieAnimation();
			this.CXLottieAnimation.addEventListener('loopComplete', this.CXLottiePlayFinish);
		},

		methods: {

			handleAnimation: function(anim) {
				this.anim = anim;
			},
			//停止
			cx_stop: function() {
				this.anim.stop();
			},
			//暂停
			cx_pause: function() {
				this.anim.pause();
			},
			//播放
			cx_play: function() {
				this.anim.play();
			},
			//当滑块控件值发生改变时，改变动画的速度
			onSpeedChange: function() {
				this.anim.setSpeed(this.animationSpeed);
			},

			//Lottie动画监听。
			//当前循环播放完成触发 
			CXLottiePlayFinish() {
				// console.log('动画循环播放完成了');
			},

			//加载Lottie动画
			initLottieAnimation() {
				this.CXLottieAnimation = lottie.loadAnimation({
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
		},
	}
</script>


<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	#cx_rocket_launching {
		width: 9.333333rem;
		margin: 0 auto;
		top: 50px;
		background-color: white;
	}

	.cx_lottie_animation {
		width: 9.333333rem;
		margin: 0 auto;
		background-color: white;
	}


	.toast-mask {
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 10000;
		width: 100%;
		height: 100%;
	}

	.toast1 {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 20000;
		transform: translate(-50%, -50%);
		/* width: 220px; */
		background: #fff;
		background-color: rgb(252, 244, 224);
		width: 11.733333rem;
		height: 19.066667rem;
		background: url("@/assets/mz_xmpd_lanpagebg1.png") no-repeat 0 0/11.733333rem 19.066667rem;
	}

	/* 背景2 */
	.toast2 {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 20000;
		transform: translate(-50%, -50%);
		/* width: 220px; */
		background: #fff;
		background-color: rgb(252, 244, 224);
		width: 11.733333rem;
		height: 19.066667rem;
		background: url("@/assets/mz_xmpd_lanpagebg2.png") no-repeat 0 0/11.733333rem 19.066667rem;
	}

	/* 背景3 */
	.toast3 {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 20000;
		transform: translate(-50%, -50%);
		/* width: 220px; */
		background: #fff;
		background-color: rgb(252, 244, 224);
		width: 15.733333rem;
		height: 13.653333rem;
		background: url("@/assets/lc_xmpd_award_dialog.png") no-repeat 0 0/15.733333rem 13.653333rem;
	}

	.lc_xmpd_title {
		text-align: center;
	}

	.lc_xmpd_title img {
		margin-top: 2.666667rem;
		width: 8.8rem;
		height: 1.6rem;
		-webkit-animation: LCXMPDBreath 1.3s linear infinite;
		nimation: LCXMPDBreath 1.3s linear infinite;
	}

	.lc_xmpd_phone {
		display: flex;
		justify-content: center;
	}

	.lc_xmpd_phone1 {
		margin-top: 1.066667rem;
		width: 6.906667rem;
		height: 13.066667rem;
		-webkit-animation: LCXmpdBounce-down 3s linear infinite;
		animation: LCXmpdBounce-down 3s linear infinite;
	}

	.lc_xmpd_phone2 {
		margin-left: -2.666667rem;
		margin-top: 0px;
		width: 5.546667rem;
		height: 13.28rem;
		z-index: 100;
		-webkit-animation: LCXmpdBounce-down 3.2s linear infinite;
		animation: LCXmpdBounce-down 3.2s linear infinite;

	}

	.lc_xmpd_open {
		margin-top: 13.28rem;
		text-align: center;
	}

	.lc_xmpd_open_img {
		width: 4.506667rem;
		height: 4.506667rem;
		-webkit-animation: LCXMPDBreath 1.2s linear infinite;
		animation: LCXMPDBreath 1.2s linear infinite;
	}

	.lc_xmpd_start {
		margin-top: 10.133333rem;
		text-align: center;
	}

	.lc_xmpd_start_img {
		width: 8.426667rem;
		height: 1.946667rem;
		-webkit-animation: LCXMPDBreath 1.2s linear infinite;
		animation: LCXMPDBreath 1.2s linear infinite;
	}


	/* 上下动画 */
	@-webkit-keyframes LCXmpdBounce-down {
		25% {

			-webkit-transform: translateY(-0.266667rem);
		}

		50%,
		100% {
			-webkit-transform: translateY(0);
		}

		75% {
			-webkit-transform: translateY(0.266667rem);
		}
	}

	@keyframes LCXmpdBounce-down {
		25% {
			transform: translateY(-0.266667rem);
		}

		50%,
		100% {
			transform: translateY(0);
		}

		75% {
			transform: translateY(0.266667rem);
		}
	}

	/* 呼吸动画 */
	@keyframes LCXMPDBreath {
		0% {
			transform: scale(0.8);
		}

		50% {
			transform: scale(1);
		}

		100% {
			transform: scale(0.8);
		}
	}


	@-webkit-keyframes LCXMPDBreath {
		0% {
			-webkit-transform: scale(0.8);
		}

		50% {
			-webkit-transform: scale(1);
		}

		100% {
			-webkit-transform: scale(0.8);
		}
	}
</style>
