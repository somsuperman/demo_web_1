import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Services from "../views/Services.vue";
// @ts-ignore
import AboutUs from "../views/AboutUs.vue";
// @ts-ignore
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      bodyClass: "home-test",
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.body.classList.remove("route-" + String(from.name).toLowerCase());
  document.body.classList.add("route-" + String(to.name).toLowerCase());
  next();
});

export default router;
