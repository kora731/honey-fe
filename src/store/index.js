import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async init({ commit }) {
      const res = await axios.get('https://api.i43.io/honey');
      commit('setProducts', res.data);
    }
  },
  modules: {
  }
})
