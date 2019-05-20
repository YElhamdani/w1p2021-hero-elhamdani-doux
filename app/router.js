import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    }
  ],
});

export default router;

