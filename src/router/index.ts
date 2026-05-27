import { createRouter, createWebHistory } from "vue-router";
import Cartelera from "@/components/paginae/Cartelera.vue";
import Home from "@/components/paginae/Home.vue";
import SobreFestival from "@/components/paginae/SobreFestival.vue";
import Tickets from "@/components/paginae/Tickets.vue";
import Ubicacio from "@/components/paginae/Ubicacio.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Home,
      meta: { title: "Inicio" },
    },
    {
      path: "/entradas",
      name: "entradas",
      component: Tickets,
      meta: { title: "Entradas" },
    },
    {
      path: "/cartelera",
      name: "cartelera",
      component: Cartelera,
      meta: { title: "Cartelera" },
    },
    {
      path: "/sobre-el-festival",
      name: "sobre-el-festival",
      component: SobreFestival,
      meta: { title: "Sobre el festival" },
    },
    {
      path: "/ubicacion",
      name: "ubicacion",
      component: Ubicacio,
      meta: { title: "Ubicacion" },
    },
    {
      path: "/tickets",
      redirect: "/entradas",
    },
    {
      path: "/ubicacio",
      redirect: "/ubicacion",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

router.afterEach((to) => {
  const pageTitle =
    typeof to.meta.title === "string" ? `${to.meta.title} | Esclat` : "Esclat";

  document.title = pageTitle;
});
