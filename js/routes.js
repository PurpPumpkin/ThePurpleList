import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default VueRouter.createRouter({
    history: VueRouter.createWebHistory('/ThePurpleList/'),
    routes: [
        { path: '/', component: List },
        { path: '/leaderboard', component: Leaderboard },
        { path: '/roulette', component: Roulette },
    ],
});
