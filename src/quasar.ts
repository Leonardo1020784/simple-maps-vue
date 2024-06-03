// src/quasar.ts
import { App } from "vue";
import { Quasar } from "quasar";
import "quasar/dist/quasar.css";

export default {
  install(app: App) {
    app.use(Quasar, {
      plugins: {},
    });
  },
};
