import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueMaterial from 'vue-material';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueMaterial);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    //key: `${process.env.MAP_KEY}`,
    key: `${process.env.MAP_KEY}`,
    libraries: 'Sri Lanka',
  }
});

require('@/assets/style.scss')
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
