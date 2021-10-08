<template>
  <div>
   <PaymentList :list = "responseData" /> 

     <div>
    <button class="btn_cost" @click="getTable">ADD NEW COST+</button> 
    <PaymentForm :list="responseData" v-if="getRow" @getPayment="getPayment" /> 
     </div>

  </div>
</template>

<script>
import PaymentList from '../components/PaymentList.vue'
import PaymentForm from './PaymentForm.vue';

export default {
  name: 'List',
  components: {
    PaymentList, PaymentForm
  },
  data () {
      return {
          getRow: false,
          responseData: [
              {
                  id: 1,
                  date: '28.03.2020',
                  category: 'Food',
                  value: '169',
              },

              {
                  id: 2,
                  date: '24.03.2020',
                  category: 'Transport',
                  value: '360',
              },

               {
                  id: 3,
                  date: '24.03.2020',
                  category: 'Food',
                  value: '532',
              },
               {
                  id: 4,
                  date: '21.03.2020',
                  category: 'Housing',
                  value: '273',
              },
               {
                  id: 5,
                  date: '21.03.2020',
                  category: 'Healthcare',
                  value: '545',
              },
                {
                  id: 6,
                  date: '16.03.2020',
                  category: 'Housing',
                  value: '502',
              },
                {
                  id: 7,
                  date: '14.03.2020',
                  category: 'Clothing',
                  value: '692',
              },
                {
                  id: 8,
                  date: '02.03.2020',
                  category: 'Food',
                  value: '143',
              },
                {
                  id: 9,
                  date: '01.03.2020',
                  category: 'Housing',
                  value: '339',
              },
                {
                  id: 10,
                  date: '28.02.2020',
                  category: 'Clothing',
                  value: '913',
              },
          ]
      }
  },
   methods: {
        getTable () {
            this.getRow = !this.getRow;
        },
       getPayment(addData) {
            this.responseData = [...this.responseData, addData]
        }
    }
}
</script>

<style scoped>

.btn_cost {
   margin-left: 60px;
   margin-top: 20px;
   margin-bottom: 20px;
   padding: 10px;
   background-color: rgb(225, 243, 237);
   cursor: pointer;
}



</style>
