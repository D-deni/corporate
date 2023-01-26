import { createWebHistory, createRouter } from "vue-router";
import index from "../pages/index.vue";
import SignIn from "../pages/SignInPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
      children: [],
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
    },
  ],
});

export default router;
