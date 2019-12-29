<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn href="#/" text>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/hl-logo.svg"
            transition="scale-transition"
            width="40"
          />

          <span class="mr-2">Honey Lemon</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="#/" text>
        <span class="mr-2">HOME</span>
      </v-btn>
       <v-btn href="#/products" text>
        <span class="mr-2">DEALS</span>
      </v-btn>
       <v-btn href="#/about" text>
        <span class="mr-2">FAQ</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
