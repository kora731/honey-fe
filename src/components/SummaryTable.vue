<template>
  <v-tabs centered center-active v-model="activeCoinTab">
    <v-tab v-for="coin of coins" :key="'tab-' + coin" @click="$store.state.selectedCoins = [coin]">{{coin}}</v-tab>
    <v-tab-item  v-for="coin of coins" :key="'tab-item-' + coin">
      <v-row class="mx-4 font-weight-medium body-2 d-flex tableHeader" style="background: white;" >
        <v-col col="12" xs="12" md="6" lg="3">
          <div class="caption grey--text">{{coin}} block rewards (last 24 hr):</div> 
          <div>{{summary[coin].maxPayOff | price}} /{{summary[coin].unit}} ({{summary[coin].maxPayOffBtc | price(coin, 8, 'BCH ')}})</div>
        </v-col>
        <v-col col="12" xs="12"  md="6" lg="3">
          <div class="caption grey--text">{{coin}} price:</div>
          <div>{{summary[coin].coinPrice | price('USD', 2) }}</div>
<!--          <span class="red&#45;&#45;text">(-1.63%)</span>-->
        </v-col>
        <v-col col="12" xs="12"  md="6" lg="3">
          <div class="caption grey--text">{{coin}} Hashrate:</div> 
          <div>105,53X,XXXT</div>
        </v-col>
        <v-col col="12" xs="12" md="6" lg="3">
          <div class="caption grey--text">{{coin}} mining earnings:</div> 
          <div>{{summary[coin].maxPayOff | price}} /{{summary[coin].unit}}/Day ({{summary[coin].maxPayOffBtc | price(coin, 8, 'BCH ')}}) </div>
        </v-col>
      </v-row>
      <div class="pa-2">
        <v-chip small color="#ffe500" class="ma-2 font-weight-bold">Spot Contracts</v-chip>
         <v-row justify="space-between" align="center" align-content="center" class="homeDeal v-card--hover" @click="goToNicehash(coin)">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" >Real time <v-chip small color="cyan lighten-4">NiceHash</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">{{niceHash[getAlg(coin)].avgPrice * btcPrice / getFactor(coin) | price}}<span class="grey--text"> (/{{summary[coin].unit}}/Day)</span></v-col>
          <v-col cols="3" class="costCol">{{niceHash[getAlg(coin)].avgPrice * btcPrice / summary[coin].maxPayOffBtc / getFactor(coin) | price('USD', 2)}}<span class="grey--text"> per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI">Discount  -47%</v-col>
        </v-row>

        <v-chip small color="#ffe500" class="ma-2 font-weight-bold">Forward Contracts</v-chip>
        <v-row
          justify="space-between"
          align="center"
          align-content="center"
          class="caption d-flex"
          style="margin: 0;"
        >
          <v-col cols="3">Contract Duration</v-col>
          <v-col cols="3">Best Unit Price</v-col>
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
       
        <v-row v-for="(c, idx) in summary[coin].contracts" @click="jump(coin, c.duration)" :key="idx" justify="space-between"  align="center" align-content="center" class="homeDeal v-card--hover">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" >{{c.durationAlias}} <v-chip small color="cyan lighten-4">{{summary[coin].durationSellers.get(c.durationAlias).size}} Platforms</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">{{c.contract_cost | price}} <span class="grey--text">(/{{summary[coin].unit}}/Day)</span></v-col>
          <v-col cols="3" class="costCol">{{c.contract_cost / c.mining_payoff_btc | price('USD', 2)}} <span class="grey--text">per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI" :class="getValueColor(c[slot2[1]] || slot2[1](c))" v-if="slot2[1] !== 'expected_breakeven_days'">
            {{c[slot2[1]] || slot2[1](c) | percent}}
          </v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI" v-if="slot2[1] === 'expected_breakeven_days'">
            {{c.expected_breakeven_days.toFixed(0)}}
          </v-col>
        </v-row>

        <v-chip small color="#ffe500" class="ma-2 font-weight-bold">Other Contracts</v-chip>
         <v-row justify="space-between" align="center" align-content="center" class="homeDeal v-card--hover">
          <v-col cols="4" xs="4" sm="3" md="3" lg="3" >Miner Lifetime<v-chip small color="cyan lighten-4">3 Platforms</v-chip></v-col>
          <v-col cols="5" xs="5" sm="3"  md="3" lg="3">Price <span class="grey--text"> (/{{summary[coin].unit}})</span></v-col>
          <v-col cols="3" class="costCol"> - <span class="grey--text"> per {{coin}}</span></v-col>
          <v-col cols="3" xs="3" sm="3"  md="3" lg="3" class="dealROI">Breakeven 45 days</v-col>
        </v-row>
      </div>

      <summary-chart :summary="summary[coin]" :coin="coin" />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import qs from "querystring";
import { mapState } from "vuex";
import SummaryChart from "./SummaryChart";

import { percent, price, unit } from "../filters";
import { getValueColor } from "../utils";

export default {
  name: "SummaryTable",
  components: { SummaryChart },
  computed: {
    ...mapState(["summary", "niceHash", "coins"]),
    btcPrice() {
      return this.$store.state.summary.BTC.coinPrice;
    }
  },
  methods: {
    getValueColor,
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
    .tableHeader
    {
      display: none !important;
    }
}
</style>