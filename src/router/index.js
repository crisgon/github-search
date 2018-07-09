import Vue from 'vue';
import Router from 'vue-router';
import AllUsers from '@/components/AllUsers/AllUsers';
import AllRepositories from '@/components/AllRepositories/AllRepositories';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gituhub-users',
      component: AllUsers,
    },
    {
      path: '/repositories',
      name: 'repositories',
      component: AllRepositories,
    },
  ],
});
