import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
import Vuetify from 'vuetify'
import router from './router'

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
