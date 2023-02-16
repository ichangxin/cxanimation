<template>
	<div class="cx_frame_animation">
		<h2>帧动画</h2>
		<!-- 奔跑的小人1 -->
		<div class="run_people_one">

		</div>

		<!-- 奔跑的小人2 -->
		<div class="run_people_two">


			<!-- 姓名配对奖励弹框1 -->
			<div class="toast1" v-show="isShowToast1">

				<div class="lc_toast-container">
					<!-- 标题 -->
					<div class="lc_xmpd_title">
						<img src="@/assets/mz_xmpd_lanpageb_title.png" />
					</div>
					<!-- 手机1 -->
					<div class="lc_xmpd_phone">
						<img src="@/assets/mz_xmpd_lanpageb_phone1.png" class="lc_xmpd_phone1" />
						<img src="@/assets/mz_xmpd_lanpageb_phone2.png" class="lc_xmpd_phone2" />
					</div>

				</div>

			</div>

			<div class="toast2" v-show="isShowToast1">
				<div class="lc_xmpd_open">
					<img src="@/assets/mz_xmpd_lanpageb_open.png" alt="打开" class="lc_xmpd_open_img"
						@click="LCOpenTwoDialogClicked" />
				</div>
			</div>

			<div class="toast3" v-show="isShowToast2">
				<div class="lc_xmpd_start">
					<img src="@/assets/lc_xmpd_start.png" alt="打开" class="lc_xmpd_start_img"
						@click="LCXMPDStartClicked" />
				</div>
			</div>

			<!-- 遮罩层 -->
			<div class="toast-mask" v-show="isShowToastMask"></div>

		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				isShowToastMask:true,  //显示遮罩
				isShowToast1: true, //显示第一个弹框
				isShowToast2: false, //显示第二个弹框
			}
		},
		methods: {
			LCOpenTwoDialogClicked() {
				this.isShowToast1 = false;
				this.isShowToast2 = true;
			},
			
			LCXMPDStartClicked(){
				this.isShowToast2 = false;
				this.isShowToastMask = false;
			},
		},
	}

</script>

<style>
	.run_people_one {
		width: 103px;
		height: 157px;
		background: url(@/assets/frameanimation/run_people_one.png);
		-webkit-animation: run_one 2s steps(1) 0s infinite both;
		animation: run_one 2s steps(1) 0s infinite both;
	}

	@keyframes run_one {
		0% {
			background-position: 0 0
		}

		10% {
			background-position: -100% 0
		}

		20% {
			background-position: -200% 0
		}

		30% {
			background-position: -300% 0
		}

		40% {
			background-position: -400% 0
		}

		50% {
			background-position: 0 -100%
		}

		60% {
			background-position: -100% -100%
		}

		70% {
			background-position: -200% -100%
		}

		80% {
			background-position: -300% -100%
		}

		90% {
			background-position: -400% -100%
		}

		100% {
			background-position: 0 0
		}
	}


	.run_people_two {
		width: 134px;
		height: 136px;
		background: url(@/assets/frameanimation/run_people_two.png);
		-webkit-animation: run_two 2s steps(9) 0s infinite both;
		animation: run_two 2s steps(9) 0s infinite both;
	}


	@keyframes run_two {
		to {
			background-position: -900% 0
		}
	}

	@-webkit-keyframes run_two {
		to {
			background-position: -900% 0
		}
	}
</style>
