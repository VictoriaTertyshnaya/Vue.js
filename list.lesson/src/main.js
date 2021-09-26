import Vue from 'vue'
import App from './App.vue'
import List from './components/List.vue'

Vue.component('List', List)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')