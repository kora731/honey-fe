<template>
  <v-container style="max-width:1280px;">
      <v-row justify="end">
         <v-col md="10" lg="10" sm="12" cols="12">
            <v-row justify="space-between" align="center">
              <div class="display-2 ml-3">Mining Contracts</div>
              <div class="mx-3">
                  <v-select label="Sort by" :items="filters.sort" v-model="filter.sort" />
                </div>
          </v-row>
        </v-col>
      </v-row>
    <v-row justify="center">
      <v-col class="filterPanel">
        <v-card class="filterPanel-coin" elevation="0">
          <v-card-title class="pa-0 body-2">Coin</v-card-title>
          <v-card-text class="py-0">
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-checkbox
                    color="primary"
                    style="margin: 0; padding: 0"
                    v-for="coin in filters.coins"
                    :key="coin"
                    v-model="$store.state.selectedCoins"
                    :value="coin"
                    :label="coin"
                  />
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
        <v-card class="filterPanel-duration" elevation="0">
          <v-card-title class="pa-0 body-2">Duration</v-card-title>
          <v-card-text class="py-0">
            <v-item-group mandatory>
              <v-container>
                <v-row>
                  <v-checkbox
                    color="primary"
                    style="margin: 0 8px 0 0; padding: 0"
                    v-for="n in filters.durations"
                    :key="n"
                    v-model="filter.duration"
                    :value="n"
                    :label="`${n} Days`"
                  />
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
        <v-card class="filterPanel-favorite" elevation="0">
          <v-card-title class="pa-0 body-2">Filters</v-card-title>
          <v-card-text class="py-0">
            <v-item-group mandatory>
              <v-container>
                <v-row>
                  <v-checkbox
                    color="primary"
                    style="margin: 0; padding: 0"
                    v-model="filter.showFavOnly"
                    label="Favorites"
                  />
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="10" lg="10" sm="12" cols="12">
        <v-card v-for="(item, index) in products" :key="index" class="mb-5 pb-1" hover>
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
                <div class="dealData">${{item.mining_payoff.toFixed(4)}}</div>
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
import { mapState } from "vuex";

export default {
  name: "Products",
  methods: {
    setDuration(d) {
      this.filter.duration = d;
    },
    setCoin(c) {
      this.filter.coin = c;
    },
    toggleFavorites(id) {
      this.$store.commit("toggleFavorites", id);
    }
  },
  computed: {
    ...mapState(["favorites"]),
    filters() {
      const products = this.$store.state.products;
      const filters = products.reduce(
        (m, v) => {
          if (m.durations.indexOf(v.duration) < 0) m.durations.push(v.duration);
          if (m.coins.indexOf(v.coin) < 0) m.coins.push(v.coin);

          return m;
        },
        {
          durations: [],
          coins: [],
          sort: [
            {
              text: "↑ Contract cost",
              value: { field: "contract_cost", order: "asc" }
            },
            {
              text: "↑ Upfront fees",
              value: { field: "upfront_fee", order: "asc" }
            }
          ]
        }
      );

      filters.durations.sort((a, b) => a - b);
      return filters;
    },
    products() {
      const res = this.$store.state.products.filter(
        v =>
          (!this.filter.showFavOnly || this.favorites.indexOf(v.id) >= 0) &&
          (this.$store.state.selectedCoins.length === 0 ||
            this.$store.state.selectedCoins.indexOf(v.coin) >= 0) &&
          (this.filter.duration.length === 0 ||
            this.filter.duration.indexOf(v.duration) >= 0)
      );

      const minCost = Math.min(...res.map(v => v.contract_cost));
      res.forEach(v => { if (v.contract_cost === minCost) v.isBestDeal = true; });

      if (this.filter.sort) {
        const { field, order } = this.filter.sort;
        res.sort((a, b) =>
          order === "asc" ? a[field] - b[field] : b[field] - a[field]
        );
      }

      return res;
    }
  },
  data() {
    return {
      filter: {
        duration: [],
        sort: { field: "contract_cost", order: "asc" },
        showFavOnly: false
      }
    };
  }
};
</script>

<style scoped lang="scss">
.v-item--active {
  color: #222;
  background-color: #ffe500 !important;
}

.v-card--hover:hover {
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 229, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
  box-shadow: 0px 0px 0px 2px rgba(255, 229, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
}

.check-btn {
  span {
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
  background: #13b7bd;
  padding: 2px 10px;
  color: white;
  border-radius: 0 !important;
  font-weight: 500;
}

.discount {
  background: #ffe500;
  color: black;
  padding: 3px 10px 0;
  border-radius: 3px !important;
  font-weight: 500;
}

.filterPanel {
  width: 80px;
  .v-card {
    background: transparent;
  }
  @media (max-width: 960px) {

    &-coin {
      display: none;
    }


  }
}

.dealData{
  //headline font-weight-medium black--text
  font-weight: 500;
  font-size: 18px;
  color: #333;
}

@media only screen and (max-width: 500px) {
  .caption, .min-text
  {text-align: left;}

  .dealData
  {
    margin-right: 0 !important;
    text-align: left;
  }
  .filterPanel{
    padding: 0 12px;
  }

  .filterPanel .v-card__text
  {
    padding:0;
  
  }
  
}

</style>