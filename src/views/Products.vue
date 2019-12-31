<template>
  <v-container class="d-flex" style="max-width:1280px;">
    <v-row justify="center">
      <v-col style="width:60px;">
        <v-card style="background: transparent;" elevation="0">
          <v-card-title class="py-0 body-2">Coin</v-card-title>
          <v-card-text class="py-0">
            <v-item-group mandatory>
              <v-container >
                <v-row class="flex-column">
                  <v-checkbox
                    color="primary"
                    style="margin: 0; padding: 0"
                    v-for="coin in filters.coins" :key="coin"
                    v-model="filter.coin"
                    :value="coin"
                    :label="coin"
                  />
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
          <v-card-title class="py-0 body-2">Duration</v-card-title>
          <v-card-text class="py-0">
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-checkbox
                    color="primary"
                    style="margin: 0; padding: 0"
                    v-for="n in filters.durations" :key="n"
                    v-model="filter.duration"
                    :value="n"
                    :label="`${n}Days`"
                  />
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="10" lg="10" sm="12" cols="12">
        <v-card v-for="(item, index) in products" :key="index" class="mb-5 pb-1" hover>
          <div class="bestDeal body-2">BEST DEAL</div>
          <v-card-text class="py-2 px-8">
            <v-row align="center" justify="end">

              <div class="discount body-2" label small>{{(item.expected_discount * 100).toFixed(0)}}% OFF</div>
            </v-row>
            <v-row align="center" justify="space-between">
              <div class="ma-2">
                <h1>{{item.honeyLemon_contract_name}}</h1>
                <p class="body-2 my-2">Pay as You Go | 45 Days to Breakeven</p>
              </div>
              <div class="ma-2 text-right">
                <h1>${{item.contract_cost.toFixed(5)}}/T/D</h1>
                <p class="body-2 my-2" style="color: red">Min Amount {{item.contract_size}}T</p>
              </div>
            </v-row>
            <v-row align="center">
              <div class="flex-grow-1 ma-2">
                <div class="caption">
                  Today's Mining Income
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </div>
                <div class="subtitle-1">${{item.mining_payoff.toFixed(5)}}</div>
              </div>
              <div class="d-inline-flex ma-2 text-right">
                <div style="flex-basis:auto;" class="mr-4">
                  <div class="caption">
                    Upfront Fee
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
                      </template>
                      I'm a tooltip
                    </v-tooltip>
                  </div>
                  <div class="subtitle-1">${{item.upfront_fee.toFixed(5)}} / 100T</div>
                </div>
                <div>
                  <div class="caption">
                    Electricity Fee
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
                      </template>
                      I'm a tooltip
                    </v-tooltip>
                  </div>
                  <div class="subtitle-1">${{item.electricity_fee}}/T/D</div>
                </div>
              </div>
            </v-row>
            <v-row>
              <div class="ma-2 flex-grow-1">
                <div>{{item.issuers}}</div>
              </div>
              <div class="ma-2 d-flex">
                <v-btn text icon color="black">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn :href="item.buy_url" target="_blank" color="primary" class="check-btn">
                  <v-icon>mdi-open-in-new</v-icon>
                  <span class="ml-2">Check it out</span>
                </v-btn>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Products',
  methods: {
    setDuration(d) {
      this.filter.duration = d;
    },
    setCoin(c) {
      this.filter.coin = c;
    }
  },
  computed: {
    filters() {
      const products = this.$store.state.products;
      const filters = products.reduce((m, v) => {
        if (m.durations.indexOf(v.duration) < 0) m.durations.push(v.duration);
        if (m.coins.indexOf(v.coin) < 0) m.coins.push(v.coin);

        return m;
      }, { durations: [], coins: [] });

      filters.durations.sort((a, b) => a - b);
      return filters;
    },
    products() {
      return this.$store.state.products.filter(v =>
        (this.filter.coin.length === 0 || this.filter.coin.indexOf(v.coin) >= 0) &&
        (this.filter.duration.length === 0 || this.filter.duration.indexOf(v.duration) >= 0)
      );
    }
  },
  data() {
    return {
      filter: {
        duration: [60],
        coin: ['BTC']
      }
    };
  }
};
</script>

<style scoped lang="scss">
.v-item--active {
  color: #222;
  background-color: #ffff00 !important;
}

.v-card--hover:hover {
  -webkit-box-shadow: 0px 0px 0px 2px rgba(251, 255, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
  box-shadow: 0px 0px 0px 2px rgba(251, 255, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
}

.check-btn{
  span{
    @media (max-width: 800px) {
      display: none;
    }
  }
  @media (max-width: 800px) {
      background: white !important;
      color: black !important;
      }
}

.bestDeal {
  position: absolute; 
  top: 0; 
  left: 0; 
  background: #13B7BD; 
  padding: 2px 10px;
  color: white;
  border-radius: 0 !important;
}

.discount {
  background: #ffff00; 
  padding: 3px 10px 0;
  border-radius: 0 !important;
}
</style>