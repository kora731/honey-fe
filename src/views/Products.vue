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
                    @change="$gtag.event('FilterCoin:' + coin)"
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
                    @change="$gtag.event('FilterDuration:' + n)"
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
                    @change="$gtag.event('FilterFavorites')"
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
        <product v-for="(item, index) in products" :key="index" :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Product from "../components/Product";

export default {
  name: "Products",
  components: { Product },
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
   .mdi-help-circle-outline{
    display: none;
  }
  
}

</style>