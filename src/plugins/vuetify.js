import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  customProperties: true,
  iconfont: 'mdi',
  theme: {
    primary: colors.blue.darken1,
    secondary: colors.cyan.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
