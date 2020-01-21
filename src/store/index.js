import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import issuers from './issuers'

Vue.use(Vuex);

const coins = ['BTC', 'ETH', 'BCH'];
const summaryData = {
  coinPrice: 0,
  maxDiscount: 0,
  maxPayOff: 0,
  maxPayOffBtc: 0,
  price: 0,
  hashrate: 0,
  reward: 0
};

function getDurationAlias(d) {
  const months = Math.round(d / 30);
  if (months <= 1) return '1 month';
  if (months < 12) return months + ' months';

  const years = Math.round(d / 365);
  if (years === 1) return '1 year';
  else return years + ' years';
}

export { getDurationAlias }
export default new Vuex.Store({
  state: {
    selectedProduct: null,
    niceHash: {
      SHA256: { minPrice: 0, avgPrice: 0 },
      DAGGERHASHIMOTO: { minPrice: 0, avgPrice: 0 }
    },
    products: [],
    coins,
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
      products = products.map(p => ({ ...p, durationAlias: getDurationAlias(p.duration) }));
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

      const compact = s => _.chain(s.contracts)
        .sortBy(['durationAlias', 'contract_cost'])
        .sortedUniqBy(v => {
          const ds = s.durationSellers.get(v.durationAlias) || new Set();
          ds.add(v.issuers);
          s.durationSellers.set(v.durationAlias, ds);
          return v.durationAlias;
        })
        .sortBy('duration')
        .value();

      state.summary.BTC.contracts = compact(state.summary.BTC);
      state.summary.ETH.contracts = compact(state.summary.ETH);
      state.summary.BCH.contracts = compact(state.summary.BCH);
    },
    setHashrate(state, o) {
      Object.assign(state.summary[o.coin], o);
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
    setNiceHash(state, { algorithm, data }) {
      Object.assign(state.niceHash[algorithm], data);
    }
  },
  actions: {
    async init({ commit }) {
      const res = await axios.get('https://api.i43.io/honey');
      const data = res.data;
      const lastUpdate = Math.max(...data.map(v => v.update_time));

      commit('setProducts', data.filter(v => v.sold_percent < 99.99 && lastUpdate - v.update_time < 3600));

      // const getChainInfo = async coin => {
      //   const { data } = await axios.get(`https://api.i43.io/crypto/data/blockchain/histo/day?fsym=${coin}&limit=3`);
      //   if (data.Data) {
      //     if (data.Data.Data.length > 2) data.Data.Data.shift();
      //     const [d0, d1] = data.Data.Data;
      //     const stats = { coin, hashrate: d1.hashrate, reward: d1.current_supply - d0.current_supply };
      //     commit('setHashrate', stats);
      //   }
      // };
      //
      // getChainInfo('BTC');
      // getChainInfo('ETH');
      // getChainInfo('BCH');

      const nicehHashData = async algorithm => {
        const { data } = await axios.get('https://api.i43.io/nicehash/main/api/v2/hashpower/orderBook?algorithm=' + algorithm);
        const orders = [...data.stats.EU.orders, ...data.stats.USA.orders]
          .filter(o => o.type === 'STANDARD' && o.acceptedSpeed > 0 || o.payingSpeed > 0);

        const minPrice = Math.min(...orders.map(o => o.price));
        const [t, tv] = orders.reduce((m, v) => {
          return [m[0] + v.price * (v.acceptedSpeed * 1 + v.payingSpeed * 1), m[1] + v.acceptedSpeed * 1 + v.payingSpeed * 1];
        }, [0, 0]);

        // window.console.log(minPrice, t / tv);
        commit('setNiceHash',  { algorithm, data: { minPrice, avgPrice: t / tv }});
      };

      nicehHashData('SHA256');
      nicehHashData('DAGGERHASHIMOTO');
    }
  },
  modules: {
    issuers
  }
})
