<template>
  <div>

    <div class="btn-toolbar">
      <div class="btn-group">
        <button class="btn btn-primary" v-for="p in pages" :key="p" @click.prevent="setPage(p)">{{ p }}
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Page',
  data() {
    return {
      size: 5
    }
  },
  computed: {
    ...mapState('payments', ['payments']),
    pages() {
      return Math.ceil(this.payments.length / this.size)
    }
  },
  methods: {
    setPage(p) {
      this.pagination = this.paginator(this.data.length, p);
    },
    paginator(totalItems, currentPage) {
      let startIndex = (currentPage - 1) * this.perPage,
        endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        // pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
      };
    }
  },
  created() {
    this.setPage(1);
  }
}

</script>

<style>


</style>
