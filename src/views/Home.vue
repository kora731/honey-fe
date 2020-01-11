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
              <input type="submit" class="btn" value="GO!" />
            </div>
          </form>
        </div>
      </div>
    </v-row>

    <v-row class="mt-10 dealContainer" justify="center">
      <v-col style="max-width: 1080px; text-align:center">
        <div class="display-2 deal-header">Discover best deals in cloud mining contracts listed across reputable platforms:</div>
      </v-col>
    </v-row>

    <v-row class="deals d-flex mb-10" justify="center">
      <v-row style="max-width: 1080px;" justify="center">

          <v-tabs
          :centered="true"
          >
            <v-tab>BTC</v-tab>
            <v-tab>ETH</v-tab>
            <v-tab>BCH</v-tab>
          
            <v-tab-item>
               <v-row class="mx-4 mt-4 d-flex" justify="center">
                        <div class="mx-4">BTC price: </div>
                        <div class="mx-4">BTC mining earnings: </div>
                    </v-row>
                <div>Lvzi to add the 6 product cards here from different duration categories</div>
            </v-tab-item>
             <v-tab-item>
                <v-row class="mx-4 mt-4 d-flex" justify="center">
                        <div class="mx-4">ETH price: </div>
                        <div class="mx-4">ETH mining earnings: </div>
                    </v-row>
                <div>Lvzi to add the 6 product cards here from different duration categories</div>
            </v-tab-item>
            <v-tab-item>
                  <v-row class="mx-4 mt-4 d-flex" justify="center">
                        <div class="mx-4">BCH price: </div>
                        <div class="mx-4">BCH mining earnings: </div>
                    </v-row>
                <div>Lvzi to add the 6 product cards here from different duration categories</div>
            </v-tab-item>
         

          </v-tabs>

         
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
            <v-expansion-panel-header class="display-1 font-weight-bold">How are the HoneyLemon mining contract metrics calculated?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <span class="title-1 font-weight-bold">% off discount</span>
            <p>
              Discount calculated as the cost of buying BTC or ETH compared to BTC or ETH earned via buying the cloud mining contract. The BTC or ETH earned via contract is calculated 
              based on static projection of theoretical mining payoff given network difficulty and coin price at the moment
            </p>
            <span class="title-1 font-weight-bold">Contract cost</span>
            <p>
             Sum of upfront fees and present value of expected future cashflow earned over duration of the contract, discounted with CeFi/DeFi interest rate (See Messari), divided into unit cost 
             (BTC: $ per Th per Day, or ETH: $ per Mh per Day)
              </p>
            <span class="title-1 font-weight-bold">Today’s mining income</span>
            <p>
             Sometimes called theoretical mining yield, is the actual mining income in the past 24 hours (BTC: $ per Th per Day, or ETH: $ per Mh per Day). 
             This estimate of mining income assumes current difficulty and price (Source: btc.com and sparkpool.com).
              </p>
            <span class="title-1 font-weight-bold">Upfront fee</span>
            <p>
            Sometimes called hashrate fee or contract fee, is the fee an investor needs to pay upfront in order to receive mining payoffs.
              </p>
              <span class="title-1 font-weight-bold">Additional daily fee</span>
            <p>
            Sometimes called electricity or maintenance fee, is the additional daily fee consists of several costs including but not limited to mining's electricity fee, 
            mining farm maintenance, heat dissipation, operation and maintenance for miners etc.
              </p>
                <span class="title-1 font-weight-bold">Today's mining earnings:</span>
            <p>
            Theoretical Output from BTC.com for BTC, sparkpool.com for ETH.
              </p>
        
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
  data () {
      return {
       
      }
    },

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
          unit: "/Th/Day",
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
          unit: "/Mh/Day",
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
               font-size: 18px;
               padding: 0
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
               margin: 10px 0;
             }
      &.sign_up {
          margin: 60px 0 20px 0;
      @media (max-width: 500px) {
               margin: 20px 0 10px 0;

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
      margin-right: 0;
      border: 1px solid black;
      border-radius: 5px;
      
      flex-grow: 1;
      max-width: 25rem;
      &::placeholder {
        font-size: 20px;
      }
    }

    .btn {
      cursor: pointer;
      //background-image: url("../assets/logo.png");
      margin-left: -8px;
      width: 64px;
      height: 52px;
      text-align: center;
      line-height: 48px;
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
      border: 0;
      background-color: rgba(0, 0, 0, 1);
      box-shadow: 3px 3px 3px #888888;
      color: white;
      padding: 0px;
      margin-right: 0px;
      border-radius: 5px;
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
.dealDataEarning
  {
    display: block;
    margin-left: 40px;
  }


@media only screen and (max-width: 600px) {
  .deal-header
  {
    font-size: 16px !important;
  }
  .slogan{
    font-size: 18px;
  }

  .inputEmail input{
    font-size: 18px !important;
    padding: 6px;

  }
  .inputEmail{
    width: 300px;
  }
  .inputEmail .btn{
    position: absolute;
    right: 20px;
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
  
  .dealContainer{
    margin-top: 20px !important;
    padding: 0 12px;
  }
  .dealSource
  {
    display: block;
    margin-left: 40px;
  }

  .mdi-help-circle-outline{
    display: none;
  }
  .coinLogo{
    width:50px !important;
  }
  .platformChip
  {
    padding: 4px;
    height: 24px;
  }
}
@media only screen and (max-width: 400px)
{
  .inputEmail{
    width: 240px;
  }
  .inputEmail .btn{
    position: absolute;
    right: 30px;
  }
}

</style>