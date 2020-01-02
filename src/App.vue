<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn href="#/" text>
          <v-img
            alt="Honey Lemon Logo"
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
      <v-btn v-for="[name, url] of navItems" :key="url" :href="url" text>
        <span class="mr-2" :class="{ 'nav-active': '#' + $route.path === url }">{{name}}</span>
      </v-btn>
    </v-app-bar>


    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary" dark>
      <v-spacer></v-spacer>
      <v-card  color="primary" dark
      flat
        tile
        width="100%"
        class="text-right">
        <v-card-text class="white--text">
          Honey Lemon &copy;{{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
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

<style>
.nav-active{
  border-bottom: 3px solid #ffe500;
  padding: 6px;
}

.nav-active:hover {
  border-bottom: 3px solid #ffe500;
  padding: 6px;
}
</style>