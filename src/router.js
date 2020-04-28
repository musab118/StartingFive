import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/authentication/Login.vue'
import Register from './views/authentication/Register.vue'
import BookingsAll from './views/bookings/BookingsAll.vue'
import BookingsCreate from './views/bookings/BookingsCreate.vue'
import BookingsEdit from './views/bookings/BookingsEdit.vue'
import Athletes from './views/info/Athletes.vue'

import * as auth from './services/AuthService'
// This is the Vue router page in order to manage the routing from page to page
Vue.use(Router)

// these are the routes that specify which each routes are in which file
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bookings',
      name: 'bookings-all',
      component: BookingsAll,
      beforeEnter: (to, from, next) => {
        // This ensures that the user must be logged in order to view the specific navbar tabs. this is called a Navgaurd
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/bookings/new',
      name: 'bookings-create',
      component: BookingsCreate,
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/info/athletes',
      name: 'athletes',
      component: Athletes
    },
   
    {
      path: '/bookings/:id',
      name: 'bookings-edit',
      component: BookingsEdit,
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next('/');
        }
      }
    },

    {
      path: '*',
      redirect: '/'
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
