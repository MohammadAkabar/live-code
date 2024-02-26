import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStores = defineStore('product', {
  state: () => ({ dataProducts: [] }),
  actions: {
    async fetchProducts() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://dummyjson.com/products',
          responseType: 'json',
        })
        this.dataProducts = data
      } catch (e) {
        console.log(e)
      }
    },
  },
})
