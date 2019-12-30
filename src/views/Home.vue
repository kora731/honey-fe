<template>
  <v-container class="content">
    <v-row class="layout">
      <v-col class="col slogan pl-10" cols="6" sm="12" lg="6">
        <span class="yellow">SWEET DEALS</span>
        <br />
        <span class="yellow">IN CRYPTO</span>
        <br />
        <span class="yellow">MINING</span>
        <br />
        
      </v-col>
      <v-col class="col slogan" cols="6" sm="12" lg="6">
          <span class="black">BEST PRICE x OBJECTIVE METRICS</span>
          <form
            action="https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&amp;id=2f33950de0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div class="desc">
              We aggregate and rate existing cloud mining contracts, for transparency, standardization and price discovery.
              </div>
            <div class="desc sign_up">Sign up for fresh updates & never miss a juicy deal.</div>

            <div class="row form">
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_466b3785cad82e2db6271ffcc_2f33950de0"
                  tabindex="-1"
                  value
                />
              </div>
              <label for="email" style="display: none;">email</label>
              <input id="email" name="EMAIL" type="email" placeholder="Enter email address" />
              <input type="submit" class="btn" value="GO" />
            </div>
          </form>
      </v-col>
    </v-row>

    <v-row class="d-block ma-10 pa-10">
      <div class="display-2">Honey Lemon -> Cryptocurrancy Mining
         </div>
      <div class="headline">Discover best deals in cloud mining contracts listed across reputable platforms:
         </div>
    </v-row>
    
    <v-row class="deals">
      <v-col
        class="text-center"
        cols="6"
        sm="12"
        md="6"
        lg="6"
        v-for="p in products"
        :key="p.duration"
      >
        <v-card href="#/products"
          class="mx-auto"
          height="360"
          max-width="480"
        >
          <v-card-text class="text-left">
            <div class="display-2 ma-4">{{p.type}}</div>
            <div class="ma-4">mining contract</div>
             <div class="ma-4">{{p.sellers}} Platforms</div>
            <v-divider></v-divider>
            <div class="ma-4"><v-icon>mdi-sale</v-icon> up to 22% OFF vs buying BTC</div>
            <div class="ma-4"><v-icon>mdi-tag-heart</v-icon>as low as $0.1139 / T / Day</div>
            <div class="ma-4"><v-icon>mdi-coin</v-icon>BTC price: $7,147.01 (-1.63%)</div>
            <div class="ma-4"><v-icon>mdi-treasure-chest</v-icon>BTC mining earnings: $0.1388 / T / Day</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="row faq">
      
      <h2>FAQ</h2>
    
    </v-row>
   
  </v-container>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      products: [
        {
          type: "BTC",
          duration: "30Days",
          price: "0.45/TH/D",
          sellers: 10
        },
        {
          type: "ETH",
          duration: "60Days",
          price: "0.43/TH/D",
          sellers: 8
        },

      ]
    };
  }
};
</script>


<style scoped lang="scss">
.container
{
  margin: 0;
  max-width: unset;
  padding: 0;
}

.content {
  padding-bottom: 20px;
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

      &.deals, &.faq {
      padding: 40px 60px;

    }
   &.layout {
    /*max-width: 1100px;*/
    justify-content: space-around;
    align-items: flex-start;
    background: #FFFEFA;
    box-shadow: 0px 1px 2px #888888;
    padding: 40px 60px;
    .slogan {
      /*width: 480px;*/
      > span {
        display: inline-block;

        &.yellow {
          background-color: #fef807;
          padding: 5px 10px;
          font-size: 44px;
          margin: 10px 0;
          box-shadow: 5px 5px 5px #888888;
          text-shadow: 2px 2px 2px #888888;
        }

        &.black {
          background-color: black;
          color: #fff;
          margin-top: 10px;
          padding: 2px 5px;
          font-size: 24px;
          font-style: italic;
          font-weight: 600;
        }
      }
    }
      
  }

 

    .desc {
      margin: 10px 0 10px 0;
      font-size: 20px;
      max-width: 527px;

      &.sign_up {
        margin: 60px 0 20px 0;
      }
    }
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

@media screen and (min-height: 750px) {
  .content {
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 980px) {
  .content {
    margin: 60px 15px 0 15px;

    .row.layout {
      .black {
        margin-top: 10px !important;
      }

      .desc.sign_up {
        margin: 20px 0;
      }
    }
  }
}
</style>