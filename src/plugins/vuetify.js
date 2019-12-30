import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },  
  theme: {
        themes: {
          light: {
            primary: colors.grey.darken4,
            secondary: colors.yellow.darken3,
            accent: colors.shades.blue,
            error: colors.red.accent3,
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      }
      
});