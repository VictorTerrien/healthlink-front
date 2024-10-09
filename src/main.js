//import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';

import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from "primevue/button"
import Knob from 'primevue/knob';
import FloatLabel from 'primevue/floatlabel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';  
import Row from 'primevue/row';     
import Carousel from 'primevue/carousel';
import Avatar from 'primevue/avatar';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Editor from 'primevue/editor';

import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Textarea from 'primevue/textarea';


const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(
    createAuth0({
      domain: 'dev-jmlc8zt1b2rwxtvp.us.auth0.com',
      clientId: 'KXTCRoPyjSL1TlkNAqcz5HLsrZaQZNLB',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.component('Editor', Editor)
app.component('Textarea', Textarea)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Knob', Knob)
app.component('FloatLabel', FloatLabel)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Carousel', Carousel)
app.component('Avatar', Avatar)
app.component('Dropdown', Dropdown)

app.mount('#app')