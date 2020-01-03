<template>
<v-container class="mt-10">
   <v-row class="faq d-flex" justify="center">
      <v-row style="flex-direction:column;">
        <div class="display-2" style="margin-left:40px; margin-bottom:20px;">FAQ</div>
        
        <v-expansion-panels class="faq-layout" 
          v-model="panel"
          multiple>
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
            <p>According to <a href="https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" target="_blank">FinCEN</a>, “persons (contract purchasers) may 
            purchase “mining contracts” from a seller of computer processing (the cloud miner) that grants these purchasers permission to use the cloud miner’s computers to mine CVCs on the purchaser’s behalf.”</p>
            <p>Cloud mining contracts can be commonly classified into two types: termed contracts with fixed duration such as 180 days or 1 year contract, and “lifetime” contracts that terminate 
              after the mining earnings falls below electricity cost.</p>
            <p>The investor of cloud mining contracts and the miner/platform issuing these contracts are essentially exchanging a cashflow swap: investor receives the mining cashflow produced by the mining asset 
              (floating leg), and the miner/platform either receives cash upfront or across multiple (often equal) installments over a period of time (fixed leg).</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="display-1 font-weight-bold">Disclaimer</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p>
              The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's 
              content as such. Honeyl Lemon does not recommend that any mining contract should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
            </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="display-1 font-weight-bold">Accuracy of Information</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p>
              Honeylemon will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. 
              Honeylemon provides all information as is. You understand that you are using any and all information available here at your own risk.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      panel: [0]
    };
  }
};
</script>

<style scoped lang="scss">

     .faq-layout{
       width:auto; 
       flex:1;
       margin: 0 20px;
     }
  .faq{  

    // margin-right: 40px;

     @media (max-width: 500px) {
          padding:0;
          flex-direction: row;
          div:last-child {
          flex: 1;
        }

    margin-right:0;
      }

  }
    @media (max-width: 500px) {
         .title
         {
           margin-right: 0 !important;
         }
    
    }

</style>