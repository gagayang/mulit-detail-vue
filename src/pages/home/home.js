import Vue from 'vue'
import Home from './home.vue'

Vue.config.productionTip = false

console.log(process.env)
console.log(process.env.PATH_TYPE)

new Vue({
	render: h => h(Home),
}).$mount('#app')
