import qs from "querystring";
<template>
  <div ref="chart-container" />
</template>

<script>
import qs from 'querystring';
import Highcharts from 'highcharts';
import { mapState } from 'vuex';

import SL from 'highcharts/modules/series-label';
SL(Highcharts);

const halvingDates = {
  'BTC': Date.parse('May 12, 2020'),
  'BCH': Date.parse('May 24, 2020')
};

export default {
  name: 'SummaryChart',
  props: ['summary', 'coin'],
  computed: {
    ...mapState(['niceHash'])
  },
  methods: {
    jump(coin, duration) {
      location.href = "#/products?" + qs.encode({ coin, duration });
    },
    draw() {
      const unit = this.summary.unit;
      const algorithm = this.coin === 'ETH' || this.coin === 'ETC' ? 'DAGGERHASHIMOTO' : 'SHA256';
      const factor = this.coin === 'ETH' || this.coin === 'ETC' ? 1000 * 1000 : 1000;
      const { coin } = this;

      Highcharts.chart(this.$refs['chart-container'], {
        title: {
          text: `${this.coin} Mining Contracts Price over Duration`,
          style: {
            fontSize: 18,
            color: 'white'
          }
        },

        chart: {
          backgroundColor: '#000',
          style: {
            fontFamily: '"Roboto", Helvetica, Arial, sans-serif'
          }
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
          min: 0,
        }],

        xAxis: {
          type: 'datetime',
          title: {
            text: 'Expiry Date',
            style: { color: 'white' }
          },
          labels: {
            style: { color: '#ccc' }
          },
          dateTimeLabelFormats: {
            month: '%b %Y',
            year: '%b %Y'
          },
          plotBands: Date.now() < halvingDates[this.coin] && [{
            from: 0,
            to: halvingDates[this.coin],
            color: 'rgba(255, 255, 0, 0.2)',
            width: 1,
            label: {
              text: 'Pre-halving',
              style: {
                color: 'white'
              }
            }
          }],
          // tickInterval: 365 * 86400 * 1000,
          gridLineWidth: 0,
          tickWidth: 0,
          endOnTick: false
        },

        legend: {
          enabled: false
        },

        plotOptions: {
          line: {
            states: {
              inactive: {
                opacity: 1
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function () {
                return this.point.desc + '<br/>' + Highcharts.numberFormat(this.y,4);
              },
              style: { color: '#cece4b' }
            },
            enableMouseTracking: true
          }
        },

        tooltip: {
          useHTML: true,
          style: {
            pointerEvents: 'auto'
          },
          formatter() {
            return `
              Duration: ${this.point.desc}<br/>
              Best Price: ${this.y.toFixed(4)}$/${unit}/Day<br/>
              ${this.point.platforms}
            ` + (this.point.duration ? `<a href="#/products?coin=${coin}&duration=${this.point.duration}" style="display: block; text-align: center;">Details</a>` : '');
          }
        },

        series: [{
          name: '',
          type: 'line',
          yAxis: 0,
          tooltip: {
            valueDecimals: 4,
            valueSuffix: `$/${this.summary.unit}/Day`
          },
          data: [
            { x: Date.now(), y: this.niceHash[algorithm].avgPrice * this.$store.state.summary.BTC.coinPrice / factor, desc: 'Real Time', platforms: '' },
            ...this.summary.contracts.filter(c => c.duration <= 730).map(c => ({
              x: Date.now() + c.duration * 1000 * 86400,
              y: c.contract_cost,
              desc: c.durationAlias,
              duration: c.duration,
              platforms: 'Platforms: ' + this.summary.durationSellers.get(c.durationAlias).size
            }))
          ]
        }, {
          name: 'Block rewards',
          type: 'line',
          yAxis: 0,
          color: 'white',
          enableMouseTracking: false,
          dataLabels: { enabled: false },
          marker: {
            enabled: false
          },
          dashStyle: 'dash',
          data: [
            [Date.now(), this.summary.contracts[0] && this.summary.contracts[0].mining_payoff],
            ...halvingDates[coin] ?
              [
                [halvingDates[coin], this.summary.contracts[0] && this.summary.contracts[0].mining_payoff],
                [halvingDates[coin], this.summary.contracts[0] && this.summary.contracts[0].mining_payoff / 2],
                [Date.now() + 730 * 1000 * 86400, this.summary.contracts[0] && this.summary.contracts[0].mining_payoff / 2]
              ] : [
                [Date.now() + 730 * 1000 * 86400, this.summary.contracts[0] && this.summary.contracts[0].mining_payoff]
              ]
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