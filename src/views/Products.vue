<template>
  <v-container style="max-width:1280px;">
      <v-row justify="end">
         <v-col md="12" lg="12" sm="12" cols="12" >
            <v-row>
              <v-col cols="12" lg="2" sm="12" class="px-4 dealHeader" ><h2>Sweet Deals</h2></v-col>
              <v-col cols="12" lg="10" sm="12" class="pa-4" style="background: white;">
                <v-tabs class="mx-4 mt-4" color="primary">
                  <v-tab v-for="coin of filters.coins" :key="'tab-' + coin" @click="$store.state.selectedCoins = [coin]">{{coin}}</v-tab>

                  <v-tab-item v-for="coin of filters.coins" :key="'tab-item-' + coin">
                    <v-row class="d-flex flex-nowrap" justify="space-between" align="center">
                      <div class="mx-4 mt-4 flex-grow-1 d-flex flex-wrap">
                        <div class="mx-4">{{coin}} price: ${{summary[coin].coinPrice.toFixed(2)}}</div>
                        <div class="mx-4">{{coin}} mining earnings: ${{summary[coin].maxPayOff.toFixed(4)}}</div>
                      </div>
                      <v-btn-toggle mandatory class="mr-4 pr-4">
                        <v-btn small>USD</v-btn>
                        <v-btn small>{{coin}}</v-btn>
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
        <filter-panel ga="FilterSeller" title="Filters" :value="filter" :items="[['In Stock', 'showInStockOnly'], ['Favorites', 'showFavOnly']]" />
      </v-col>

      <product-dialog />
      <v-col md="10" lg="10" sm="12" cols="12">
         <v-row justify="space-between" align-content="center" class="caption d-none d-sm-flex" style="margin: 0">
                  <v-col cols="3">Contract Name</v-col>
                  <v-col cols="2">Unit Cost (/T/Day)
                    <v-icon class="body-1 mx-1">mdi-arrow-down-drop-circle-outline</v-icon>
                  </v-col>
                  <v-col cols="2">ROI
                    <v-icon class="body-1 mx-1">mdi-arrow-down-drop-circle-outline</v-icon>
                  </v-col>
                  <v-col cols="2"></v-col>
                  <v-col cols="3" />
        </v-row>
        <div class="productContainer">
          <product v-for="(item, index) in products.slice(0, 10)" :key="index" :item="item" />
          <v-lazy v-for="(item, index) in products.slice(10)" :key="index + 10">
            <product :item="item" />
          </v-lazy>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import Product from "../components/Product";
import ProductDialog from "../components/ProductDialog";
import FilterPanel from "../components/FilterPanel";

export default {
  name: "Products",
  components: { Product, ProductDialog, FilterPanel },
  computed: {
    ...mapState(["favorites", "summary"]),
    filters() {
      const products = this.$store.state.products;
      const filters = products.filter(v => this.$store.state.selectedCoins.indexOf(v.coin) >= 0).reduce(
        (m, v) => {
          if (m.durations.indexOf(v.duration) < 0) m.durations.push(v.duration);
          if (m.coins.indexOf(v.coin) < 0) m.coins.push(v.coin);

          return m;
        },
        {
          durations: [],
          coins: ["BTC", "ETH", "BCH"],
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
          (!this.filter.showInStockOnly || v.sold_percent < 100) &&
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
        showFavOnly: false,
        showInStockOnly: false
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

.dealHeader{
   text-align: center;
   padding-top: 40px;
   @media (max-width: 1200px) {
     padding-top:0;
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

.productContainer {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 8px;
}

</style>