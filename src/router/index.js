import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../views/HomeView.vue'
import UserView from "@/views/UserView.vue";
import ProView from "@/views/ProView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ConditionsView from "@/views/ConditionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/user/:UserHealthLink",
      name: "User",
      component: UserView
    },
    {
      path: "/pro",
      name: "Pro",
      component: ProView
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView
    },
    {
      path: "/conditions",
      name: "Conditions",
      component: ConditionsView
    },
  ]
})

export default router