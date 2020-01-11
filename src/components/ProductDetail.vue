<template>
  <div v-if="show" class="py-2 px-8" @click.stop>
    <v-divider />
    <v-row>
      <v-col cols="11">
        Review:&nbsp;&nbsp;
        <v-btn-toggle dense v-model="selected">
          <v-btn>Daily</v-btn>
          <v-btn>Total</v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="1" style="text-align: right;">
        <v-icon @click.stop="$emit('hide')">mdi-close</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <h4>INCOME</h4>
        <v-simple-table dense>
          <tr><td>Mining Earnings</td><td><colored :value="data.payoff" :digits="digits" /></td></tr>
        </v-simple-table>
        <v-divider />
        <h4>COST</h4>
        <v-simple-table dense>
          <tr><td>Management Fee</td><td><colored :value="-data.management_fee" :digits="digits" /></td></tr>
          <tr><td>Upfront Fee</td><td><colored :value="-data.upfront_fee" :digits="digits"/></td></tr>
          <tr>
            <td>Daily Fee<span v-if="selected === 1"> * {{item.duration}}D * {{item.contract_size}}{{item.coin === 'ETH' ? 'M' : 'T'}}</span></td>
            <td><colored :value="-data.electricity_fee" :digits="digits"/></td>
          </tr>
          <tr><td>Total Cost</td><td><colored :value="-data.total_cost" :digits="digits"/></td></tr>
        </v-simple-table>
        <v-divider/>
        <h4>PROFIT</h4>
        <v-simple-table dense>
          <tr><td>Net Profit</td><td><colored :value="data.profit" :digits="digits" /></td></tr>
          <tr><td>ROI</td><td>{{(data.roi * 100).toFixed(1)}}%</td></tr>
          <tr v-if="selected === 1"><td>Breakeven Days</td><td>{{data.expected_breakeven_days.toFixed(0)}}</td></tr>
        </v-simple-table>
      </v-col>
      <v-col cols="12" sm="6">
        <h4>DETAILS</h4>
        <v-simple-table dense>
          <tr><td>Guaranteed Uptime</td><td>95%???</td></tr>
          <tr><td>Guaranteed Uptime</td><td>{{item.contract_size}}{{item.coin === 'ETH' ? 'M' : 'T'}}</td></tr>
          <tr><td>Available Date</td><td>???</td></tr>
        </v-simple-table>
        <div class="my-2"></div>
        <h4>PAYMENT</h4>
        <v-simple-table dense>
          <tr><td>Payment Term</td><td>Pay as you go/ Pay all upfront / Set and forget???</td></tr>
          <tr><td>Accepted Payment</td><td>???</td></tr>
          <tr><td>Payout Type</td><td>???</td></tr>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Colored from "./Colored";

export default {
  name: "ProductDetail",
  props: ["item", "show"],
  components: { Colored },
  computed: {
    digits() { return this.selected === 0 ? 4 : 2; },
    data() { return [this.daily, this.total][this.selected]; }
  },
  data() {
    const { duration, contract_size, mining_payoff, management_fee, upfront_fee, electricity_fee, expected_breakeven_days } = this.item;

    const dailyPayOff = mining_payoff * contract_size;
    const dailyUpfront = upfront_fee / duration;
    const electricityFee = electricity_fee * contract_size;
    const dailyTotalCost = management_fee + dailyUpfront + electricityFee;

    const totalPayOff = dailyPayOff * duration;
    const managementFeeTotal = management_fee * duration;
    const electricityFeeTotal = electricityFee * duration;
    const totalCost = managementFeeTotal + upfront_fee + electricityFeeTotal;

    return {
      selected: 0,
      daily: {
        payoff: dailyPayOff,
        management_fee,
        upfront_fee: dailyUpfront,
        electricity_fee: electricityFee,
        total_cost: dailyTotalCost,
        profit: dailyPayOff - dailyTotalCost,
        roi: (dailyPayOff - dailyTotalCost) / dailyTotalCost
      },
      total: {
        payoff: totalPayOff,
        management_fee: managementFeeTotal,
        upfront_fee,
        electricity_fee: electricityFeeTotal,
        total_cost: totalCost,
        profit: totalPayOff - totalCost,
        roi: (totalPayOff - totalCost) / totalCost,
        expected_breakeven_days
      }
    };
  }
}
</script>

<style scoped>
.v-data-table--dense td {
    height: 24px;
    width: 50%;
}

</style>