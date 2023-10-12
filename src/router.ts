import * as VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import SignIn from "./pages/SignIn.vue";

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/entrar", component: SignIn },
  ],
});