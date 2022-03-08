import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import firebase from "firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/product",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/testimony",
      name: "Testimony",
      component: () => import("../views/TestimonyView.vue"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/upload",
      name: "Upload",
      // route level code-splitting
      // this generates a separate chunk (testimony.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/uploadView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      alert("it ain't that easy, punk");
      next({
        path: "/admin",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
