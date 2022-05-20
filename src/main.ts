import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import naive from "./components/naive-ui";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(naive);

app.mount("#app");
