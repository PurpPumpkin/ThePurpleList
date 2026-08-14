import List from '/ThePurpleList/js/pages/List.js';
import Leaderboard from '/ThePurpleList/js/pages/Leaderboard.js';
import Roulette from '/ThePurpleList/js/pages/Roulette.js';

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: List },
        { path: '/leaderboard', component: Leaderboard },
        { path: '/roulette', component: Roulette },
    ],
});
