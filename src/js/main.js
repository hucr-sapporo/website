import Vue from 'vue';
import App from '/App.vue';
import router from './router';
import store from './store'
import VueTouch from 'vue-touch';

Vue.use(VueTouch, {name: 'v-touch'});

Vue.config.productionTip = false;

// delayed css
// const delaycss = document.createElement('link');
// delaycss.rel = 'stylesheet';
// delaycss.href = 'https://use.fontawesome.com/releases/v5.8.1/css/all.css';
// document.head.appendChild(delaycss);

new Vue({
  router,
  render:h => h(App)
}).$mount('#app');

