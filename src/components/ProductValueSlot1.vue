<template>
  <v-col cols="5" class="d-flex align-lg-center order-2 order-lg-1  flex-column flex-md-row" xs="4" ml="2" lg="2">
    <span class="dealMeta">Unit Cost</span>
    <span class="black--text title-2 d-flex align-center">
      {{val | price(currency === 'USD' ? 'USD' : item.coin, currency === 'USD' ? 4 : 8)}}
      <span class="subtitle-1">{{s1[1] | unit(item.coin)}}</span>
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
</template>

<script>
import { unit, price } from "../filters";

export default {
  name: "ProductValueSlot1",
  props: ["item", "s1", "currency"],
  filters: { unit, price },
  computed: {
    val() {
      const [,,field] = this.s1;
      let v = this.item[field] || field(this.item);
      if (this.currency !== 'USD') v /= this.item.btc_price;
      return v;
    }
  }
}
</script>

<style scoped lang="scss">
.dealMeta{
  display: none;
  @media (max-width: 500px) {
    display: block;
    font-size:12px;
    text-align: left;
    font-weight: 300;
    color: #333;
  }
}

@media only screen and (max-width: 500px) {
  .title-2{
    font-size: 14px !important;
  }

  .subtitle-1{
    font-size: 12px !important;
    font-weight: 400;
  }

  .body-1{
    font-size: 14px !important;
  }
}
</style>