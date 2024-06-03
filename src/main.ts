import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import quasar from "./quasar";

createApp(App).use(store).use(quasar).use(router).mount("#app");
