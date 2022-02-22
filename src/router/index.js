import { createRouter, createWebHistory } from "vue-router";
import AddCity from "../views/AddCity.vue";
import Weather from "../views/WeatherView.vue";

const routes = [
  {
    path: "/weather/:city",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/",
    name: "AddCity",
    component: AddCity,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
