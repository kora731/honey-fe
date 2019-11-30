<template>
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
</template>

<script>
export default {
  name: 'DifficultyPredictor'
}
</script>

<style scoped>

</style>