import Vue              from 'vue';
import VueResource      from 'vue-resource';
import VueRouter        from 'vue-router';
import App              from './App.vue';

import style            from './style.scss';
import MainNav          from './components/main-nav';
import routes           from './routes.js';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.http.options.root = 'http://localhost:3000';

const app = new Vue({
  router,
  components: {
    'App':  App,
  },
  render: h => h(App)
}).$mount('#app')