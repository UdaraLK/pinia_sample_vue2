<template>
  <div id="app">
    <ProductListOne></ProductListOne>
    <ProductListTwo></ProductListTwo>
  </div>
</template>

<script>
import ProductListOne from "@/components/ProductListOne";
import ProductListTwo from "@/components/ProductListTwo";

export default {
  name: 'App',

  components :{
    ProductListOne,
    ProductListTwo,
  },

  data (){
    return {

    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
