import Vue from 'vue'
import App from './App.vue'
import LegendDynamic from './components/LegendDynamic'
Vue.use(LegendDynamic)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
