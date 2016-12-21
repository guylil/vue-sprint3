import Vue              from 'vue';
import VueRouter        from 'vue-router';

import style            from './style.scss';
import App              from './App.vue';
import MainNav          from './components/main-nav';
import routes           from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'App':  App,
  },
  render: h => h(App)
}).$mount('#app')