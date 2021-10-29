const state = {
    productList: [{
            id: 1,
            name: '',
        },

    ]
}

const getters = {
    addName: state => {
        return state.productList.map(el => el.name)
    }
}

const mutations = {
    setProduct(state, productList) {
        state.productList = productList;
    }
}

const actions = {
    getProduct({ commit }, param) {
        console.log(param.id)

        fetch('https://raw.githubusercontent.com/VictoriaTertyshnaya/Vue.js/main/JSON/name.json')
            .then(response => response.json())
            .then(res => {
                commit('setProduct', res)
            })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}