// components
import GameStart from './views/GameStart'
import Login from "./views/Login";
import GameEnd from "./views/GameEnd";

const routes = [
    { path: '/gameend', name: 'GameEnd', component: GameEnd },
    { path: '/gamestart', name: 'GameStart', component: GameStart },
    { path: '/login', name: 'Login', component: Login },
];

export default routes;
