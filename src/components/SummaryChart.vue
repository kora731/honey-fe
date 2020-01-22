<template>
  <div ref="chart-container" />
</template>

<script>
import Highcharts from "highcharts";

export default {
  name: 'SummaryChart',
  props: ['summary', 'coin'],
  async mounted() {
    const algorithm = this.coin === 'ETH' || this.coin === 'ETC' ? 'DAGGERHASHIMOTO' : 'SHA256';
    const factor = this.coin === 'ETH' || this.coin === 'ETC' ? 1000 * 1000 : 1000;

    Highcharts.chart(this.$refs['chart-container'], {
      title: {
        text: 'Nicehash price & speed.'
      },

      yAxis: [{
        title: {
          text: `Best Price ($/${this.summary.unit}/Day)`
        },
        min: 0
      }],

      xAxis: {
      },

      legend: {
        enabled: false
      },

      series: [{
        name: 'Best price',
        type: 'line',
        yAxis: 0,
        tooltip: {
          valueDecimals: 4,
          valueSuffix: `$/${this.summary.unit}/Day`
        },
        data: [
          [0, this.$store.state.niceHash[algorithm].avgPrice * this.$store.state.summary.BTC.coinPrice / factor],
          ...this.summary.contracts.map(c => [c.duration, c.contract_cost])
        ]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });

  }
}
</script>

<style scoped>

</style>