import * as VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import SignIn from "./pages/SignIn.vue";
import Menu from "./pages/Menu.vue";
import CreateProduct from "./pages/CreateProduct.vue";
import EditProduct from "./pages/EditProduct.vue";

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/entrar", component: SignIn },
    { path: "/cardapio", component: Menu },
    { path: "/cardapio/criar", component: CreateProduct },
    { path: "/cardapio/:productId/editar", component: EditProduct },
  ],
});
