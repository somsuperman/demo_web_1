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
      title:
          "Your gateway to pioneering crypto solutions | UNICORN technologies",
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
    meta: {
      title: "About us | UNICORN technologies",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: {
      title: "Services | UNICORN technologiess",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact us | UNICORN technologies",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.body.classList.remove("route-" + String(from.name).toLowerCase());
  document.body.classList.add("route-" + String(to.name).toLowerCase());
  document.title = String(to.meta.title);
  window.scrollTo(0, 0);
  next();
});

export default router;
