<template>
<v-container class="mt-10">
   <v-row class="faq d-flex" justify="center">
      <v-row style="max-width: 1280px;">
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
