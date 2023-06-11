import { createRouter, createWebHistory } from "vue-router";
import AdviceView from "../views/AdviceView.vue";
import CalendarView from "../views/CalendarView.vue";
import EventsView from "../views/EventsView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/agenda",
      name: "schedule",
      component: CalendarView,
    },
    {
      path: "/eventos",
      name: "events",
      component: EventsView,
    },
    {
      path: "/dicas",
      name: "advice",
      component: AdviceView,
    },
  ],
});

export default router;
