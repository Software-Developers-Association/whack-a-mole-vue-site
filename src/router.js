import Vue from 'vue';
import Router from 'vue-router';
import AppShellView, {routes} from './views/AppShellView';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AppShellView,
            children: routes
        }
    ]
})