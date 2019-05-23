import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Character from './components/Character.vue';
import Game from './components/Game.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose.vue';
import Rules from './components/Rules.vue';
import Credit from './components/Credit.vue' 
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
      path: '/rules',
      name: 'rules',
      component: Rules,
    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    }
  ],
});

export default router;

