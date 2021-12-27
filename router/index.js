import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
  path: "/dashboard/:page",
  name: "dashboard",
  component: Dashboard,
  },
{
  path: "/About",
    name: "about",
      component: About,
  },
{
  path: '/NotFound',
    name: 'notfoundt',
      component: NotFound,
  },
{
  path: "*",
    component: NotFound,
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
