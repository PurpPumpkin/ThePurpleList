import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default VueRouter.createRouter({
    // Changed to Hash History to fix the static subfolder routing bug
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: List },
        { path: '/leaderboard', component: Leaderboard },
        { path: '/roulette', component: Roulette },
    ],
});
