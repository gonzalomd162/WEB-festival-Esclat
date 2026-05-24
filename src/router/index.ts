import { createRouter, createWebHistory } from "vue-router";
import Cartelera from "@/paginae/Cartelera.vue";
import Home from "@/paginae/Home.vue";
import SobreFestival from "@/paginae/SobreFestival.vue";
import Tickets from "@/paginae/Tickets.vue";
import Ubicacio from "@/paginae/Ubicacio.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/tickets",
      name: "tickets",
      component: Tickets,
    },
    {
      path: "/cartelera",
      name: "cartelera",
      component: Cartelera,
    },
    {
      path: "/sobre-el-festival",
      name: "sobre-el-festival",
      component: SobreFestival,
    },
    {
      path: "/ubicacio",
      name: "ubicacio",
      component: Ubicacio,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
