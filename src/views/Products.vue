<template>
  <v-container>
    <v-row justify="center">
      <v-col style="width:80px;" >
        <v-card style="background: transparent;" elevation="0">
          <v-card-title>Coin</v-card-title>
          <v-col v-for="coin in filters.coins" :key="coin">
            <v-card>
              <div class="display-1  text-center">{{coin}}</div>
            </v-card>
          </v-col>
          <v-card-title>Duration</v-card-title>
          <v-card-text>
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-col v-for="n in filters.durations" :key="n">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'primary' : ''"
                        class="d-flex align-center"
                        dark
                        @click="() => { toggle(); setDuration(n); }"
                      >
                        <v-scroll-y-transition>
                          <div class="display-1 flex-grow-1 text-center">{{n}}</div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" md="10" lg="10" sm="12">
        <v-card v-for="(item, index) in products" :key="index" style="margin-bottom: 20px;">
          <v-card-text>
            <v-row align="center">
              <v-col cols="6">
                <div class="body-2">BEST DEAL</div>
              </v-col>
              <v-col cols="6" class="text-right">
                <div class="body-2">{{(item.expected_discount * 100).toFixed(0)}}% OFF</div>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="6">
                <h1>{{item.honeyLemon_contract_name}}</h1>
                <p class="body-2 my-2">Pay as You Go | 45 Days to Breakeven</p>
              </v-col>
              <v-col cols="6" class="text-right">
                <h1>${{item.upfront_fee}}/T/D</h1>
                <p class="body-2 my-2">Min Amount {{item.min}}T</p>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col class="flex-grow-1">
                <div class="caption">Total Mining Income</div>
                <div class="subtitle-1">${{item.mining_payoff}}</div>
              </v-col>
              <div class="d-inline-flex">
                <v-col style="flex-basis:auto">
                  <div class="caption">Management Fee</div>
                  <div class="subtitle-1">{{item.management_fee * 100}}%</div>
                </v-col>
                <v-col>
                  <div class="caption">Electricity Fee</div>
                  <div class="subtitle-1">${{item.electricity_fee}}/T/D</div>
                </v-col>
              </div>
            </v-row>
            <v-row>
              <v-col cols="9">
                <div>
                  <v-icon color="red" v-for="n in 4" :key="`${index}_${n}_r`">mdi-star</v-icon>
                  <v-icon v-for="n in 5 - 4" :key="`${index}_${n}`">mdi-star</v-icon>
                  {{item.seller}}
                </div>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn :href="item.buy_url" target="_blank" color="primary">
                  <v-icon>mdi-open-in-new</v-icon>
                  <span class="mr-2">Check it out</span>
                </v-btn>
              </v-col>
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
      this.duration = d;
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
      return this.$store.state.products;
    }
  },
  data() {
    return {
      filter: {
        duration: 30,
        coin: 'BTC'
      }
    };
  }
};
</script>

<style scoped>
.v-item--active {
  color: #222;
  background-color: #ffff00 !important;
}
</style>