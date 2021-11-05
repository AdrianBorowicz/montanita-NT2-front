import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './Store.js'
//import axios from 'axios';

createApp(App).use(router).use(store).mount("#app");
