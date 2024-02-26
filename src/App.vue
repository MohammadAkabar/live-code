<script>
  import Text from './components/Text.vue'
  import { mapActions, mapWritableState } from 'pinia'
  import { useProductStores } from './stores/product'
  export default {
    computed: {
      ...mapWritableState(useProductStores, ['dataProducts']),
    },
    method: {
      ...mapActions(useProductStores, ['fetchProducts']),
    },
    components: {
      Text,
    },
    created() {
      this.fetchProducts()
      console.log(this.dataProducts)
    },
  }
</script>

<template>
  <div>
    <div v-for="dataProduct in dataProducts">
      <ul>
        <li>{{ dataProducts.products.id }}</li>
        <li></li>
      </ul>
    </div>
    <Text />
  </div>
</template>
