import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RulesView from '../views/RulesView.vue';
import CodexView from '../views/CodexView.vue';
import SkillsView from '../views/SkillsView.vue';
import TraitsView from '../views/TraitsView.vue';

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/reglas',
    name: 'Rules',
    component: RulesView,
  },
  {
    path: '/codex',
    name: 'Codex',
    component: CodexView,
  },
  {
    path: '/habilidades',
    name: 'Skills',
    component: SkillsView,
  },
  {
    path: '/rasgos',
    name: 'Traits',
    component: TraitsView,
  },
];

const router = createRouter({
  history: createWebHashHistory('/ocw/dist/'),
  routes,
  linkActiveClass: 'bg-gray-200 dark:bg-gray-700'
});

export default router;