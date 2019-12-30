<template>
  <v-container>
    <v-row>
      <v-col cols="2" md="2" lg="2" sm="6">
        <v-card style="background: transparent;" elevation="0">
          <v-card-title>Coin</v-card-title>
          <v-col cols="4">
            <v-card>
              <v-card-text>BTC</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-text>ETH</v-card-text>
            </v-card>
          </v-col>
          <v-card-title>Duration</v-card-title>
          <v-card-text>
            <v-item-group mandatory>
              <v-container>
                <v-row class="flex-column">
                  <v-col v-for="n in Object.keys(items)" :key="n" cols="4">
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
        <v-card v-for="(item, index) in items[duration]" :key="index" style="margin-bottom: 20px;">
          <v-card-text>
            <v-row align="center">
              <v-col cols="6">
                <h2>{{item.name}}</h2>
              </v-col>
              <v-col cols="6" class="text-right">
                <h2>${{item.price}}/T/D</h2>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col class="flex-grow-1">
                <div>Total Mining Income</div>
                <div>$1.40</div>
              </v-col>
              <div class="d-flex">
                <v-col>
                  <div>Management Fee</div>
                  <div>{{item.commission * 100}}%</div>
                </v-col>
                <v-col>
                  <div>Electricity Fee</div>
                  <div>${{item.electricityFee}}/T/D</div>
                </v-col>
                <v-col>
                  <div>Min Amount</div>
                  <div>{{item.min}}T</div>
                </v-col>
              </div>
            </v-row>
            <v-row>
              <v-col cols="9">
                <div>
                  <v-icon color="red" v-for="n in item.rating" :key="`${index}_${n}_r`">mdi-star</v-icon>
                  <v-icon v-for="n in 5 - item.rating" :key="`${index}_${n}`">mdi-star</v-icon>
                  {{item.seller}}
                </div>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn href="#/product" color="primary">
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
  name: "Products",
  methods: {
    setDuration(d) {
      this.duration = d;
    }
  },
  data() {
    return {
      duration: "30D",
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

<style scoped>
.v-item--active {
  color: #222;
  background-color: #ffff00 !important;
}
</style>