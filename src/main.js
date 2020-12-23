import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import "./index.css";
import vuetify from './plugins/vuetify';

Vue.use(VueResource);

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
