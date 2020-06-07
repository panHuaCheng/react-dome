import Login from '../views/Login';
import Hooks from '../views/Hooks';

const routes = [
    { path: '/login', component: Login, name: '登录' },
    { path: '/hooks', component: Hooks, name: 'hooks' },
    // { path: '/login', component: Login }
]

export default routes;