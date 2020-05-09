import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueTyperPlugin from 'vue-typer'
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";
import LightTimeline from "vue-light-timeline";
import VueAnalytics from 'vue-analytics';

Vue.use(LightTimeline);
Vue.use(VueTyperPlugin)

Vue.use(VueAnalytics,{id: 'UA-165928982-1' , router})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
