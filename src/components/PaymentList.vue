<template>
<div class="list_form">

    <div class="payment_list">
        <div class="main_list">
            <div class="id">№</div>
            <div class="date">Date</div>
            <div class="description">Description</div>
            <div class="amount">Amount</div>
        </div>
    </div>

    <div class="item" v-for="item in list" :key="item.data">
        <div class="id">
            {{ item.id }}
        </div>
        <div class="date">
            {{ item.date }}
        </div>
        <div class="description">
            {{ item.category }}
        </div>
        <div class="amount">
            {{ item.value }}
        </div>
    </div>
     <Page />
</div>
</template>

<script>

import Page from './Page.vue';

import { mapActions } from 'vuex'

export default {
  name: 'PaymentList',
  components: {
    Page
  },
  props: {
      list: {
          type: Array,
          default: () => []
      }
  },
  methods: {
        ...mapActions('payments', ['getPayments']),

    },
    mounted() {
        this.getPayments();
    },
}

</script>

<style>

.list_form {
    display: inline-block;
}
.payment_list {
    width: 650px;
    margin: 30px;
    border: 1px solid grey;
}
.item, .main_list {
    display: flex;
    padding: 10px;
}
.id {
    width: 50px;
    padding: 5px;
}
.date {
    width: 100px;
    padding: 5px;
}
.description {
    width: 400px;
    padding: 5px;
}
.amount {
    width: 100px;
    padding: 5px;
}
</style>
