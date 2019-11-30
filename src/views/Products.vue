<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>BTC算力推荐</v-card-title>
          <v-card-text>
            <v-item-group mandatory>
              <v-container>
                <v-row>
                  <v-col v-for="n in Object.keys(items)" :key="n" cols="2">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                              :color="active ? 'primary' : ''"
                              class="d-flex align-center"
                              dark
                              @click="() => { toggle(); setDuration(n); }"
                      >
                        <v-scroll-y-transition>
                          <div class="display-1 flex-grow-1 text-center">
                            {{n}}
                          </div>
                        </v-scroll-y-transition>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-card-text>
        </v-card>
        <br/>
        <v-card v-for="(item, index) in items[duration]" :key="index" style="margin-bottom: 10px;">
          <v-card-text>
            <v-row align="center">
              <v-col cols="6">
                <h2>{{item.name}}</h2>
                <div>
                  <v-icon color="red" v-for="n in item.rating" :key="`${index}_${n}_r`">mdi-star</v-icon>
                  <v-icon v-for="n in 5 - item.rating" :key="`${index}_${n}`">mdi-star</v-icon>
                  {{item.seller}}
                </div>
              </v-col>
              <v-col cols="6" class="text-right">
                <h2>${{item.price}}/T/D</h2>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="3">
                <div>手续费</div>
                <div>{{item.commission * 100}}%</div>
              </v-col>
              <v-col cols="3">
                <div>电费</div>
                <div>${{item.electricityFee}}/T/D</div>
              </v-col>
              <v-col cols="3">
                <div>起购</div>
                <div>{{item.min}}T</div>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn href="#/product" color="primary">
                  <span class="mr-2">View</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>比特币算力难度预测&产量预测</v-card-title>
          <v-card-text>
            <v-img :src="require('../assets/pre.png')" class="my-3" contain></v-img>
            <v-row class="text-center">
              <v-col cols="4">
                <div>当前难度</div>
                <div>1.27 × 10^13</div>
              </v-col>
              <v-col cols="4">
                <div>当前总算力</div>
                <div>96.142 EH/s</div>
              </v-col>
              <v-col cols="4">
                <div>昨日每TH收益</div>
                <div>₿ 0.0000186</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <br/>
        <v-card>
          <v-card-title>比特币算力产出预算</v-card-title>
          <v-card-text>
            <h3>₿ 0.002</h3>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="4">
                    <v-text-field label="算力"></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-select label="单位" :items="['TH','GH']"></v-select>
                  </v-col>
                  <v-col cols="4">
                    <v-select label="算力周期" :items="Object.keys(items)"></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <v-btn color="primary"><span>计算</span></v-btn>
            <br/><br/>
            <div>难度增加系数为最近一年难度上升平均值4%/15天</div>
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
  data() {
    return {
      duration: '30D',
      items: {
        '30D': [
          {
            name: 'BTC-S17',
            rating: 5,
            seller: 'miningzoo.com',
            price: 4.98,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 4,
            seller: 'miningzoo.com',
            price: 5,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 5,
            seller: 'miningzoo.com',
            price: 4.88,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 3,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 1,
            seller: 'miningzoo.com',
            price: 4.5,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 2,
            seller: 'miningzoo.com',
            price: 4.67,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        '60D': [
          {
            name: 'BTC-S17',
            rating: 4,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 5,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        '90D': [
          {
            name: 'BTC-S17',
            rating: 5,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 4,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        '120D': [
          {
            name: 'BTC-S17',
            rating: 4,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          },
          {
            name: 'BTC-S17',
            rating: 5,
            seller: 'miningzoo.com',
            price: 4.9,
            commission: 0.05,
            electricityFee: 0.0811,
            min: 3
          }
        ],
        '360D': [
        ],
        '720D': [
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>