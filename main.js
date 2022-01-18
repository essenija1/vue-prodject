import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import modal from './plugins/ModalWindow';
//import context from './plugins/ContextMenu';
import vuetify from './plugins/vuetify';
import apexchart from './plugins/apexchart'
import ModalButton from './components/ModalButton'



Vue.config.productionTip = false;
Vue.use(modal);
//Vue.use(context);

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify,
  apexchart,
  ModalButton
  
}).$mount('#app')
