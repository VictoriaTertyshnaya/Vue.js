<template>
  <div >
    
       <input class="area_date" type="text" placeholder="Payment date" v-model="date">
       <input class="area_description" type="text" placeholder="Payment description" v-model="category">
       <input class="area_amount" type="text" placeholder="Payment amount" v-model.number="value">
    
    <br>

    <button class="btn_payment" @click="addPayment">ADD</button>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PaymentForm',
  data () {
      return {
          category: '',
          value: null,
          date: null,
      }
  },
   props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        ...mapState('payments', ['payments'])

    },

    methods: {
       ...mapMutations('payments', ['newPayment']),

       addPayment() {

            let addId = 0
            this.list.map(function(element){
                if (element.id > addId) addId = element.id;
            });
            if ((this.value !== 0 ) && (this.data !== "") && (this.category !=="")){
            const addPayment = {
                id: addId + 1,
                date: this.date,
                category: this.category,
                value: this.value
            }        
            this.$emit('getPayment', addPayment);
            this.newPayment (addPayment);
            }
        }
    }
}


</script>

<style>

.area_date, .area_description, .area_amount {
    padding-block: 10px;
    width: 190px;
    padding-left: 5px;
}

.btn_payment {
    padding: 5px 20px;
    background-color: rgb(225, 243, 237);
    margin-top: 20px;
    margin-left: 60px;
}

.area_date {
    margin-left: 35px;
}

</style>