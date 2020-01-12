<template>
  <v-card class="mb-3 v-card--hover" hover @click="showDetail = !showDetail" :ripple="false">
    <div class="bestDeal body-2" v-if="item.isBestDeal">BEST DEAL</div>

    <v-row justify="space-between" align-content="center" style="margin: 0">
      <v-col cols="12" class="py-4" xs="12" sm="3" ml="3" lg="3">
        <div class="d-flex flex-column">
          <img style="width: 120px" :src="require(`../assets/platformlogo/${item.issuers}.png`)" />
           <span class="black--text title-2">{{item.honeyLemon_contract_name}}</span>
        </div>
       
      </v-col>

      <v-col cols="3" class="d-flex align-center" xs="3" ml="2" lg="2">
        <span class="black--text title-2">
          ${{item.contract_cost.toFixed(4)}}
          <span
            v-if="item.coin !== 'ETH'"
            class="subtitle-1"
          >/T/Day</span>
          <span v-if="item.coin === 'ETH'" class="subtitle-1">/M/Day</span>
          <v-tooltip right max-width="400px">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="body-1 ml-1">mdi-help-circle-outline</v-icon>
            </template>
            <span>
              Note: sum of upfront fees and present value of expected future cashflow earned over duration of the contract,
              discounted with CeFi/DeFi interest rate (See Messari), divided into unit cost (BTC: $ per Th per Day, or ETH: $ per Mh per Day)
            </span>
          </v-tooltip>
        </span>
      </v-col>

      <v-col cols="3" class="d-flex align-center" xs="3" ml="2" lg="2">
        <div
          style="display: block;"
          class="body-1 font-weight-medium"
          v-if="item.sold_percent >= 99.999"
        >OUT OF STOCK</div>
      </v-col>

      <v-col cols="4" class="d-flex" style="padding-top: 0; padding-bottom: 0;"  xs="4" ml="2" lg="2">
        <div class="d-flex discount align-center">
          <span class="body-2" label small>{{(item.expected_discount * 100).toFixed(0)}}% OFF</span>
        </div>
        <v-tooltip top max-width="400px" class="ml-2">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="body-1 mx-1">mdi-help-circle-outline</v-icon>
          </template>
          Note: Discount calculated as the cost of buying {{item.coin}} compared to {{item.coin}} earned via buying the cloud mining contract.
          The {{item.coin}} earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment
        </v-tooltip>
      </v-col>

      <v-col cols="2" class="d-lg-flex align-center"  xs="2" ml="3" lg="3">
        <v-btn text icon color="black" @click="toggleFavorites(item.id)" class="mr-2">
          <v-icon v-if="favorites.indexOf(item.id) < 0">mdi-heart-outline</v-icon>
          <v-icon v-if="favorites.indexOf(item.id) >= 0" color="red">mdi-heart</v-icon>
        </v-btn>
        <v-btn
          @click="$gtag.event('CheckItOut')"
          :href="item.buy_url"
          target="_blank"
          color="white"
          class="check-btn"
        >
          <v-icon>mdi-open-in-new</v-icon>
          <span class="ml-2">Check it out</span>
        </v-btn>
      </v-col>
    </v-row>
    <product-detail :item="item" :show="showDetail" @hide="showDetail = false" />
    <v-card-text class="py-2 px-8" v-if="false">
      <!-- <v-row align="center" justify="end">

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
      </v-row>-->
      <v-row align="center" justify="space-between" align-content="center">
        <!-- Contract Name -->
        <div class="ma-2 flex-grow-1">
          <div class="flex-grow-1">
            <img style="width: 140px" :src="require(`../assets/platformlogo/${item.issuers}.png`)" />
          </div>
          <span class="black--text title-2">{{item.honeyLemon_contract_name}}</span>

          <!-- <p class="body-2 my-2">Estimated {{item.expected_breakeven_days.toFixed(0)}} Days to Breakeven</p> -->
        </div>
        <!-- Unit Cost -->
        <div class="ma-2 flex-grow-1">
          
          <span class="black--text title-2">
            ${{item.contract_cost.toFixed(4)}}
            <span
              v-if="item.coin !== 'ETH'"
              class="subtitle-1"
            >/T/Day</span>
            <span v-if="item.coin === 'ETH'" class="subtitle-1">/M/Day</span>
            <v-tooltip right max-width="400px">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="body-1 ml-1">mdi-help-circle-outline</v-icon>
              </template>
              <span>
                Note: sum of upfront fees and present value of expected future cashflow earned over duration of the contract,
                discounted with CeFi/DeFi interest rate (See Messari), divided into unit cost (BTC: $ per Th per Day, or ETH: $ per Mh per Day)
              </span>
            </v-tooltip>
          </span>
          <p class="body-2 mb-1 mr-5 red--text min-text">Min Amount {{item.contract_size}}T</p>
        </div>

        <!-- Stock Promotion -->
        <div class="ma-2 flex-shrink-0 flex-grow-0" style="width:240px;">
          <div
            style="display: block;"
            class="body-1 font-weight-medium"
            v-if="item.sold_percent >= 99.999"
          >OUT OF STOCK</div>
        </div>

        <!-- ROI -->
        <div
          class="discount body-2 flex-grow-2"
          label
          small
        >
        {{(item.expected_discount * 100).toFixed(0)}}% OFF</div>
        <v-tooltip top max-width="400px" class="ml-2">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="body-1 mx-1">mdi-help-circle-outline</v-icon>
          </template>
          Note: Discount calculated as the cost of buying {{item.coin}} compared to {{item.coin}} earned via buying the cloud mining contract.
          The {{item.coin}} earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment
        </v-tooltip>
        <!-- <span class="mr-2 caption">vs buying {{item.coin}} </span> -->
        <!-- <p class="body-2 my-2">Estimated {{item.expected_breakeven_days.toFixed(0)}} Days to Breakeven</p> -->
        <!-- Actions -->
        <div class="flex-grow-0">
          <div class="ma-2 d-flex" style="align-items: center;">
            <v-btn text icon color="black" @click="toggleFavorites(item.id)" class="mr-2">
              <v-icon v-if="favorites.indexOf(item.id) < 0">mdi-heart-outline</v-icon>
              <v-icon v-if="favorites.indexOf(item.id) >= 0" color="red">mdi-heart</v-icon>
            </v-btn>
            <v-btn
              @click="$gtag.event('CheckItOut')"
              :href="item.buy_url"
              target="_blank"
              color="primary"
              class="check-btn"
            >
              <v-icon>mdi-open-in-new</v-icon>
              <span class="ml-2">Check it out</span>
            </v-btn>
          </div>
        </div>
      </v-row>
     
      <product-detail :item="item" :show="showDetail" @hide="showDetail = false" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import ProductDetail from "./ProductDetail";

export default {
  name: "Product",
  props: ["item"],
  components: { ProductDetail },
  methods: {
    toggleFavorites(id) {
      this.$gtag.event("ToggleFavorites");
      this.$store.commit("toggleFavorites", id);
    }
  },
  computed: {
    ...mapState(["favorites"])
  },
  data() {
    return {
      showDetail: false
    };
  }
};
</script>

<style scoped lang="scss">
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
  background: #FFFACC;
  @media (max-width: 800px) {
       background: transparent;
    }
  color: black;
  padding: 3px 10px 0;
  // border-radius: 3px !important;
  font-weight: 500;
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
    min-width: 40px !important;
    width: 40px !important;
    height: 40px !important;
  }
}

.dealData {
  //headline font-weight-medium black--text
  font-weight: 500;
  font-size: 18px;
  color: #333;
}

@media only screen and (max-width: 500px) {
  .caption,
  .min-text {
    text-align: left;
  }

  .dealData {
    margin-right: 0 !important;
    text-align: left;
  }
}

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

.v-card--link:before {
  background-color: #fff;
}

</style>