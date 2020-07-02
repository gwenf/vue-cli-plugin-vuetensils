import Vue from 'vue'
import App from './App.vue'

<%_ if (preset === 'global') { _%>
import { VAlert } from 'vuetensils'

Vue.component('VAlert', VAlert)
<%_ } _%>

console.log('Preset <%= preset %>')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
