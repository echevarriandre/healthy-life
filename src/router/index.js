import { createRouter, createWebHistory } from "vue-router";
import AdviceView from "../views/AdviceView.vue";
import CalendarView from "../views/CalendarView.vue";
import EventsView from "../views/EventsView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/dicas",
      name: "advice",
      component: AdviceView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        guestOnly: true,
      },
    },
  ],
});

router.beforeEach((to) => {
  const user = localStorage.getItem("user");
  if (to.meta.requiresAuth && !user) {
    return { path: "/" };
  }

  if (to.meta.guestOnly && user) {
    return { path: "/" };
  }
});

export default router;
