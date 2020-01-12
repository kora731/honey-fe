import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const summaryData = {
  coinPrice: 0,
  maxDiscount: 0,
  maxPayOff: 0,
  maxPayOffBtc: 0,
  price: 0
};

export default new Vuex.Store({
  state: {
    products: [],
    summary: {
      'BTC': { ...summaryData, unit: 'T', sellers: new Set() },
      'ETH': { ...summaryData, unit: 'M', sellers: new Set() },
      'BCH': { ...summaryData, unit: 'T', sellers: new Set() }
    },
    selectedCoins: ['BTC'],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      products.forEach(p => {
        const summary = state.summary[p.coin];
        if (summary) {
          summary.sellers.add(p.issuers);
          summary.maxDiscount = Math.max(
            summary.maxDiscount,
            p.expected_discount
          );
          summary.price = Math.min(summary.price || 999999, p.contract_cost);
          summary.coinPrice = p.btc_price;
          summary.maxPayOff = Math.max(summary.maxPayOff, p.mining_payoff);
          summary.maxPayOffBtc = Math.max(summary.maxPayOffBtc, p.mining_payoff_btc);
        }
      });
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
      const data = res.data;
      const lastUpdate = Math.max(...data.map(v => v.update_time));

      commit('setProducts', data.filter(v => lastUpdate - v.update_time < 3600));
    }
  },
  modules: {
  }
})
