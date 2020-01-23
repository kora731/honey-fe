import qs from "querystring";
<template>
  <div ref="chart-container" />
</template>

<script>
import _ from 'lodash';
import qs from 'querystring';
import Highcharts from 'highcharts';
import { mapState } from 'vuex';

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
      const jump = _.throttle(this.jump, 1000);

      Highcharts.chart(this.$refs['chart-container'], {
        title: {
          text: `${this.coin} Mining Contracts Price over Duration`,
          style: {
            fontSize: 15,
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
          plotLines: (Date.now() < halvingDates[this.coin] ? [0, halvingDates[this.coin]] : [0]).map((ts, i, arr) => ({
            color: 'white',
            dashStyle: 'dash',
            width: 1,
            value: this.summary.contracts[0] && this.summary.contracts[0].mining_payoff / (i + 1),
            label: {
              align: 'right',
              style: {
                color: '#cece4b',
                fontStyle: 'italic'
              },
              text: arr.length === 1 ? 'Block reward' : i === 0 ? 'Pre-halving block reward' : 'Post-halving block reward',
              x: -30
            },
            zIndex: 3
          }))
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
            width: 1
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
          series: {
            point: {
              events: {
                click(e) {
                  if (Date.now() - e.point.lastClick < 500) {
                    jump(this.coin, e.point.x);
                  }
                  e.point.lastClick = Date.now();
                }
              }
            }
          },
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
            { x: Date.now(), y: this.niceHash[algorithm].avgPrice * this.$store.state.summary.BTC.coinPrice / factor, desc: 'Real Time', platforms: '' },
            ...this.summary.contracts.filter(c => c.duration <= 730).map(c => ({
              x: Date.now() + c.duration * 1000 * 86400,
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