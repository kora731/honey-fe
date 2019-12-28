<template>
  <v-container>
    <v-row> 
      <v-col cols="12" md="8">
        <v-card>
          <v-card-text>
            <v-row align="center">
              <v-col cols="2">
                <v-avatar color="orange" size="70">
                  <span class="white--text headline">₿</span>
                </v-avatar>
              </v-col>
              <v-col cols="10">
                <v-row align="center">
                  <v-col cols="6">
                    <div>比特小鹿 蚂蚁 S17 特惠</div>
                    <br/>
                    <h2>$ 1.45/TH/D 30D</h2>
                  </v-col>
                  <v-col cols="6">
                    <div>
                      产品评分：
                      <v-icon color="red" v-for="n in 4" :key="n">mdi-star</v-icon>
                      <v-icon v-for="n in 1" :key="6 - n">mdi-star</v-icon>
                    </div>
                    <br/>
                    <div>更新时间：2019-12-12 15:00</div>
                  </v-col>
                </v-row>
                <v-btn color="orange">BUY</v-btn>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="3" class="text-right">产品编号：</v-col>
              <v-col cols="3">A0001</v-col>
              <v-col cols="3" class="text-right">产品类别：</v-col>
              <v-col cols="3">现货</v-col>
              <v-col cols="3" class="text-right">最小购买单位：</v-col>
              <v-col cols="3">3T</v-col>
              <v-col cols="3" class="text-right">管理费：</v-col>
              <v-col cols="3">3%</v-col>
              <v-col cols="3" class="text-right">电费：</v-col>
              <v-col cols="3">$ 0.07/T/D</v-col>
              <v-col cols="3" class="text-right">状态：</v-col>
              <v-col cols="3">可售</v-col>
              <v-col cols="3" class="text-right">合约：</v-col>
              <v-col cols="3">180天</v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <br/>
        <v-card>
          <v-card-title>商家信息</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="2">
                <v-img :src="require('../assets/bitdeer.png')" class="my-3" contain></v-img>
              </v-col>
              <v-col cols="10">
                <div>商家名称：bitdeer 所在国家：中国</div>
                <br/>
                <div>联系方式：</div>
                <v-row align="center">
                  <v-col cols="3">
                    <v-icon>mdi-home</v-icon> website
                  </v-col>
                  <v-col cols="3">
                    <v-icon>mdi-email</v-icon> mail
                  </v-col>
                  <v-col cols="3">
                    <v-icon>mdi-twitter</v-icon> twitter
                  </v-col>
                  <v-col cols="3">
                    <v-icon>mdi-facebook</v-icon> facebook
                  </v-col>
                  <v-col cols="3">
                    <v-icon>mdi-telegram</v-icon> telegram
                  </v-col>
                  <v-col cols="3">
                    <v-icon>mdi-discord</v-icon> discord
                  </v-col>
                  <v-col cols="3">
                    <v-icon>mdi-vk</v-icon> vk
                  </v-col>
                </v-row>
                <div>
                  BitDeer 是一个为用户提供矿机共享服务的平台， 为用户节省了购买、安装、托管矿机的复杂流程，一键下单，即可享受服务。
                  <br/>
                  区别于市面上的任何一款矿机共享产品：
                  <br/>
                  BitDeer平台上用户收益更加透明：真实矿机提供挖矿服务，平台根据用户指示连接至指定矿池，再由矿池将数字货币挖矿产出直接分配至用户提供的钱包地址。
                  <br/>
                  BitDeer的服务套餐选择更为灵活的基础上，提供非常有价格竞争力的长短周期组合搭配，服务优势更为明显；
                  <br/>
                  此外，平台选择全球领先矿机厂商设备，深度合作全球一流矿池BTC.com 和AntPool。
                  <br/>
                  “真实矿机挖矿、矿池直接打款、用户收益透明、服务套餐选择灵活”，BitDeer 致力于为全球用户提供透明、安全、便捷的全球一流矿机共享服务。
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <difficulty-predictor></difficulty-predictor>
        <br/>
        <profit-predictor></profit-predictor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DifficultyPredictor from "../components/DifficultyPredictor";
import ProfitPredictor from "../components/ProfitPredictor";

export default {
  name: 'Product',
  components: { DifficultyPredictor, ProfitPredictor },
  data() {
    return {
      product: {
        title: '比特小鹿 蚂蚁 S17 特惠'
      }
    };
  }
}
</script>

<style scoped>

</style>