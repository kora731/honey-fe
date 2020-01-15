import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import issuers from './issuers'

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
    selectedProduct: null,
    niceHash: { minPrice: 0, avgPrice: 0 },
    products: [],
    summary: {
      BTC: { ...summaryData, unit: 'T', sellers: new Set(), durationSellers: new Map(), contracts: [] },
      ETH: { ...summaryData, unit: 'M', sellers: new Set(), durationSellers: new Map(), contracts: [] },
      BCH: { ...summaryData, unit: 'T', sellers: new Set(), durationSellers: new Map(), contracts: [] }
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

          summary.contracts.push(p);
        }
      });

      const compact = (s, md) => _.chain(s.contracts)
        .filter(v => v.duration <= md)
        .sortBy(v => v.duration + (1 - v.expected_discount))
        .sortedUniqBy(v => {
          const ds = s.durationSellers.get(v.duration) || new Set();
          ds.add(v.issuers);
          s.durationSellers.set(v.duration, ds);
          return v.duration;
        })
        .value();

      state.summary.BTC.contracts = compact(state.summary.BTC, 360);
      state.summary.ETH.contracts = compact(state.summary.ETH, 2000);
      state.summary.BCH.contracts = compact(state.summary.BCH, 2000);
    },
    toggleFavorites(state, id) {
      if (state.favorites.indexOf(id) < 0) {
        state.favorites.push(id);
      } else {
        state.favorites = state.favorites.filter(v => v !== id);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    selectProduct(state, product) {
      state.selectedProduct = product;
    },
    setNiceHash(state, desc) {
      Object.assign(state.niceHash, desc);
    }
  },
  actions: {
    async init({ commit }) {
      const res = await axios.get('https://api.i43.io/honey');
      const data = res.data;
      const lastUpdate = Math.max(...data.map(v => v.update_time));

      commit('setProducts', data.filter(v => lastUpdate - v.update_time < 3600));

      const niceHash = await axios.get('https://api.i43.io/nicehash/main/api/v2/hashpower/orderBook?algorithm=SHA256');
      const orders = [...niceHash.data.stats.EU.orders, ...niceHash.data.stats.USA.orders]
        .filter(o => o.type === 'STANDARD' && o.acceptedSpeed > 0 || o.payingSpeed > 0);

      const minPrice = Math.min(...orders.map(o => o.price));
      const [t, tv] = orders.reduce((m, v) => {
        return [m[0] + v.price * (v.acceptedSpeed * 1 + v.payingSpeed * 1), m[1] + v.acceptedSpeed * 1 + v.payingSpeed * 1];
      }, [0, 0]);

      commit('setNiceHash', { minPrice, avgPrice: t / tv });
    }
  },
  modules: {
    issuers
  }
})
