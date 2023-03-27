import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import mitt from 'mitt';
const emitter = mitt();
export { emitter };

