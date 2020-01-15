<template>
  <v-tabs centered center-active>
    <v-tab v-for="coin of coins" :key="'tab-' + coin">{{coin}}</v-tab>
    <v-tab-item  v-for="coin of coins" :key="'tab-item-' + coin">
      <v-row class="mx-4 pt-4 d-flex font-weight-light" :justify="$vuetify.breakpoint.xsOnly ? 'start' : 'center'">
        <div class="mx-4">
          <v-icon>mdi-coin</v-icon>
          {{coin}} price: ${{summary[coin].coinPrice}}
<!--          <span class="red&#45;&#45;text">(-1.63%)</span>-->
        </div>
        <div class="mx-4">
          <v-icon>mdi-treasure-chest</v-icon>
          {{coin}} mining earnings: ${{summary[coin].maxPayOff.toFixed(4)}} /{{summary[coin].unit}}/Day ({{summary[coin].maxPayOffBtc.toFixed(8)}} BTC)
        </div>
      </v-row>
      <div class="pa-4">
        <v-row
          justify="space-between"
          align-content="center"
          class="caption d-none d-sm-flex"
          style="margin: 0; margin-top: 24px;"
        >
          <v-col cols="3">Contract Duration</v-col>
          <v-col cols="3">Lowest Unit Cost</v-col>
          <v-col cols="3" class="costCol">Cost Basis</v-col>
          <v-col cols="3" style="text-align:center;">Expected ROI</v-col>
        </v-row>
        <v-row justify="space-between" align-content="center" class="homeDeal v-card--hover" @click="goToNicehash(coin)">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" ><v-chip small color="cyan lighten-4">NiceHash</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">{{(niceHash[getAlg(coin)].avgPrice * btcPrice / getFactor(coin)).toFixed(4)}}<span class="grey--text">(/{{summary[coin].unit}}/Day)</span></v-col>
          <v-col cols="3" class="costCol">{{(niceHash[getAlg(coin)].avgPrice * btcPrice / summary[coin].maxPayOffBtc / getFactor(coin)).toFixed(4)}}<span class="grey--text">per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI">N/A</v-col>
        </v-row>
        <v-row v-for="(c, idx) in summary[coin].contracts" @click="jump(coin, c.duration)" :key="idx" justify="space-between" align-content="center" class="homeDeal v-card--hover">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" >{{c.duration}} Days <v-chip small color="cyan lighten-4">{{summary[coin].durationSellers.get(c.duration).size}} Platforms</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">{{c.contract_cost.toFixed(4)}} <span class="grey--text">(/{{summary[coin].unit}}/Day)</span></v-col>
          <v-col cols="3" class="costCol">${{c.contract_cost / c.mining_payoff_btc | price}} <span class="grey--text">per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI">{{(c.mining_payoff / c.contract_cost) -1 | percent}}</v-col>
        </v-row>
      </div>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import qs from "querystring";
import { mapState } from "vuex";

export default {
  name: "SummaryTable",
  computed: {
    ...mapState(["summary", "niceHash", "coins"]),
    btcPrice() {
      return this.$store.state.summary.BTC.coinPrice;
    }
  },
  methods: {
    goToNicehash(coin) {
      this.$gtag.event("nicehash", { event_category: 'check-it-out', event_label: coin });
      window.open("https://www.nicehash.com/my/marketplace/SHA256");
    },
    getAlg(coin) {
      return coin === 'ETH' || coin === 'ETC' ? 'DAGGERHASHIMOTO' : 'SHA256';
    },
    getFactor(coin) {
      return coin === 'ETH' || coin === 'ETC' ? 1000 * 1000 : 1000;
    },
    jump(coin, duration) {
      location.href = "#/products?" + qs.encode({ coin, duration });
    }
  },
  filters: {
    percent(v) { return v && (v * 100).toFixed(0) + '%'; },
    price(v) { return v && v.toFixed(2); }
  }
}
</script>

<style scoped lang="scss">
.v-card--hover:hover {
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 229, 0, 0.8),
  0px 2px 2px 2px rgba(251, 255, 0, 0.2);
  box-shadow: 0px 0px 0px 2px rgba(255, 229, 0, 0.8),
  0px 2px 2px 2px rgba(251, 255, 0, 0.2);
}

.homeDeal{
    margin:12px;
    background: #fafafa;
    border-radius: 6px;
}
.dealROI
{
  color: #222;
  background-color: #FFFACC !important;
  text-align: center;
}

.costCol{
      display: block;
    }
@media only screen and (max-width: 600px) {
    .costCol{
      display: none;
    }
}
</style>