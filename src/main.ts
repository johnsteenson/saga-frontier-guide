import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { INJECTION_KEY, store } from './store';
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import AutoComplete from 'primevue/autocomplete'
import Card from 'primevue/card'
import Button from 'primevue/button';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App)

app.use(store, INJECTION_KEY);
app.use(router);
app.use(PrimeVue);

app.component('AutoComplete', AutoComplete);
app.component('Card', Card);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app');
