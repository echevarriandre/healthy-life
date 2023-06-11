import axios from "axios";
import { setDefaultOptions } from "date-fns";
import { pt } from "date-fns/locale";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import router from "./router";

setDefaultOptions({ locale: pt });

axios.post(import.meta.env.VITE_PIPEDREAM_URL).then((response) => {
  localStorage.setItem("calendly_token", response.data.token);
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
