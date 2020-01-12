<template>
  <v-tabs :centered="true">
    <v-tab v-for="coin of coins" :key="'tab-' + coin">{{coin}}</v-tab>
    <v-tab-item  v-for="coin of coins" :key="'tab-item-' + coin">
      <v-row class="mx-4 pt-4 d-flex font-weight-light" justify="center">
        <div class="mx-4">
          <v-icon>mdi-coin</v-icon>
          {{coin}} price: ${{summary[coin].coinPrice}}
          <span class="red--text">(-1.63%)</span>
        </div>
        <div class="mx-4">
          <v-icon>mdi-treasure-chest</v-icon>
          {{coin}} mining earnings: ${{summary[coin].maxPayOff.toFixed(4)}} /T/Day ({{summary[coin].maxPayOffBtc.toFixed(8)}} BTC)</div>
      </v-row>
      <div class="pa-4">
        <v-row
          justify="space-between"
          align-content="center"
          class="caption d-none d-sm-flex"
          style="margin: 0; margin-top: 24px;"
        >
          <v-col cols="3">Contract Duration</v-col>
          <v-col cols="2">Lowest Unit Cost (/T/Day)</v-col>
          <v-col cols="2">Cost Basis</v-col>
          <v-col cols="3" style="text-align:center;">Expected ROI</v-col>
        </v-row>
        <v-row v-for="(c, idx) in summary[coin].contracts" :key="idx" justify="space-between" align-content="center" class="homeDeal">
          <v-col cols="3">{{c.duration}} Days</v-col>
          <v-col cols="2">{{c.contract_cost.toFixed(4)}}(/{{summary[coin].unit}}/Day)</v-col>
          <v-col cols="2">${{(1 / c.mining_payoff_btc) * c.contract_cost | price}}per {{coin}}</v-col>
          <v-col cols="3" class="dealROI">{{(c.mining_payoff / c.contract_cost) -1 | percent}}</v-col>
        </v-row>
      </div>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SummaryTable",
  computed: {
    ...mapState(["summary"])
  },
  filters: {
    percent(v) { return v && (v * 100).toFixed(0) + '%'; },
    price(v) { return v && v.toFixed(2); }
  },
  data() {
    return {
      coins: ["BTC", "ETH", "BCH"]
    };
  }
}
</script>

<style scoped lang="scss">

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

</style>