<template>
  <v-container class="content">
    <v-row class="layout">
      <div class="innerContent">
        <div class="slogan mr-4">
          <span class="slogan-yellow">THE LEMON DILEMMA</span>
          <br />
          <span class="slogan-yellow"> IN CLOUD MINING?</span>
          <br />
         
        </div>
        <div class="slogan">
        
           <div class="desc mt-4">We aggregate and rate available mining contracts,<br/> for transparency, standardization, price discovery.</div>
          <v-btn color="black" to="/products" class="home-cta"><span class="white--text">GET SWEET DEALS</span><v-img src="../assets/deals.png" max-height="28px" max-width="96px" contain></v-img></v-btn>
        </div>
      </div>
    </v-row>

    <v-row class="pt-10 dealContainer" justify="center" style="background: #FFFCDF;">
      <v-col style="max-width: 1080px; text-align:center">
        <div class="display-2 deal-header">
          Discover the best prices across major cloud mining platforms
        </div>
      </v-col>
    </v-row>

    <v-row class="deals" justify="center"  style="background: #FFFCDF;">
      <summary-table style="margin: 0 auto; max-width: 1080px;" />
    </v-row>

    <v-row justify="center">
      <v-col style="max-width: 1080px;">
        <!-- <v-row justify="center">
          <v-btn color="#ffe500" class="ma-4"><span class="black--text">Download</span></v-btn>
          <v-btn color="#ffe500" class="ma-4"><span class="black--text">Share</span></v-btn>
        </v-row> -->

        <v-row justify="center" class="mb-10">
          <form
                  action="https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&id=2f33950de0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate mt-10"
                  target="_blank"
                  novalidate
          >

            <div class="desc sign_up">Sign up for fresh updates and juicy analytics.</div>
            <div class="row form inputEmail">
              <input id="email" name="EMAIL" type="email" placeholder="Enter email address" />
              <input type="submit" class="btn btnGo" value="GO!" />
            </div>
          </form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SummaryTable from "../components/SummaryTable";

export default {
  name: "home",
  components: { SummaryTable }
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

        @media (min-width: 700px) {
          flex-direction: initial;
          .slogan:first-child {
            flex-grow: 1;
            font-size: 28px;
            margin-bottom: 0;
            margin-left: 10px;
          }

          .slogan:last-child {
            margin-right: 10px;
          }
        }

        @media (min-width: 1080px) {
          flex-direction: initial;
          .slogan:first-child {
            flex-grow: 1;
            font-size: 30px;
            margin-bottom: 0;
          }

          .slogan:last-child {
            margin-right: 20px;
            flex-grow: 1;
          }
        }
        .slogan {
          /*width: 480px;*/
          > span {
            display: inline-block;
          }
          &-yellow {
            background-color: #ffe500;
            padding: 0 10px;
            font-style: italic;
            font-weight: bold;
            line-height: 64px;
            letter-spacing: 2px;
            margin: 10px 30px;
            box-shadow: 1px 2px 4px #888888;
            text-shadow: 1px 1px 1px #888888;

            @media (max-width: 500px) {
              font-size: 20px;
              line-height: 32px;
              margin: 0;
              margin-top: 10px;
              
            }
          }

          &-black {
            color: black;
            margin-top: 10px;
            padding: 2px 5px;
            font-size: 24px;
            font-weight: 600;

            @media (max-width: 500px) {
              font-size: 18px;
              padding: 0;
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
        margin: 40px 0 20px 0;
        @media (max-width: 900px) {
          margin: 20px 0 10px 0;
        }
      }
    }
  }
  .discount {
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
      height: 50px;
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
      height: 50px;
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
      border-radius: 0 5px 5px 0;
      box-shadow: none;
      flex-grow: 0;
    }
  }
}
.home-cta{
    border-radius: 6px;
    border: 3px solid #ffe500 !important;
}

.dealData {
  //headline font-weight-medium black--text
  font-weight: 500;
  font-size: 18px;
  color: #333;
}
.coinDetailPart {
  background: #f8f8f8;
  bottom: 0;
  position: absolute;
  width: 100%;
  padding: 16px;
}
.dealDataEarning {
  display: block;
  margin-left: 40px;
}
.deal-header {
  font-size: 24px !important;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .deal-header {
    font-size: 16px !important;
  }
  .slogan {
    font-size: 18px;
  }

  .inputEmail input {
    font-size: 18px !important;
    padding: 6px;
  }
  .inputEmail {
    width: 300px;
  }
  .inputEmail .btn {
    position: absolute;
    right: 20px;
  }
  .v-card--link {
    padding: 0 !important;
  }
  .v-card--link .ma-4 {
    margin: 4px !important;
  }
  .coinDetail {
    height: 380px !important;
    max-width: 560px;
  }
  .coinDetailPart {
    padding: 16px;
  }

  .dealContainer {
    margin-top: 20px !important;
    padding: 0 12px;
  }
  .dealSource {
    display: block;
    margin-left: 40px;
  }

  .mdi-help-circle-outline {
    display: none;
  }
  .coinLogo {
    width: 50px !important;
  }
  .platformChip {
    padding: 4px;
    height: 24px;
  }
}
@media only screen and (max-width: 400px) {
  .inputEmail {
    width: 280px;
  }
  .inputEmail .btn {
    position: absolute;
    right: 30px;
  }
}

</style>