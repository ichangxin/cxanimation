import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../src/font/font.js'

import lottie from 'vue-lottie';

Vue.component('lottie', lottie)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
