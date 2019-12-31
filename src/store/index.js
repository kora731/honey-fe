import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    toggleFavorites(state, id) {
      if (state.favorites.indexOf(id) < 0) {
        state.favorites.push(id);
      } else {
        state.favorites = state.favorites.filter(v => v !== id);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
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
