import {defineStore} from 'pinia'

export const useProductStore = defineStore('productStore',{
    state:()=>({
        products : [
            {name : 'Banana Skin', price: 20},
            {name : 'Star Flake', price: 40},
            {name : 'Milk Shake', price: 60},
            {name : 'Strawberry Smoothie', price: 80},
        ],
    }),

    /**
     * define getters here
     */
    getters:{
        getSaleProducts(){
          let saleProducts = this.products.map(product => {
              return {
                  name : '**'+product.name+'**',
                  price : product.price/2
              }
          });

          return saleProducts;
        },
    },

    /***
     * define actions here
     */
    actions :{
        reducePrice(amount){
          this.products.forEach(product => {
              product.price -= amount
          })
        },
    },

})