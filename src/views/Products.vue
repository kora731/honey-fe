<template>
  <v-container class="d-flex" style="max-width:1280px;">
    <v-row justify="center">
      <v-col style="width:60px;">
        <v-card style="background: transparent;" elevation="0">
          <v-card-title class="pb-0 body-2">Coin</v-card-title>
          <v-card-text>
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-col v-for="n in coinTypes" :key="n">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card :color="active ? 'primary' : ''" class="d-flex align-center" dark>
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
          <v-card-title class="pb-0 body-2">Duration</v-card-title>
          <v-card-text>
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-col v-for="n in Object.keys(items)" :key="n">
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
      <v-col md="10" lg="10" sm="12" cols="12">
        <v-card v-for="(item, index) in items[duration]" :key="index" class="mb-5" hover="true">
          <v-card-text class="py-1">
            <v-row align="center" justify="space-between">
              <v-chip class="ma-1" color="accent" text-color="black" label small>BEST DEAL</v-chip>

              <v-chip class="ma-1" color="secondary" text-color="black" label small>28% OFF</v-chip>
            </v-row>
            <v-row align="center" justify="space-between">
              <div class="ma-2">
                <h1>{{item.name}}</h1>
                <p class="body-2 my-2">Pay as You Go | 45 Days to Breakeven</p>
              </div>
              <div class="ma-2 text-right">
                <h1>${{item.price}}/T/D</h1>
                <p class="body-2 my-2">Min Amount {{item.min}}T</p>
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
                <div class="subtitle-1">$1.40</div>
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
                  <div class="subtitle-1">{{item.commission * 100}}%</div>
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
                  <div class="subtitle-1">${{item.electricityFee}}/T/D</div>
                </div>
              </div>
            </v-row>
            <v-row>
              <v-col cols="9">
                <div>{{item.seller}}</div>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn href="#/product" color="primary" class="check-btn">
                  <v-icon>mdi-open-in-new</v-icon>
                  <span class="ml-2">Check it out</span>
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
  name: "Products",
  methods: {
    setDuration(d) {
      this.duration = d;
    }
  },
  data() {
    return {
      duration: "30D",
      coinTypes: ["BTC", "ETH"],
      items: {
        "30D": [
          {
            name: "BTC-S17",
            rating: 5,
            seller: "miningzoo.com",
            price: 4.98,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 4,
            seller: "miningzoo.com",
            price: 5,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 5,
            seller: "miningzoo.com",
            price: 4.88,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 3,
            seller: "miningzoo.com",
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 1,
            seller: "miningzoo.com",
            price: 4.5,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 2,
            seller: "miningzoo.com",
            price: 4.67,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        "60D": [
          {
            name: "BTC-S17",
            rating: 4,
            seller: "miningzoo.com",
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 5,
            seller: "miningzoo.com",
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        "120D": [
          {
            name: "BTC-S17",
            rating: 4,
            seller: "miningzoo.com",
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: "BTC-S17",
            rating: 5,
            seller: "miningzoo.com",
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        "360D": [],
        "720D": []
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
  -webkit-box-shadow: 0px 1px 1px 2px rgba(251, 255, 0, 0.3),
    0px 2px 2px 2px rgba(251, 255, 0, 0.2);
  box-shadow: 0px 1px 1px 2px rgba(251, 255, 0, 0.3),
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
</style>