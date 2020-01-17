<template>
  <v-container style="max-width:1280px;">
      <v-row justify="end">
         <v-col md="12" lg="12" sm="12" cols="12" >
            <v-row>
              <v-col cols="12" lg="2" sm="12" class="px-4 dealHeader" ><h2>Sweet Deals</h2></v-col>
              <v-col cols="12" lg="10" sm="12" class="pa-4" style="background: white;">
                <v-tabs center-active color="primary" v-model="activeCoinTab">
                  <v-tab v-for="coin of filters.coins" :key="'tab-' + coin" @click="$store.state.selectedCoins = [coin]">{{coin}}</v-tab>

                  <v-tab-item v-for="coin of filters.coins" :key="'tab-item-' + coin">
                    <v-row class="d-flex flex-nowrap" justify="space-between" align="center">
                      <div class="mx-4 mt-4 flex-grow-1 d-flex flex-wrap">
                        <div class="mx-4">{{coin}} price: ${{summary[coin].coinPrice.toFixed(2)}}</div>
                        <div class="mx-4">{{coin}} mining earnings: ${{summary[coin].maxPayOff.toFixed(4)}}</div>
                      </div>
                      <v-btn-toggle mandatory class="mr-4 pr-4" v-model="csel">
                        <v-btn small @click="currency='USD'">USD</v-btn>
                        <v-btn small @click="currency='COIN'">{{coin}}</v-btn>
                      </v-btn-toggle>
                    </v-row>
                  </v-tab-item>
               </v-tabs>
              </v-col>
              </v-row>
        </v-col>
      </v-row>
    <v-row justify="center">
      <v-col class="filterPanel" v-if="!$vuetify.breakpoint.xsOnly">
        <div class="mx-3">
          <v-select label="Sort by" :items="filters.sort" v-model="filter.sort" />
        </div>

        <filter-panel v-model="filter.duration" title="Duration" :items="filters.durations" format="$$" ga="duration" />
        <filter-panel v-model="filter.issuers" title="Seller" :items="filters.issuers" format="$$" ga="seller" />
        <filter-panel ga="misc" title="Filters" :value="filter" :items="[['Favorites', 'showFavOnly']]" />
      </v-col>
      <v-navigation-drawer v-model="drawer" absolute temporary v-if="$vuetify.breakpoint.xsOnly">
        <filter-panel v-model="filter.duration" title="Duration" :items="filters.durations" format="$$ days" ga="duration" />
        <filter-panel v-model="filter.issuers" title="Seller" :items="filters.issuers" format="$$" ga="seller" />
        <filter-panel ga="misc" title="Filters" :value="filter" :items="[['Favorites', 'showFavOnly']]" />
      </v-navigation-drawer>
      <v-col class="filterPanel d-flex align-center" v-if="$vuetify.breakpoint.xsOnly">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <div class="mx-3 flex-grow-1">
          <v-select label="Sort by" :items="filters.sort" v-model="filter.sort" />
        </div>
      </v-col>

      <product-dialog />
      <v-col md="10" lg="10" sm="12" cols="12">
         <v-row justify="space-between" align-content="center" class="caption d-none d-sm-flex" style="margin: 0">
           <v-col cols="3">Contract Name</v-col>
           <v-col cols="2">
             <v-menu offset-y>
               <template v-slot:activator="{ on }">
                   {{slot1[0]}}{{slot1[1]}}
                   <v-icon v-on="on" class="body-1 mx-1">mdi-arrow-down-drop-circle-outline</v-icon>
               </template>
               <v-list>
                 <v-list-item v-for="[title, suffix, field] of slot1Menu"
                              :key="title"
                              @click="slot1 = [title, suffix, field]"
                 >
                   <v-list-item-title>{{title}}</v-list-item-title>
                 </v-list-item>
               </v-list>
             </v-menu>
           </v-col>
           <v-col cols="2" v-if="$vuetify.breakpoint.lg" />
           <v-menu offset-y>
             <template v-slot:activator="{ on }">
               <v-col cols="2">
                 <span style="margin-left: 10px;">{{slot2[0]}}</span>
                 <v-icon v-on="on" class="body-1 mx-1">mdi-arrow-down-drop-circle-outline</v-icon>
               </v-col>
             </template>
             <v-list>
               <v-list-item v-for="[title, field] of slot2Menu"
                            :key="title"
                            @click="slot2 = [title, field]"
               >
                 <v-list-item-title>{{title}}</v-list-item-title>
               </v-list-item>
             </v-list>
           </v-menu>
           <v-col cols="2" v-if="!$vuetify.breakpoint.lg" />
           <v-col cols="3" />
        </v-row>
<!--        <div class="productContainer">-->
          <product v-for="(item, index) in products.slice(0, 10)" :s1="slot1" :s2="slot2" :currency="currency" :key="index" :item="item" />
          <v-lazy v-for="(item, index) in products.slice(10)" :key="index + 10">
            <product :item="item" :s1="slot1" :s2="slot2" :currency="currency"/>
          </v-lazy>
<!--        </div>-->
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
  watch: {
    '$store.state.selectedCoins'() {
      this.filter.duration.splice(0);
      this.filter.issuers.splice(0);
    }
  },
  computed: {
    ...mapState(["favorites", "summary", "coins"]),
    filters() {
      const products = this.$store.state.products;
      const durationSet = new Set();
      const filters = products.filter(v => this.$store.state.selectedCoins.indexOf(v.coin) >= 0).reduce(
        (m, v) => {
          if (!durationSet.has(v.durationAlias)) {
            durationSet.add(v.durationAlias);
            m.durations.push([v.duration, v.durationAlias]);
          }

          if (m.coins.indexOf(v.coin) < 0) m.coins.push(v.coin);
          if (m.issuers.indexOf(v.issuers) < 0) m.issuers.push(v.issuers);

          return m;
        },
        {
          durations: [],
          issuers: [],
          coins: this.coins,
          sort: [
            {
              text: "↑ Unit price",
              value: { field: "contract_cost", order: "asc" }
            },
            {
              text: "↑ Upfront fees",
              value: { field: "upfront_fee", order: "asc" }
            },
            {
              text: "↓ ROI",
              value: { field: item => item.mining_payoff / item.contract_cost - 1, order: "desc" }
            }
          ]
        }
      );

      filters.durations = filters.durations.sort((a, b) => a[0] - b[0]).map(v => v[1]);
      return filters;
    },
    products() {
      const res = this.$store.state.products.filter(
        v =>
          (!this.filter.showFavOnly || this.favorites.indexOf(v.id) >= 0) &&
          (!this.filter.showInStockOnly || v.sold_percent < 100) &&
          (this.filter.issuers.length === 0 ||
            this.filter.issuers.indexOf(v.issuers) >= 0) &&
          (this.$store.state.selectedCoins.length === 0 ||
            this.$store.state.selectedCoins.indexOf(v.coin) >= 0) &&
          (this.filter.duration.length === 0 ||
            this.filter.duration.indexOf(v.durationAlias) >= 0)
      );

      const minCost = Math.min(...res.map(v => v.contract_cost * 1));
      res.forEach(v => v.isBestDeal = v.contract_cost * 1 === minCost);

      if (this.filter.sort) {
        const { field, order } = this.filter.sort;
        res.sort((a, b) => {
          const fa = a[field] || field(a);
          const fb = b[field] || field(b);
          return order === "asc" ? fa - fb : fb - fa;
        });
      }

      return res;
    }
  },
  data() {
    const { coin, duration } = this.$route.query;
    if (coin) this.$store.state.selectedCoins = [coin];

    return {
      csel: 0,
      currency: "USD",
      slot1Menu: [
        ["Unit Price", " ", "contract_cost"],
        ["Total Cost", "", item => item.contract_cost * item.contract_size * item.duration],
        ["Daily Income", "", "mining_payoff"],
        ["Total Income", "", item => item.mining_payoff * item.contract_size * item.duration]
      ],
      slot1: ["Unit Price", " ", "contract_cost"],
      slot2Menu: [
        ["ROI", item => item.mining_payoff / item.contract_cost - 1],
        ["Breakeven Days", "expected_breakeven_days"],
        ["%OFF vs buying", item => (item.btc_price - item.contract_cost / item.mining_payoff_btc) / item.btc_price]
      ],
      slot2: ["ROI", item => item.mining_payoff / item.contract_cost - 1],
      drawer: false,
      activeCoinTab: this.$store.state.coins.indexOf(coin || this.$store.state.selectedCoins[0]),
      filter: {
        duration: duration ? [duration * 1] : [],
        issuers: [],
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