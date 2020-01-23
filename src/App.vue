<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn href="#/" text class="hlHeader">
          <v-img
            alt="Honey Lemon Logo"
            class="shrink mr-2"
            contain
            src="./assets/hl-logo.png"
            transition="scale-transition"
            width="36"
          />

          <span class="mr-2 hlLogo">Honey Lemon</span>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-for="[name, url] of navItems" :key="url" :href="url" text>
        <span class="mr-2" :class="{ 'nav-active': '#' + $route.path === url }">{{name}}</span>
      </v-btn>
    </v-app-bar>


    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary" dark class="footer-space white--text"> 
  
        <div>
          Honey Lemon &copy;{{ new Date().getFullYear() }}
        </div>
        <a class="mx-4 white--text" href="#/about" style="text-decoration:none;"> 
          Disclaimer
          </a>

      <v-spacer></v-spacer>
     
      <div class="footer-social">
            <a href="mailto:yours@honeylemon.market" target="_top" class="white--text mr-1" style="text-decoration:none;"><v-icon class="ma-2 white--text display-1">mdi-email</v-icon></a>
            <a href="https://twitter.com/HoneylemonM" target="_blank"><v-icon class="ma-2 white--text display-1">mdi-twitter</v-icon></a>
            <a href="https://t.me/joinchat/HD_sbVF5xOzoBZNuIcDlqQ" target="_blank"><v-icon class="ma-2 white--text display-1">mdi-telegram</v-icon></a>

      </div>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  beforeMount() {
    this.$store.dispatch('init');
  },

  data: () => ({
    navItems: [
      ['HOME', '#/'],
      ['DEALS', '#/products'],
      ['FAQ', '#/about']
    ]
  })
};
</script>

<style lang="scss">


.nav-active{
  border-bottom: 3px solid #ffe500;
  padding: 6px;

}

.nav-active:hover {
  border-bottom: 3px solid #ffe500;
  padding: 6px;
}

.footer-space
{
  padding-left: 40px;
  padding-right: 40px;
}

@media only screen and (max-width: 500px) {
  .v-toolbar__content
  {
    .hlLogo
    {
      display: none;
    }
    .v-btn{
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    *:nth-child(3) {
      display: none !important;
    }

  }
  .hlHeader
  {
    padding:0px !important;
  }
  .footer-social{
    margin-left: 25%;
  }
  .footer-space
  {
    padding-left: 60px !important;
   
  }
}
</style>