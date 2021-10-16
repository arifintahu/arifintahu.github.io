import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/view.vue';
import ProjectDetail from '@/views/ProjectDetail/view.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project/:index/:view',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: true
    }
  ]
});
