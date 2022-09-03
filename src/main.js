import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

library.add(faTelegram, faGithub, fas);

createApp(App)
.component('fa', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
