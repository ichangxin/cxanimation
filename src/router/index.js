import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FrameAnimationView from '@/views/FrameAnimationView.vue'
import PixiJSTestView     from '@/views/PixiJSTest.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/frame_animation',
		name: 'frame_animation',
		component: FrameAnimationView
	},
	{
		path: '/pixi_animation',
		name: 'pixi_animation',
		component: PixiJSTestView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
