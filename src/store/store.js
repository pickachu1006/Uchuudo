import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import $ from 'jquery'


import productsModules from './products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart:{},
    cartlen: 0,
    isLoading: false, //控制全畫面loading效果
    status:{
      loadingItem: '', //控制loading icon
    },
    
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    ICONLOADING(state,status){
      state.status.loadingItem=status;
    },
    CART(state, payload) {
      state.cart = payload;
      state.cartlen = payload.carts.length
    },

    
  },
  actions: {
    iconLoading(context,status){
      context.commit('ICONLOADING', status);
    },
    addtoCart(context,{id, qty }){
      const url =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart ={
        product_id:id,
        qty
      }
      context.commit('ICONLOADING', id); //開啟icon loading效果
      axios.post(url,{data:cart}).then((response)=>{ 
          console.log(response)
          context.dispatch('getCart');
          $('#productModal').modal('hide');//關閉Modal
          // vm.status.loadingItem = ''; //關閉icon loading效果
          context.commit('ICONLOADING','');
      })
    },
    getCart(context){
      const url =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      // vm.isLoading = true; //開啟全畫面loading效果
      context.commit('LOADING',true);
      axios.get(url).then((response)=>{ 
          console.log(response)
          context.commit('CART',response.data.data);
          context.commit('LOADING',false); //關閉全畫面loading效果
      })
    },
    removeCartItem(context,id){
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
        context.commit('LOADING',true);
        axios.delete(url).then((response)=>{
          context.dispatch('getCart');
          console.log(response);
          context.commit('LOADING',false);
        })
    },
    
  },
  getters: {
    cart: state => state.cart,  
  },
  modules: {
    productsModules,
  }
})
