import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import payments from './payments'
import productList from './productList'

export default new Vuex.Store({
    modules: {
        payments,
        productList,
    }
})