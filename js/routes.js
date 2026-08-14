export default VueRouter.createRouter({
    history: VueRouter.createWebHistory('/ThePurpleList/'),
    routes: [
        { path: '/', component: List },
        { path: '/leaderboard', component: Leaderboard },
        { path: '/roulette', component: Roulette },
    ],
});
