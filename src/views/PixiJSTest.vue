<template>
	<div class="cx_pixijs_learn">
		<div class="spineBox">
			<div class="btnBox">
				<button @click="createAnimate">开始游戏</button>
				<button @click="spineVictoryFun">胜利</button>
				<button @click="spineFailFun">失败</button>
			</div>
			<canvas class="PIXI" ref="PIXI"></canvas>
		</div>
	</div>
</template>

<script>
	import * as PIXI from "pixi.js";
	import {
		Spine
	} from "pixi-spine";

	import * as CXPixiJSData from '@/assets/mz_rocket/mz_rocket.json';
	// import logo from '@/assets/bunny.png'
	export default {
		name: "pixi_demo",
		props: {},
		data() {
			return {
				app: null,
				dragonCage: null,
				heroOne: null,
				hero: null,
			}
		},

		mounted() {
			this.createAnimate();
		},

		methods: {

			//烧饭
			createAnimate() {
				this.app = new PIXI.Application({
					width: 375,
					height: 200,
					view: this.$refs.PIXI, // 用作视图的画布
					antialias: true, //  反锯齿
					transparent: true, //  透明度
					resolution: 1 //  分辨率
				});
				this.app.stop();
				this.app.stage.interactive = true;
				this.app.loader
					// .add("lobster", "/lobster/diaolongxia.json")
					.add("cook", "/cook/shaofan.json")
					// .add(["/cook/shaofan.json", "/cook/shaofan.atlas", "/cook/shaofan.png"])
					.load((loader, res) => {
						// console.log("@@@", Spine);
						// console.log("资源：", res);
						// console.log("@@@@", res.cook);
						const hero = new Spine(res.cook.spineData);
						this.hero = hero;
						// console.log("res.cook.spineData: ", res.cook.spineData);
						this.heroOne = hero;
						this.dragonCage = new PIXI.Container();

						this.dragonCage.addChild(hero);
						const localRect = hero.getLocalBounds();
						hero.position.set(-localRect.x, -localRect.y);
						const scale = Math.min(
							(this.app.screen.width * 0.8) / this.dragonCage.width,
							(this.app.screen.height * 0.8) / this.dragonCage.height
						);
						this.dragonCage.scale.set(scale, scale);
						console.log(this.app.screen.width)
						console.log(this.app.screen.height)
						console.log(this.dragonCage.width)
						console.log(this.dragonCage.height)
						this.dragonCage.position.set(
							(this.app.screen.width - this.dragonCage.width) / 2,
							(this.app.screen.height - this.dragonCage.height) / 2
						);
						this.app.stage.addChild(this.dragonCage);

						// 播放动画（播放刚刚开始循环动画，如果有初始动画，则先set初始动画，设置为false，再add循环动画，设置为true）
						// console.log("hero.state: ", hero.state);
						hero.state.addAnimation(0, "start", true, 0); //  钓龙虾过程动画  true:循环
					});
				this.app.start();
				this.spineFinish = true;
			},
			//  spine动画胜利
			spineVictoryFun() {
				this.hero.state.setAnimation(0, "good", false, 0); //  烧饭成功开盖动画      注：set是设置动画，
				this.hero.state.addAnimation(0, "loop_good", true,
					0); //  开盖动画结束之后，循环烧饭成功开盖之后的动画，add是在上一个动画结束之后会自动播放这个动画
			},
			//  spine动画失败
			spineFailFun() {
				this.hero.state.setAnimation(0, "bad", false, 0); //  烧饭失败开盖动画    
				this.hero.state.addAnimation(0, "loop_bad", true, 0); //  开盖动画结束之后，循环烧饭失败开盖之后的动画
			},




			// // 钓龙虾
			// createAnimate() {
			// 	this.app = new PIXI.Application({
			// 		width: 375,
			// 		height: 667,
			// 		view: this.$refs.PIXI,
			// 		antialias: true,
			// 		transparent: true,
			// 		resolution: 1
			// 	});
			// 	this.app.stop();
			// 	this.app.stage.interactive = true;
			// 	this.app.loader
			// 		.add("lobster", "/lobster/diaolongxia.json")
			// 		.load((loader, res) => {
			// 			const hero = new Spine(res.lobster.spineData);
			// 			this.hero = hero;
			// 			console.log("res.lobster.spineData: ", res.lobster.spineData);
			// 			this.heroOne = hero;
			// 			this.dragonCage = new PIXI.Container();

			// 			this.dragonCage.addChild(hero);
			// 			const localRect = hero.getLocalBounds();
			// 			hero.position.set(-localRect.x, -localRect.y);
			// 			// const scale = Math.min(
			// 			//     (this.app.screen.width / this.dragonCage.width),
			// 			//     (this.app.screen.height / this.dragonCage.height)
			// 			// );
			// 			// this.dragonCage.scale.set(scale, scale);
			// 			this.dragonCage.scale.set(0.5, 0.5);
			// 			console.log(this.app.screen.width)
			// 			console.log(this.app.screen.height)
			// 			console.log(this.dragonCage.width)
			// 			console.log(this.dragonCage.height)
			// 			this.dragonCage.position.set(
			// 				(this.app.screen.width - this.dragonCage.width) / 2,
			// 				(this.app.screen.height - this.dragonCage.height) / 2
			// 			);
			// 			this.app.stage.addChild(this.dragonCage);

			// 			// 播放动画（播放刚刚开始循环动画，如果有初始动画，则先set初始动画，设置为false，再add循环动画，设置为true）
			// 			console.log("hero.state: ", hero.state);
			// 			hero.state.addAnimation(0, "start", false, 0); //  钓龙虾过程动画  true:循环
			// 			hero.state.addAnimation(0, "loop", true, 0); //  钓龙虾过程动画  true:循环
			// 		});
			// 	this.app.start();
			// 	this.spineFinish = true;
			// },
			// //  spine动画胜利
			// spineVictoryFun() {
			// 	this.hero.state.setAnimation(0, "chenggong", false, 0); //  钓龙虾成功开盖动画      注：set是设置动画，
			// 	this.hero.state.addAnimation(0, "cai-xunhuan", true,
			// 		0); //  开盖动画结束之后，循环钓龙虾成功开盖之后的动画，add是在上一个动画结束之后会自动播放这个动画
			// },
			// //  spine动画失败
			// spineFailFun() {
			// 	this.hero.state.setAnimation(0, "shibai", false, 0); //  钓龙虾失败开盖动画
			// },

		},


	}
</script>

<style>
</style>
