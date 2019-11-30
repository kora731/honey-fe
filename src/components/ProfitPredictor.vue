<template>
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
              <v-select label="算力周期" :items="['30D', '60D', '90D', '120D', '360D', '720D']"></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-btn color="primary"><span>计算</span></v-btn>
      <br/><br/>
      <div>难度增加系数为最近一年难度上升平均值4%/15天</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProfitPredictor'
}
</script>

<style scoped>

</style>