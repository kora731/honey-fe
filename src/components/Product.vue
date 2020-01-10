<template>
  <v-card class="mb-5 pb-1" hover>
    <div class="bestDeal body-2" v-if="item.isBestDeal">BEST DEAL</div>
    <v-card-text class="py-2 px-8">
      <v-row align="center" justify="end">

        <div
                class="discount body-2"
                label
                small
        >{{(item.expected_discount * 100).toFixed(0)}}% OFF</div>
        <v-tooltip top max-width="400px" class="ml-2">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="body-1 mx-1">mdi-help-circle-outline</v-icon>
          </template>
          Note: Discount calculated as the cost of buying {{item.coin}} compared to {{item.coin}} earned via buying the cloud mining contract.
          The {{item.coin}} earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment
        </v-tooltip>
        <span class="mr-2 caption">vs buying {{item.coin}} </span>
      </v-row>
      <v-row align="center" justify="space-between">
        <div class="ma-2">
          <h1 class="black--text">{{item.honeyLemon_contract_name}}</h1>
          <p class="body-2 my-2">Estimated {{item.expected_breakeven_days.toFixed(0)}} Days to Breakeven</p>
        </div>
        <div class="ma-2 text-right">
          <h1 class="black--text">
            ${{item.contract_cost.toFixed(4)}}
            <span v-if="item.coin !== 'ETH'" class="subtitle-1"> /T/Day</span>
            <span v-if="item.coin === 'ETH'" class="subtitle-1"> /M/Day</span>
            <v-tooltip right max-width="400px">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="body-1 ml-1">mdi-help-circle-outline</v-icon>
              </template>
              <span>Note: sum of upfront fees and present value of expected future cashflow earned over duration of the contract,
                    discounted with CeFi/DeFi interest rate (See Messari), divided into unit cost (BTC: $ per Th per Day, or ETH: $ per Mh per Day) </span>
            </v-tooltip>
          </h1>
          <p class="body-2 mb-1 mr-5 red--text min-text">Min Amount {{item.contract_size}}T</p>
        </div>
      </v-row>
      <v-row align="center">
        <div class="flex-grow-1 ma-2">
          <div class="caption">
            Today's Mining Income
            <v-tooltip top max-width="400px">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
              </template>
              Note: Sometimes called theoretical mining yield, is the actual mining income in
              the past 24 hours ({{item.coin  === 'BTC' ? 'BTC: $ per Th per Day' : 'ETH: $ per Mh per Day'}}). This estimate of mining income assumes current difficulty and price
              (Source: {{item.coin  === 'BTC' ? 'BTC.com' : 'sparkpool.com'}}).

            </v-tooltip>
          </div>
          <div class="dealData">${{item.mining_payoff.toFixed(4)}} /TH/Day</div>
        </div>
        <div class="d-inline-flex ma-2 text-right">
          <div style="flex-basis:auto;" class="mr-4">
            <div class="caption">
              Min Upfront Fee
              <v-tooltip top max-width="400px">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
                </template>
                Note: Sometimes called hashrate fee or contract fee, is the fee an investor needs to pay upfront in order to receive mining payoffs.
              </v-tooltip>
            </div>
            <div class="dealData mr-5">${{item.upfront_fee.toFixed(2)}}</div>
          </div>
          <div>
            <div class="caption">
              Additional Daily Fee
              <v-tooltip top max-width="400px">
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
                </template>
                Note: Sometimes called maintenance fee, is the additional daily fee consists of several costs including but not limited to mining's electricity fee, mining farm maintenance, heat dissipation, operation and maintenance for miners etc.

              </v-tooltip>
            </div>
            <div class="dealData mr-5">${{item.electricity_fee}} /T/Day</div>
          </div>
        </div>
      </v-row>
      <v-row>
        <div class="ma-2 flex-grow-1">
          <img style="width: 140px" :src="require(`../assets/platformlogo/${item.issuers}.png`)" />
        </div>
        <div class="ma-2 d-flex" style="align-items: center;">
          <div style="display: block;" class="body-1 font-weight-medium" v-if="item.sold_percent >= 99.999">OUT OF STOCK</div>
          <v-btn text icon color="black" @click="toggleFavorites(item.id)" class="mr-2">
            <v-icon v-if="favorites.indexOf(item.id) < 0">mdi-heart-outline</v-icon>
            <v-icon v-if="favorites.indexOf(item.id) >= 0" color="red">mdi-heart</v-icon>
          </v-btn>
          <v-btn @click="$gtag.event('CheckItOut')" :href="item.buy_url" target="_blank" color="primary" class="check-btn">
            <v-icon>mdi-open-in-new</v-icon>
            <span class="ml-2">Check it out</span>
          </v-btn>
        </div>
      </v-row>
    </v-card-text>
  </v-card>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductDetail",
  props: ["item"],
  methods: {
    toggleFavorites(id) {
      this.$gtag.event("ToggleFavorites");
      this.$store.commit("toggleFavorites", id);
    }
  },
  computed: {
    ...mapState(["favorites"])
  }
}
</script>

<style scoped>

</style>