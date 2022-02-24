import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "mutationobserver-shim";
import '@fortawesome/fontawesome-free/js/all';
import axios from 'axios';
import VueAxios from 'vue-axios';
import axios2 from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(router).use(store).use(VueAxios, { $axios: axios, axios2: axios2 }).mount('#app');
