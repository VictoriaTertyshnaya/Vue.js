<template>
    <div>

        <div class="btn-toolbar">
            <div class="btn-group">
                <button class="btn btn-primary" v-for="p in pagination.pages" :key="p" @click.prevent="setPage(p)">{{p}}</button>
            </div>
        </div>
        Displaying from indexes {{ pagination.startIndex }} to {{ pagination.endIndex }}.
    </div>                

</template>

<script>

export default {
    name: 'Page', 
    data () {
        return {
            data: [          
                {"id":1, "name":"Food"},
                {"id":2, "name":"Transport"},
                {"id":3, "name":"Food"},
                {"id":4, "name":"Housing"},
                {"id":5, "name":"Healthcare"},
                {"id":6, "name":"Housing"},
                {"id":7, "name":"Clothing"},
                {"id":8, "name":"Food"},
                {"id":9, "name":"Housing"},
                {"id":10, "name":"Clothing"} 
            ],
            perPage: 3,
            pagination: {}
        }
    },
    computed: {
        collection() {
            return this.paginate(this.data);
        }
    },
    methods: {
        setPage(p) {
            this.pagination = this.paginator(this.data.length, p);
        },
        paginate(data) {
            return _.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
        },
        paginator(totalItems, currentPage) {
            let startIndex = (currentPage - 1) * this.perPage,
            endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
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