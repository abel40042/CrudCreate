<template>
  <div id="app">
    <InputRequest/>
    <div class="userViewexp">
      <UserView />
    </div>
    <InfoUpdate/>
  </div>
</template>

<script>
// import axios from 'axios'
// const app = Vue.createApp(...)
// app.use(VueAxios, axios)

import InfoUpdate from './container/InfoUpdate.vue';
import InputRequest from './container/InputRequest.vue';
import UserView from './container/UserView.vue'
export default {
  name: 'App',
  components: {
    InputRequest,
    UserView,
    InfoUpdate
},
data() {
    return {
      dataHomeArticle: [],
    };
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row ;
}

</style>
