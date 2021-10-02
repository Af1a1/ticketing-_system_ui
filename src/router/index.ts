import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import HelloWorld from '../components/HelloWorld.vue';
import auth from '../auth';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HelloWorld,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.checkAuth()) {
      next({
        name: 'Login',
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
