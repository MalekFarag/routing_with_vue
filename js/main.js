import splashPage from './modules/splashPage.js';
import appPage from './modules/appPage.js';
import errorPage from './modules/errorPage.js';


const router = new VueRouter({
    routes: [
        {path: '/', name: 'splash', component: splashPage},
        {path: '/app', name: 'app', component: appPage},
        {path: '*', name: 'error', component: errorPage}
    ]
})

const vm = new Vue({
    data: {

    },

    created: function(){
        console.log('app is running');
    },

    methods: {

    },

    router // shorthand for router 
}).$mount('#app');