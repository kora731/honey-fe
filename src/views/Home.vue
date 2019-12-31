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
        </div>
      </div>
    </v-row>

    <v-row class="mt-10" justify="center">
      <v-col style="max-width: 1080px;">
        <div class="display-2">Discover best deals in cloud mining contracts listed across reputable platforms:</div>
      </v-col>
    </v-row>

    <v-row class="deals d-flex" justify="center">
      <v-row style="max-width: 1080px;" justify="center">
        <v-col cols="12" sm="12" md="6" lg="6" v-for="p in products" :key="p.duration">
          <v-card href="#/products" class="mx-auto" height="450" max-width="560">
            <v-card-text class="text-left">
              <v-row>
                <div class="flex-grow-1">
                  <div class="ma-4">
                    <span class="display-3 mr-4 font-weight-bold">{{p.type}}</span>
                    <v-chip
                      class="mb-3"
                      color="accent"
                      text-color="black"
                      label
                    >{{p.sellers}} Platforms</v-chip>
                  </div>
                </div>
                <div class="pr-2">
                  <v-img width="80" :src="p.img"></v-img>
                </div>
              </v-row>
              <div class="ma-4">mining contract</div>

              <v-divider></v-divider>
              <div class="ma-4">
                <v-icon class="ma-2">mdi-sale</v-icon>up to 
                <span class="discount">22% OFF</span> vs buying BTC
              </div>
              <div class="ma-4">
                <v-icon class="ma-2">mdi-tag-heart</v-icon>as low as <span class="dealData">$0.1139 / T / Day</span>
              </div>
            </v-card-text>
            <div
              style="background: #f8f8f8; bottom: 0; position: absolute; width: 100%; padding: 16px;"
            >
              <div class="ma-4">
                <v-icon class="ma-2">mdi-coin</v-icon>BTC price: <span class="dealData">$7,147.01 <span class="red--text">(-1.63%)</span> </span>
              </div>
              <div class="ma-4">
                <v-icon class="ma-2">mdi-treasure-chest</v-icon>BTC mining earnings:<span class="dealData"> $0.1388 / T / Day</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-row>

    <v-row class="faq d-flex" justify="center">
      <v-row style="max-width: 1080px;">
        <div class="display-2 mr-10">FAQ</div>
        
        <v-expansion-panels style="width:auto; flex:1; " class="mx-10">
          <v-expansion-panel v-for="(item,i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
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
          sellers: 10,
          img: require("../assets/btc-logo.png")
        },
        {
          type: "ETH",
          duration: "60Days",
          price: "0.43/TH/D",
          sellers: 8,
          img: require("../assets/eth-logo.png")
        }
      ]
    };
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
      padding: 40px 60px;
      background-color: white;
    }
    &.layout {
      background: #fffefa;
      box-shadow: 0px 1px 2px #888888;
      padding: 40px 20px;
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

        @media (min-width: 900px) {
          flex-direction: initial;
          .slogan:first-child {
            flex-grow: 1;
            font-size: 36px;
            margin-bottom: 0;
          }

          .slogan:last-child {
            margin-right: 20px;
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
          }

          &-black {
            color: black;
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
      max-width: 640px;

      &.sign_up {
        margin: 60px 0 20px 0;
      }
    }
  }
.discount{
  background: #ffff00;
  box-shadow: 1px 2px 4px #888888;
  color: black;
  font-weight: 600;
  font-size: 18px;
  padding: 2px;


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

</style>