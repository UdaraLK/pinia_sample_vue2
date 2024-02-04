<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in productStore.getSaleProducts">
        <span class="name">{{product.name}} </span>
        <span class="price">Rs. {{product.price}}</span>
      </li>
    </ul>
    <button @click="productStore.reducePrice(1)">Reduce All Prices</button>
    <button @click="clearLocalStorageProducts">Reset Values</button>
  </div>
</template>

<script>
import {useProductStore} from "@/stores/ProductStore";

export default {

  setup(){
    const productStore = useProductStore()

    return {productStore}
  },

  methods :{

    /*
    This method is used to clear values stored on the local storage
     */
    clearLocalStorageProducts(){
      const storeId = this.productStore.$id
      console.log(this.productStore)

      if(localStorage.getItem(storeId)){
        localStorage.removeItem(storeId)
        window.location.replace('/')
      }
    },
  },


}
</script>

<style scoped>
#product-list-one{
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul{
  padding: 0;
}
#product-list-one li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
.price{
  font-weight: bold;
  color: #E8800C;
}
</style>