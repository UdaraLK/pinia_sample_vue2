import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// import and use pinia in vue 2 ------------------------
import {createPinia,PiniaVuePlugin} from "pinia"
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

// persisting pina states--------------------------------
pinia.use((context)=>{
  console.log(context)
  const productStoreId = context.store.$id
  console.log(productStoreId)

  // sync data from store ---------------
  const fromLocalStorageProducts = JSON.parse(localStorage.getItem(productStoreId))
  if(fromLocalStorageProducts){
    context.store.$patch(fromLocalStorageProducts)
  }

  // listen to changes and update local storage --------------
  context.store.$subscribe((mutation,state)=>{
    localStorage.setItem(productStoreId,JSON.stringify(state))
  })
})

new Vue({
  pinia,
  render: h => h(App),
}).$mount('#app')
