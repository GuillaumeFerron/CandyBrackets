import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

Vue.config.productionTip = false

/**** Plugins ****/
Vue.use(VModal);
Vue.use(jsPDF);
Vue.use(html2canvas);

new Vue({
  render: h => h(App)
}).$mount('#app')
