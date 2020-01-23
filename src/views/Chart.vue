<template>
  <v-container style="max-width:1080px;">
    <div ref="nicehash" style="height: 600px;" />
  </v-container>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

export default {
  name: "Chart",
  async mounted() {
    const { data } = await axios.get("https://api.i43.io/blockchain/cloud_mining/ticks?platform=NICEHASH-STANDARD&algo=SHA256");

    Highcharts.chart(this.$refs.nicehash, {
      title: {
        text: 'Nicehash price & speed.'
      },

      yAxis: [
        {
          title: {
            text: 'speed'
          },
          labels: {
            format: '{value} PH/s',
          }
        }, {
          title: {
            text: 'price'
          },
          labels: {
            format: '{value} BTC/PH/s',
          },
          opposite: true
        }
      ],

      tooltip: {
        shared: true
      },

      xAxis: {
        type: 'datetime'
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          }
        }
      },

      series: [{
        name: 'Speed',
        type: 'area',
        yAxis: 0,
        tooltip: {
          valueDecimals: 2,
          valueSuffix: 'PH/s'
        },
        data: data.map(v => [v.ts * 1000, v.volume / 10 ** 15])
      }, {
        name: 'Price',
        yAxis: 1,
        tooltip: {
          valueDecimals: 5,
          valueSuffix: 'BTC/PH/s'
        },
        data: data.map(v => [v.ts * 1000, v.price * 10 ** 15])
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