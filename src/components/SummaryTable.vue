<template>
  <v-tabs :centered="true">
    <v-tab v-for="coin of coins" :key="'tab-' + coin">{{coin}}</v-tab>
    <v-tab-item  v-for="coin of coins" :key="'tab-item-' + coin">
      <v-row class="mx-4 pt-4 d-flex" justify="center">
        <div class="mx-4">
          <v-icon>mdi-coin</v-icon>
          {{coin}} price: ${{summary[coin].coinPrice}}
          <span class="red--text">(-1.63%)</span>
        </div>
        <div class="mx-4">
          <v-icon>mdi-treasure-chest</v-icon>
          {{coin}} mining earnings: ${{summary[coin].maxPayOff.toFixed(4)}} /T/Day ({{summary[coin].maxPayOffBtc.toFixed(8)}} BTC)</div>
      </v-row>
      <div>
        <v-row
          justify="space-between"
          align-content="center"
          class="caption d-none d-sm-flex"
          style="margin: 0"
        >
          <v-col cols="3">Contract Duration</v-col>
          <v-col cols="2">
            Lowest Unit Cost (/T/Day)
          </v-col>
          <v-col cols="2">Stock and Promotion</v-col>
          <v-col cols="2">
            Cost Basis
          </v-col>
          <v-col cols="3">
            Expected ROI
          </v-col>
        </v-row>
        <v-row v-for="(c, idx) in summary[coin].contracts" :key="idx">
          <v-col cols="3">{{c.duration}} Days</v-col>
          <v-col cols="2">{{c.contract_cost.toFixed(4)}}(/{{summary[coin].unit}}/Day)</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2"></v-col>
          <v-col cols="3">{{(c.mining_payoff / c.contract_cost) -1 | percent}}</v-col>
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
    percent(v) { return v && (v * 100).toFixed(0) + '%'; }
  },
  data() {
    return {
      coins: ["BTC", "ETH", "BCH"]
    };
  }
}
</script>

<style scoped lang="scss">

</style>