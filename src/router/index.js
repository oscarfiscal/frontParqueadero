import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Consulta from "@/views/Consulta";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Buscar",
    name: "Buscar",
    component: Consulta,
  },
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
