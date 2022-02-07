import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg,   ,mdiSvg, md, fa, fa4, faSvg",
  },
});
