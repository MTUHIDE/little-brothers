import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "mutationobserver-shim";
import '@fortawesome/fontawesome-free/js/all'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import VCalendar from 'v-calendar';


createApp(App).use(router).mount('#app');
