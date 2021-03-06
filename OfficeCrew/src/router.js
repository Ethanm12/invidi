
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: require('./pages/Home.vue').default },
        { path: '*', redirect: '/'},
        { path: '**', redirect: '/'}
    ]
  });
}