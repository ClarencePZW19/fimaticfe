// components
import GameStart from './views/GameStart'
import Login from "./views/Login";
import GameEnd from "./views/GameEnd";
import Overview from "./views/Overview";
import PortfolioAllocation from "./views/PortfolioAllocation";
import Register from "./views/Register";

const routes = [
    { path: '/gameend', name: 'GameEnd', component: GameEnd },
    { path: '/gamestart', name: 'GameStart', component: GameStart },
    { path: '/login', name: 'Login', component: Login },
    { path: '/overview', name: 'Overview', component: Overview },
    { path: '/portfolioallocation', name: 'PortfolioAllocation', component: PortfolioAllocation },
    { path: '/register', name: 'Register', component: Register },
];

export default routes;
