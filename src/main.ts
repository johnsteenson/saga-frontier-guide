import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import AutoComplete from 'primevue/autocomplete'
import Card from 'primevue/card'
import Button from 'primevue/button';

const app = createApp(App)

app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('AutoComplete', AutoComplete);
app.component('Card', Card);
app.component('Button', Button);

app.mount('#app');
