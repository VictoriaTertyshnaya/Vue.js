<template>
    <div>
        <p>{{ list }}</p>
        <button class="btn_product" @click="addProduct">ADD</button>
        <p>{{ productList }}</p>
        {{ addName }}
    </div>
        
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
 
export default {
    name: 'Product',
    data() {
        return {
            list: [],
        }
    },
    computed: {
        ...mapState('productList', ['catalog']),
        ...mapGetters('productList', ['addName'])
    },
    methods: {
        ...mapMutations('productList', ['setProduct']),
        ...mapActions('productList', ['getProduct']),

        addProduct() {
            setTimeout( () => {
                this.list.push({name: 'Beef', category: 'meat'});
            }, 3000)
            this.setProduct([{ id: 0, name: 'setting'}])
            this.getProduct ({ id: 0, name: 'getting'})
        },
    }
}
</script>

<style>
.btn_product {
    padding: 5px 20px;
    background-color: rgb(225, 243, 237);
    margin-top: 20px;
    margin-left: 60px;
}
</style>