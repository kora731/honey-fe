<template>
  <v-container style="max-width:1280px;">
    <v-row justify="end" align="center">
      <v-col cols="12" md="4">
        <v-select label="Sort by" :items="filters.sort" v-model="filter.sort" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="filterPanel">
        <v-card class="filterPanel-coin" elevation="0">
          <v-card-title class="py-0 body-2">Coin</v-card-title>
          <v-card-text class="py-0">
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-checkbox
                    color="primary"
                    style="margin: 0; padding: 0"
                    v-for="coin in filters.coins"
                    :key="coin"
                    v-model="filter.coin"
                    :value="coin"
                    :label="coin"
                  />
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
        <v-card class="filterPanel-duration" elevation="0">
          <v-card-title class="py-0 body-2">Duration</v-card-title>
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
          <v-card-title class="py-0 body-2">Filters</v-card-title>
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
          <div class="bestDeal body-2" v-if="index === 0">BEST DEAL</div>
          <v-card-text class="py-2 px-8">
            <v-row align="center" justify="end">
              <div
                class="discount body-2"
                label
                small
              >{{(item.expected_discount * 100).toFixed(0)}}% OFF</div>
            </v-row>
            <v-row align="center" justify="space-between">
              <div class="ma-2">
                <h1 class="black--text">{{item.honeyLemon_contract_name}}</h1>
                <p class="body-2 my-2">Pay as You Go | 45 Days to Breakeven</p>
              </div>
              <div class="ma-2 text-right">
                <h1 class="black--text">${{item.contract_cost.toFixed(5)}}<span class="subtitle-1"> /T/D</span></h1> 
                <p class="body-2 mb-1 red--text">Min Amount {{item.contract_size}}T</p>
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
                <div class="dealData">${{item.mining_payoff.toFixed(5)}}</div>
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
                  <div class="dealData">${{item.upfront_fee.toFixed(5)}} /100T</div>
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
                  <div class="dealData">${{item.electricity_fee}} /T/D</div>
                </div>
              </div>
            </v-row>
            <v-row>
              <div class="ma-2 flex-grow-1">
                <span class="body-1">{{item.issuers}}</span>
              </div>
              <div class="ma-2 d-flex">
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
            },
            {
              text: "↓ Today's income",
              value: { field: "mining_payoff", order: "asc" }
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
          (this.filter.coin.length === 0 ||
            this.filter.coin.indexOf(v.coin) >= 0) &&
          (this.filter.duration.length === 0 ||
            this.filter.duration.indexOf(v.duration) >= 0)
      );

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
        duration: [60],
        coin: ["BTC"],
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
  background-color: #ffff00 !important;
}

.v-card--hover:hover {
  -webkit-box-shadow: 0px 0px 0px 2px rgba(251, 255, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
  box-shadow: 0px 0px 0px 2px rgba(251, 255, 0, 0.8),
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
}

.discount {
  background: #ffff00;
  padding: 3px 10px 0;
  border-radius: 0 !important;
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

    &-duration {
      
    }
  }
}

.dealData{
  //headline font-weight-medium black--text
  font-weight: 500;
  font-size: 18px;
  color: #333;
}

</style>