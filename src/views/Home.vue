<template>
  <v-container class="content">
    <v-row class="layout">
      <div class="innerContent">
        <div class="slogan mr-4">
          <span class="slogan-yellow">SWEET DEALS</span>
          <br />
          <span class="slogan-yellow">IN CRYPTO</span>
          <br />
          <span class="slogan-yellow">MINING</span>
          <br />
        </div>
        <div class="slogan">
          <span class="slogan-black">BEST PRICE x OBJECTIVE METRICS</span>
          <form
            action="https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&amp;id=2f33950de0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div
              class="desc"
            >We aggregate and rate existing cloud mining contracts, for transparency, standardization and price discovery.</div>
            <div class="desc sign_up">Sign up for fresh updates & never miss a juicy deal.</div>

            <div class="row form inputEmail">
              <input id="email" name="EMAIL" type="email" placeholder="Enter email address" />
              <input type="submit" class="btn" value="GO" />
            </div>
          </form>
        </div>
      </div>
    </v-row>

    <v-row class="mt-10" justify="center">
      <v-col style="max-width: 1080px;">
        <div class="display-2 deal-header">Discover best deals in cloud mining contracts listed across reputable platforms:</div>
      </v-col>
    </v-row>

    <v-row class="deals d-flex mb-10" justify="center">
      <v-row style="max-width: 1080px;" justify="center">
        <v-col cols="12" sm="12" md="6" lg="6" v-for="p in summary" :key="p.duration">
          <v-card @click="$store.state.selectedCoins = [p.type]" href="#/products" class="mx-auto coinDetail" height="420" max-width="560" :ripple="false">
            <v-card-text class="text-left">
              <v-row>
                <div class="flex-grow-1">
                  <div class="mx-4 mt-4">
                    <span class="display-3 mr-4 font-weight-bold">{{p.type}}</span>
                    <v-chip
                      class="mb-3"
                      color="accent"
                      text-color="black"
                      label
                    ><span class="font-weight-bold">{{p.sellers.size}} Platforms</span>
                    </v-chip>
                  </div>
                   <div class="mb-4 ml-4">mining contract</div>

                </div>
                <div class="pr-2">
                  <v-img width="80" :src="p.img"></v-img>
                </div>
              </v-row>
             
              <v-divider></v-divider>
              <div class="ma-4">
                <v-icon class="ma-2">mdi-sale</v-icon>up to 
                <span class="discount">{{(p.maxDiscount * 100).toFixed(0)}}% OFF</span>
                 <v-tooltip top max-width="400px">
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" class="body-1 ml-1">mdi-help-circle-outline</v-icon>
                    </template>
                    Note: Discount calculated as the cost of buying {{p.type}} compared to {{p.type}} earned via buying the cloud mining contract. 
                    The {{p.type}} earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment
                  </v-tooltip>
                 vs buying {{p.type}} 
                 
              </div>
              <div class="ma-4">
                <v-icon class="ma-2">mdi-tag-heart</v-icon>as low as <span class="dealData">${{p.price.toFixed(6)}} {{p.unit}}</span>
              </div>
            </v-card-text>
            <div
              class="coinDetailPart"
            >
              <div class="ma-4">
                <v-icon class="ma-2">mdi-coin</v-icon>{{p.type}} price: <span class="dealData">${{p.coinPrice.toFixed(2)}} 
                  <!--<span class="red--text">(-1.63%)</span>--> </span>
              </div>
              <div class="ma-4">
                <v-icon class="ma-2">mdi-treasure-chest</v-icon>{{p.type}} mining earnings:<span class="dealData"> ${{p.maxPayOff.toFixed(5)}} {{p.unit}} </span>
                 <v-tooltip top max-width="400px">
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" class="body-1">mdi-help-circle-outline</v-icon>
                    </template>
                    Theoretical output from {{p.type  === 'BTC' ? 'BTC.com' : 'sparkpool.com'}}
                  </v-tooltip>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-row>

    <v-row class="faq d-flex" justify="center">
      <v-row style="max-width: 1080px;" class="mt-10">
        <div class="display-2 mr-10 ml-4 mb-4">FAQ</div>

        <div>
      <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header class="display-1 font-weight-bold">Economics 101: What does Mining and Lemon have in common?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p>"The Market for Lemons: Quality Uncertainty and the Market Mechanism" is a well-known 1978 paper by economist <a href="https://en.wikipedia.org/wiki/George_Akerlof" target="_blank">George Akerlof</a>
            which examines how the quality of goods traded in a market can degrade in the presence of <a href="https://en.wikipedia.org/wiki/Information_asymmetry" target="_blank">information asymmetry</a> between
            buyers and sellers, leaving only "lemons" behind (Wikipedia).</p>
            <p>Mining contracts serve a function in the financialization of mining. Miners have traditionally resorted to selling cloud mining contracts to hedge risk by locking in future mining rewards ahead of time
              or earning premium for performing mining services. However, there have been few credible choices available for miners of small to medium size operations to list their mining services.</p>
            <p>On the other hand, investors who are interested in exposure to mining cashflow without having to deal with the hassle of actual mining, only have the choice of centralized cloud mining or staking
              platforms that leave them with little pricing power or choice of cryptocurrencies. Moreover, prevalent cloud mining contract design which requires investors to put up full collateral upfront
              but no collateral for the issuers, exposing investors to significant counterparty risk.</p>
            <p>Even across reputable platforms, existing cloud mining market is far from standardized or efficient. Price disparities of 10-40% for the same type of mining contract underwritten by different platforms is common.</p>
            <p>That’s why we created HoneyLemon, and start by aggregating available cloud mining contracts from select platforms with a track record of operations, for transparency, standardization and price discovery.</p>

            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="display-1 font-weight-bold">What are the typical cloud mining contracts in financial terms?</v-expansion-panel-header>
            <v-expansion-panel-content>
              According to <a href="https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" target="_blank">FinCEN</a>, “persons (contract purchasers) may purchase “mining contracts” from a seller of computer processing (the cloud miner) that grants these purchasers permission to use the cloud miner’s computers to mine CVCs on the purchaser’s behalf.”
Cloud mining contracts can be commonly classified into two types: termed contracts with fixed duration such as 180 days or 1 year contract, and “lifetime” contracts that terminate after the mining earnings falls below electricity cost.
The investor of cloud mining contracts and the miner/platform issuing these contracts are essentially exchanging a cashflow swap: investor receives the mining cashflow produced by the mining asset (floating leg), and the miner/platform either receives cash upfront or across multiple (often equal) installments over a period of time (fixed leg).

            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="display-1 font-weight-bold">Disclaimer</v-expansion-panel-header>
            <v-expansion-panel-content>
            <span class="title-1">No Investment Advice</span>
            <p>
              The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's 
              content as such. Honeyl Lemon does not recommend that any mining contract should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
            </p>
            <span class="title-1">Accuracy of Information</span>
            <p>
              Honeylemon will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. 
              Honeylemon provides all information as is. You understand that you are using any and all information available here at your own risk.
              </p>
            </v-expansion-panel-content>
         </v-expansion-panel>
        </v-expansion-panels>
        </div>

      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  computed: {
    summary() {
      return this.$store.state.products.reduce((m, p) => {
        const summary = m.find(v => v.type === p.coin);
        if (summary) {
          summary.sellers.add(p.issuers);
          summary.maxDiscount = Math.max(summary.maxDiscount, p.expected_discount);
          summary.price = Math.min(summary.price, p.contract_cost);
          summary.coinPrice = p.btc_price;
          summary.maxPayOff = Math.max(summary.maxPayOff, p.mining_payoff);
        }

        return m;
      }, [
        {
          type: "BTC",
          coinPrice: 0,
          maxDiscount: 0,
          maxPayOff: 0,
          duration: "30Days",
          price: 99999999,
          unit: "/TH/Day",
          sellers: new Set(),
          img: require("../assets/btc-logo.png")
        },
        {
          type: "ETH",
          coinPrice: 0,
          maxDiscount: 0,
          maxPayOff: 0,
          duration: "60Days",
          price: 99999999,
          unit: "/MH/Day",
          sellers: new Set(),
          img: require("../assets/eth-logo.png")
        }
      ]);
    }
  }
};
</script>


<style scoped lang="scss">
.container {
  margin: 0;
  width: auto;
  max-width: unset;
  padding: 0;
}

.content {
  // padding-bottom: 20px;

  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    &.faq {
      padding: 0;
      background-color: white;
      @media (min-width: 500px) {
          padding: 40px 60px;
          div:last-child {
          flex: 1;
        }
      }
    }
    &.layout {
      background: #fffefa;
      box-shadow: 0px 1px 2px #888888;
      padding: 40px 20px;

       @media (max-width: 500px) {
              padding: 20px;
             }
      justify-content: center;
      .innerContent {
        display: flex;
        flex: 1;
        max-width: 1080px;
        flex-direction: column;

        .slogan:first-child {
          margin-bottom: 2rem;
          font-size: 36px;
          flex-shrink: 0;
        }

        .slogan:last-child {
          margin: 0;
          flex-shrink: 1;
        }

        @media (min-width: 300px) {
          // flex-direction: initial;
          .slogan:first-child {
            flex-grow: 1;
            font-size: 24px;
            margin-bottom: 0;
          }


          .slogan:last-child {
            margin-right: 20px;
          }
        }

        @media (min-width: 900px) {
          flex-direction: initial;
          .slogan:first-child {
            flex-grow: 1;
            font-size: 36px;
            margin-bottom: 0;
            margin-left: 10px;
          }


          .slogan:last-child {
            margin-right: 10px;
          }
        }


        @media (min-width: 1200px) {
          flex-direction: initial;
          .slogan:first-child {
            flex-grow: 1;
            font-size: 48px;
            margin-bottom: 0;
          }

          .slogan:last-child {
            margin-right: 20px;
          }
        }
        .slogan {
          /*width: 480px;*/
          > span {
            display: inline-block;
          }
          &-yellow {
            background-color: #ffe500;
            padding: 5px 10px;
            font-style: italic;
            font-weight: bold;
            line-height: 64px;
            letter-spacing: 2px;
            margin: 10px 0;
            box-shadow: 1px 2px 4px #888888;
            text-shadow: 1px 1px 1px #888888;

             @media (max-width: 500px) {
               font-size: 24px;
               line-height: 32px;
               margin-top: 10px;
             }
          }

          &-black {
            color: black;
            margin-top: 10px;
            padding: 2px 5px;
            font-size: 24px;
            font-style: italic;
            font-weight: 600;

            @media (max-width: 500px) {
               font-size: 20px;

             }
          }
        }
      }
    }

    .desc {
      margin: 10px 0 10px 0;
      font-size: 20px;
      max-width: 640px;
      @media (max-width: 500px) {
               font-size: 16px;
               margin: 10px;
             }
      &.sign_up {
          margin: 60px 0 20px 0;
      @media (max-width: 500px) {
               margin: 20px 0 10px 10px;

             }

      }
    }
  }
.discount{
  background: #ffe500;
  box-shadow: 1px 2px 4px #888888;
  color: black;
  font-weight: 600;
  font-size: 18px;
  padding: 2px 8px;


}

  .row.form {
    align-items: center;

    input {
      font-family: "Roboto", Helvetica, Arial, sans-serif;
      font-size: 20px;
      padding: 10px;
      margin-right: 10px;
      border: 1px solid black;
      border-radius: 5px;
      box-shadow: 3px 3px 3px #888888;
      flex-grow: 1;
      max-width: 25rem;
      &::placeholder {
        font-size: 20px;
      }
    }

    .btn {
      cursor: pointer;
      background-image: url("../assets/logo.png");
      background-size: 80px;
      width: 80px;
      height: 62px;
      text-align: center;
      line-height: 62px;
      font-size: 20px;
      border: 0;
      background-color: rgba(0, 0, 0, 0);
      padding: 0px;
      margin-right: 0px;
      border-radius: 0px;
      box-shadow: none;
      flex-grow: 0;
    }
  }
}
.dealData{
  //headline font-weight-medium black--text
  font-weight: 500;
  font-size: 18px;
  color: #333;
}
.coinDetailPart{

  background: #f8f8f8;
  bottom: 0;
  position: absolute;
  width: 100%;
  padding: 16px;
}

@media only screen and (max-width: 600px) {
  .deal-header
  {
    font-size: 18px !important;
  }
  .slogan{
    font-size: 18px;
  }

  .inputEmail input{
    font-size: 18px !important;
    padding: 6px;

  }
  .inputEmail .btn{
    position: absolute;
    right: 0;
  }
  .v-card--link
  {
    padding: 0 !important;
  }
  .v-card--link .ma-4
  {
    margin:4px !important;
  }
  .coinDetail{
    height: 380px !important;
    max-width: 560px;

  }
  .coinDetailPart{
    padding: 16px;
  }

}

</style>