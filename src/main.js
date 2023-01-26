import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./style/app.css";
import Aos from "aos-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import store from './store'



const app = createApp(App);
app.use(router);
app.use(VueAwesomeSwiper);
app.use(Aos);
app.use(store);
app.mount("#app");
