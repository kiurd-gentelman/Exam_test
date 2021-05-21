import Vue from 'vue'
require('./bootstrap');
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import VueRouter from 'vue-router';
import  routes from './router/index.js'


Vue.use(VueRouter);

//toster
import CxltToastr from 'cxlt-vue2-toastr'
var toastrConfigs = {
    position: 'top right',
    showDuration: 5000,
    timeOut : 5000,
    closeButton: true

}
Vue.use(CxltToastr, toastrConfigs)


// Vue.component('header-component', require('./components/ExampleComponent.vue').default);
// Vue.component('footer-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-component', require('./pages/Login.vue').default);



const app = new Vue({
    el: '#app',
    router: routes,
});
