<template>
  <v-col cols="3" class="d-flex order-3" style="padding-top: 0; padding-bottom: 0;"  xs="4" ml="2" lg="2">
    <div class="d-flex discount align-lg-center d-flex align-center">
      <div class="d-flex discount flex-column align-self-center">
        <span class="dealMeta">ROI</span>
        <!--            <span class="body-2" label small>{{(item.expected_discount * 100).toFixed(0)}}% OFF</span>-->
        <span class="body-1 font-weight-bold" label small v-if="typeof s2[1] === 'string'">{{(val * 1).toFixed(0)}}</span>
        <span class="body-1 font-weight-bold" :class="getValueColor(val)" label small v-if="typeof s2[1] !== 'string'">{{val | percent}}</span>
      </div>
    </div>
    <v-tooltip top max-width="400px" class="ml-2">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" class="body-1 mx-1">mdi-help-circle-outline</v-icon>
      </template>
      Note: Discount calculated as the cost of buying {{item.coin}} compared to {{item.coin}} earned via buying the cloud mining contract.
      The {{item.coin}} earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment
    </v-tooltip>
  </v-col>
</template>

<script>
import { percent } from "../filters";
import { getValueColor } from "../utils";

export default {
  name: "ProductValueSlot1",
  props: ["item", "s2", "currency"],
  filters: { percent },
  methods: { getValueColor },
  computed: {
    val() {
      const [,field] = this.s2;
      return this.item[field] || field(this.item);
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

.body-2 {
  text-align: center;
  width: 35px;
}

@media only screen and (max-width: 500px) {
  .title-2{
    font-size: 14px !important;
  }

  .subtitle-1{
    font-size: 12px !important;
    font-weight: 400;
  }
}

.discount {
  background: #FFFACC;
  @media (max-width: 800px) {
    background: transparent;
  }
  color: black;
  padding: 3px 10px 0;
  @media (max-width: 500px) {
    padding:0;
  }
  // border-radius: 3px !important;
  font-weight: 500;
}
</style>