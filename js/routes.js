import { fetchList } from './content.js';
import { fetchScore } from './score.js';
import route from './routes.js';
import store from './store.js';

const app = Vue.createApp({
    data() {
        return {
            store,
        };
    },
    mounted() {
        document.title = 'The Purple List';
    },
});

app.use(route);
app.mount('#app');
