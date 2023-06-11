import { setDefaultOptions } from "date-fns";
import { pt } from "date-fns/locale";
import { createPinia } from "pinia";
import { createApp } from "vue";
import "./assets/base.css";

setDefaultOptions({ locale: pt });

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
