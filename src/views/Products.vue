<template>
  <v-container style="max-width:1280px;">
      <v-row justify="end">
         <v-col md="12" lg="12" sm="12" cols="12">
            <v-row>
              <v-col cols="2" class="px-4" style="text-align: center;padding-top: 40px;"><h2>Sweet Deals</h2></v-col>
              <v-col cols="10">
                <v-tabs class="mx-4 mt-4" color="primary">
                  <v-tab @click="$store.state.selectedCoins = ['BTC']">BTC</v-tab>
                  <v-tab @click="$store.state.selectedCoins = ['ETH']">ETH</v-tab>
                  <v-tab @click="$store.state.selectedCoins = ['BCH']">BCH</v-tab>

                  <v-tab-item>
                    <v-row class="d-flex" justify="space-between">
                      <div class="mx-4 mt-4">
                        <div class="mx-4">BTC price: </div>
                        <div class="mx-4">BTC mining earnings: </div>
                    </div>
                    <v-btn-toggle v-model="toggle_exclusive" mandatory class="mr-4">
                      <v-btn>
                        USD
                      </v-btn>
                      <v-btn>
                        BTC
                      </v-btn>
                      </v-btn-toggle>
                    </v-row>
                  </v-tab-item>
                         <v-tab-item>
                    <v-row class="d-flex" justify="space-between">
                      <div class="ma-4">
                        <div class="">ETH price: </div>
                        <div class="">ETH mining earnings: </div>
                    </div>
                    <v-btn-toggle v-model="toggle_exclusive" mandatory class="mr-4">
                      <v-btn>
                        USD
                      </v-btn>
                      <v-btn>
                        ETH
                      </v-btn>
                      </v-btn-toggle>
                    </v-row>
                  </v-tab-item>
                         <v-tab-item>
                    <v-row class="d-flex" justify="space-between">
                      <div class="ma-4">
                        <div class="">BCH price: </div>
                        <div class="">BCH mining earnings: </div>
                    </div>
                    <v-btn-toggle v-model="toggle_exclusive" mandatory class="mr-4">
                      <v-btn>
                        USD
                      </v-btn>
                      <v-btn>
                        BCH
                      </v-btn>
                      </v-btn-toggle>
                    </v-row>
                  </v-tab-item>
               </v-tabs>
                
              </v-col>
              </v-row>   
        </v-col>
      </v-row>
    <v-row justify="center">
      <v-col class="filterPanel">
            

              <div class="mx-3">
                  <v-select label="Sort by" :items="filters.sort" v-model="filter.sort" />
              </div>

         <filter-panel v-model="filter.duration" title="Duration" :items="filters.durations" format="$$ days" ga="FilterDuration" />	        
         <filter-panel v-model="filter.showFavOnly" title="Filters" :items="['Favorites']" />
      </v-col>
      <v-col md="10" lg="10" sm="12" cols="12">
        <v-row justify="space-between" align-content="center" class="caption" style="margin: 0">
          <v-col cols="3">Contract Name</v-col>
          <v-col cols="2">Unit Cost (/T/Day)</v-col>
          <v-col cols="2">Stock and Promotion</v-col>
          <v-col cols="2">ROI</v-col>
          <v-col cols="3"></v-col>
        </v-row>
        <product v-for="(item, index) in products" :key="index" :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import Product from "../components/Product";
import FilterPanel from "../components/FilterPanel";

export default {
  name: "Products",
  components: { Product, FilterPanel },
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

.v-card{
  box-shadow: 
      0px 0px 5px 1px rgba(0, 0, 0, 0.2), 
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
      0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.v-card--hover:hover {
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 229, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
  box-shadow: 0px 0px 0px 2px rgba(255, 229, 0, 0.8),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
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

@media only screen and (max-width: 500px) {
  .filterPanel {
    padding: 0 12px;
  }

  .filterPanel .v-card__text {
    padding:0;
  }

  .mdi-help-circle-outline {
    display: none;
  }
}

body{
  background: #F5F5F5;
}
.v-btn--active::before{
   opacity:0 !important;
}

</style>