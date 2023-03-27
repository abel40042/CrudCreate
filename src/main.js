import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
const emitter = mitt();
export { emitter };
createApp(App).mount('#app')



