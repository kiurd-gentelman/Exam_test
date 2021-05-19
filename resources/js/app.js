import Vue from 'vue'
require('./bootstrap');

import VueRouter from 'vue-router';
import  routes from './router/index.js'

// import VueDatePicker from '@mathieustan/vue-datepicker';
// import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';

// Vue.use(VueDatePicker);

Vue.use(VueRouter);


// Vue.component('header-component', require('./components/ExampleComponent.vue').default);
// Vue.component('footer-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-component', require('./pages/Login.vue').default);



const app = new Vue({
    el: '#app',
    router: routes,
});
