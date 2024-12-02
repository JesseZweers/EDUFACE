import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import StandaloneLayout from '@/layouts/StandaloneLayout.vue';
import JobPage from '@/components/JobPage.vue';
import JobList from '@/components/JobList.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'JobPage',
        component: JobPage,
      },
    ],
  },
  {
    path: '/job-list',
    component: StandaloneLayout,
    children: [
      {
        path: '',
        name: 'JobList',
        component: JobList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
