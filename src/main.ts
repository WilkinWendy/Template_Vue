import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { pluginCenter } from "./plugins";

Vue.use(new pluginCenter());

Vue.config.productionTip = false;

new Vue({
  store,
  router: router.instance,
  render: h => h(App)
}).$mount("#app");
