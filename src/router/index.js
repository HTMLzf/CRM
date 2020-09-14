import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const login = () => import("../views/Login")
const routes = [
  {
    name:'login',
    path:'/login',
    component: login
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/a",
        name: "A",
        component: () => import("../components/page/A")
      },
      {
        path: "/b",
        name: "B",
        component: () => import("../components/page/B")
      },
      {
        path: "/riskAssess",
        name: "RiskAssess",
        component: () => import("../components/page/hospital/RiskAssess")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
