import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Characters from '../views/Characters.vue';
import Skills from '../views/Skills.vue';
import Combos from '../views/Combos.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/characters',
    component: Characters,
  },
  {
    path: '/characters/:charName',
    component: Characters,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/skills/:skillName',
    component: Skills,
  },
  {
    path: '/combos',
    name: 'Combos',
    component: Combos,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,

});

export default router;
