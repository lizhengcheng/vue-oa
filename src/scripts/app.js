import Vue from 'vue';

import router from '../routes';

import store from './app.store';

// load style
require('../styles/app.less');

Vue.config.productionTip = false;

Vue.use(store);

new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view />'
});
