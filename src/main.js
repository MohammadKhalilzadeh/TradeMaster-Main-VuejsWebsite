import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import VueJwtDecode from "vue-jwt-decode";

require("dotenv").config();

Vue.config.productionTip = false;

new Vue({
  VueJwtDecode,
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
