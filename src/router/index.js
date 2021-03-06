import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewFavorite from "../views/NewFavorite.vue";
import ViewFavorites from "../views/ViewFavorites.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import ChampionsIndex from "../views/ChampionsIndex.vue";
import ItemsIndex from "../views/ItemsIndex.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/newfavorite",
    name: "newfavorite",
    component: NewFavorite,
  },
  {
    path: "/ViewFavorites",
    name: "ViewFavorites",
    component: ViewFavorites,
  },
  {
    path: "/champions",
    name: "champions",
    component: ChampionsIndex,
  },
  {
    path: "/items",
    name: "items",
    component: ItemsIndex,
  },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
