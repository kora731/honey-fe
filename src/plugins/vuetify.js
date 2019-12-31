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
            secondary: colors.yellow.accent2,
            accent: colors.cyan.lighten4,
            error: colors.red.accent3,
            yellow: colors.yellow.darken3,
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      }
      
});