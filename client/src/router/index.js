import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../components/Register';
import Hello from '../components/HelloWorld';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        { path:'/', name:'Hello', component: Hello},
        { path: '/register', name: 'register', component: Register }
    ],
    mode: 'history'
})