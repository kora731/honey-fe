<template>
  <v-container>
    <h2>BTC算力</h2>
    <v-row>
      <v-col class="text-center" cols="6" sm="4" md="3" lg="2" v-for="p in products" :key="p.duration">
        <v-card href="#/products">
          <v-card-text>
            <v-avatar color="indigo" size="100">
              <span class="white--text headline">{{p.duration}}</span>
            </v-avatar>
            <div>{{p.price}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br/><br/>
    <h2>为什么要买云算力</h2>
    <v-row>
      <v-col class="text-center" cols="12" md="6" lg="3">
        <v-icon size="64">mdi-star</v-icon>
        <h2>门槛低</h2>
        <div>
          矿场提供低廉的电价，维护服务。较低的购买门槛，提供多种合约周期。解决用户投资大，技术难等问题。可以自由挖矿。
        </div>
      </v-col>
      <v-col class="text-center" cols="12" md="6" lg="3">
        <v-icon size="64">mdi-star</v-icon>
        <h2>方便快捷</h2>
        <div>
          无需自行购置机器，安装配置，维护保修。一切都由矿主为您搞定。省时省力，方便快捷。
        </div>
      </v-col>
      <v-col class="text-center" cols="12" md="6" lg="3">
        <v-icon size="64">mdi-star</v-icon>
        <h2>收益稳定</h2>
        <div>
          一次购买算力，价格固定，不回因为BTC价格的波动而发生变化。算力稳定，收益基本可以预计。
        </div>
      </v-col>
      <v-col class="text-center" cols="12" md="6" lg="3">
        <v-icon size="64">mdi-star</v-icon>
        <h2>优选全球</h2>
        <div>
          甄选全球优秀的算力提供厂商，集中选取全球最具有性价比的厂商进行推荐。公司坐落在香港。多年关注算力发展，资深矿业大佬为顾问，及时提供风险预告。
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      products: [
        {
          duration: '30Days',
          price: '0.45/TH/D',
          sellers: 12
        }, {
          duration: '60Days',
          price: '0.43/TH/D',
          sellers: 12
        }, {
          duration: '120Days',
          price: '0.40/TH/D',
          sellers: 12
        }, {
          duration: '360Days',
          price: '0.39/TH/D',
          sellers: 12
        }, {
          duration: '720Days',
          price: '0.37/TH/D',
          sellers: 12
        }
      ]
    };
  }
}
</script>
