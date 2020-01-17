<template>
  <v-tabs centered center-active v-model="activeCoinTab">
    <v-tab v-for="coin of coins" :key="'tab-' + coin" @click="$store.state.selectedCoins = [coin]">{{coin}}</v-tab>
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
          align="center"
          align-content="center"
          class="caption d-flex"
          style="margin: 0; margin-top: 24px;"
        >
          <v-col cols="3">Contract Duration</v-col>
          <v-col cols="3">Lowest Unit Cost</v-col>
          <v-col cols="3" class="costCol">Cost Basis</v-col>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-col cols="3" style="text-align:center;">
                {{slot2[0]}}
                <v-icon v-on="on" class="body-1 mx-1">mdi-arrow-down-drop-circle-outline</v-icon>
              </v-col>
            </template>
            <v-list>
              <v-list-item v-for="[title, field] of slot2Menu"
                           :key="title"
                           @click="slot2 = [title, field]"
              >
                <v-list-item-title>{{title}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

<!--          <v-col cols="3" style="text-align:center;">Expected ROI</v-col>-->
        </v-row>
        <v-row justify="space-between" align="center" align-content="center" class="homeDeal v-card--hover" @click="goToNicehash(coin)">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" >Real time <v-chip small color="cyan lighten-4">NiceHash</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">{{niceHash[getAlg(coin)].avgPrice * btcPrice / getFactor(coin) | price}}<span class="grey--text"> (/{{summary[coin].unit}}/Day)</span></v-col>
          <v-col cols="3" class="costCol">{{niceHash[getAlg(coin)].avgPrice * btcPrice / summary[coin].maxPayOffBtc / getFactor(coin) | price}}<span class="grey--text"> per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI">N/A</v-col>
        </v-row>
        <v-row v-for="(c, idx) in summary[coin].contracts" @click="jump(coin, c.durationAlias)" :key="idx" justify="space-between"  align="center" align-content="center" class="homeDeal v-card--hover">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" >{{c.durationAlias}} <v-chip small color="cyan lighten-4">{{summary[coin].durationSellers.get(c.duration).size}} Platforms</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">{{c.contract_cost | price}} <span class="grey--text">(/{{summary[coin].unit}}/Day)</span></v-col>
          <v-col cols="3" class="costCol">{{c.contract_cost / c.mining_payoff_btc | price}} <span class="grey--text">per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI" v-if="slot2[1] !== 'expected_breakeven_days'">
            {{c[slot2[1]] || slot2[1](c) | percent}}
          </v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI" v-if="slot2[1] === 'expected_breakeven_days'">
            {{c.expected_breakeven_days.toFixed(0)}}
          </v-col>
        </v-row>
      </div>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import qs from "querystring";
import { mapState } from "vuex";

import { percent, price, unit } from "../filters";

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
    percent,
    unit,
    price
  },
  data() {
    return {
      activeCoinTab: this.$store.state.coins.indexOf(this.$store.state.selectedCoins[0]),
      slot2Menu: [
        ["ROI", item => item.mining_payoff / item.contract_cost - 1],
        ["Breakeven Days", "expected_breakeven_days"],
        ["%OFF vs buying", item => (item.btc_price - item.contract_cost / item.mining_payoff_btc) / item.btc_price]
      ],
      slot2: ["ROI", item => item.mining_payoff / item.contract_cost - 1]
    };
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