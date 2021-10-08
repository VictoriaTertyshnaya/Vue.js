const state = {
    payments: []

}

const mutations = {
    setPayments(state, payments) {
        state.payments = payments;
    },

    addPayment(state, item) {
        state.payments.push(item);
    }
}


const actions = {
    getPayments({ commit }) {

        fetch('https://raw.githubusercontent.com/VictoriaTertyshnaya/Vue.js/main/JSON/payment.json')
            .then(response => response.json())
            .then(res => {
                commit('setPayments', res)
            })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}