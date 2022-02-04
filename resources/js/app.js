import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store";
import "mutationobserver-shim";
import '@fortawesome/fontawesome-free/js/all'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Use v-calendar & v-date-picker components
createApp(App).use(router).mount('#app');
