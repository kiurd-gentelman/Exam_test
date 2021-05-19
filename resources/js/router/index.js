import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Activity from '../pages/Activity.vue'
import Home from '../pages/Home';
import Assignment from '../pages/Assignment';

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass : 'active',
    routes : [
        {
            path :'/',
            component :Login,
            name:'login'
        },
        {
            path :'/dashboard',
            component :Dashboard,
            name:'dashboard',

        },
        {
            path :'/assignment',
            component :Assignment,
            name:'assignment',
            redirect:{path:'/assignment/home'},
            children:[
                { path: 'home', component: Home , name:'home' },
            ]
        },

    ]
});




export default routes;
