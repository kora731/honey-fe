<template>
  <div ref="chart-container" />
</template>

<script>
import Highcharts from 'highcharts';
import { mapState } from 'vuex'

export default {
  name: 'SummaryChart',
  props: ['summary', 'coin'],
  computed: {
    ...mapState(['niceHash'])
  },
  methods: {
    draw() {
      const unit = this.summary.unit;
      const algorithm = this.coin === 'ETH' || this.coin === 'ETC' ? 'DAGGERHASHIMOTO' : 'SHA256';
      const factor = this.coin === 'ETH' || this.coin === 'ETC' ? 1000 * 1000 : 1000;

      Highcharts.chart(this.$refs['chart-container'], {
        title: {
          text: `${this.coin} Mining Contracts Price over Duration`,
          style: { color: 'white' }
        },

        chart: {
          backgroundColor: '#000'
        },

        colors: ['#cece4b'],

        yAxis: [{
          title: {
            text: `Best Price ($/${this.summary.unit}/Day)`,
            style: { color: 'white' }
          },
          labels: {
            style: { color: '#ccc' }
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          min: 0
        }],

        xAxis: {
          title: {
            text: 'Contract Duration (Days)',
            style: { color: 'white' }
          },
          labels: {
            style: { color: '#ccc' }
          },
          gridLineWidth: 1
        },

        legend: {
          enabled: false
        },

        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
              formatter: function () {
                return Highcharts.numberFormat(this.y,4);
              },
              style: { color: '#cece4b' }
            },
            enableMouseTracking: true
          }
        },

        tooltip: {
          // headerFormat: '<span style="font-size: 10px">Duration: {point.desc} Days</span><br/>',
          formatter() {
            return `
              Duration: ${this.point.desc}<br/>
              Best Price: ${this.y.toFixed(4)}$/${unit}/Day<br/>
              ${this.point.platforms}<br/>
              Double click for details.
            `;
          }
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
            { x: 0, y: this.niceHash[algorithm].avgPrice * this.$store.state.summary.BTC.coinPrice / factor, desc: 'Real Time', platforms: '' },
            ...this.summary.contracts.map(c => ({
              x: c.duration,
              y: c.contract_cost,
              desc: c.durationAlias,
              platforms: 'Platforms: ' + this.summary.durationSellers.get(c.durationAlias).size
            }))
          ]
        }]
      });
    }
  },
  watch: {
    ['summary.contracts']() {
      this.draw();
    },
    ['niceHash.SHA256.avgPrice']() {
      this.draw();
    }
  },
  mounted() {
    this.draw();
  }
}
</script>

<style scoped>

</style>