import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/*webpackChunkName: "Dashboard" */'../views/Dashboard.vue'),
    
  },
  {
  path: "/dashboard/:page",
  name: "dashboard",
  component: () => import(/*webpackChunkName: "Dashboard" */'../views/Dashboard.vue'),
  },
{
  path: "/about",
    name: "about",
    component: () => import(/*webpackChunkName: "About" */'../views/About.vue'),
  },
{
  path: '/notfound',
    name: 'notfoundt',
    component: () => import(/*webpackChunkName: "NotFound" */'../views/NotFound.vue'),
  },
{
  path: "*",
  component: () => import(/*webpackChunkName: "NotFound" */'../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const userAuth = true;


router.beforeEach((to, from, next) => {
  if (to.name !== 'notfound' && !userAuth) {
    next({
      name: "notfound"
    });
  } else {
    next();
  }
});
const getTitleByRoutes = routeName => {
  return{
    'dashboard': "Ура, у нас ест страница наших трат",
    'about': "Страница о сервисе",
    'notfound': "Страница не найдена"
  }[routeName];
};
router.afterEach((to)=>{
  document.title = getTitleByRoutes(to.name)
});
export default router;
