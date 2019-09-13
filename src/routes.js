// components
import GameStart from './views/GameStart'
import Login from "./views/Login";
import GameEnd from "./views/GameEnd";
import Overview from "./views/Overview";
import ChooseAllocation from "./views/ChooseAllocation";

const routes = [
    { path: '/gameend', name: 'GameEnd', component: GameEnd },
    { path: '/gamestart', name: 'GameStart', component: GameStart },
    { path: '/login', name: 'Login', component: Login },
    { path: '/overview', name: 'Overview', component: Overview },
    { path: '/chooseallocation', name: 'ChooseAllocation', component: ChooseAllocation },
];

export default routes;
