<template>
  <div id="app">
    <InputRequest/>
    <div class="userViewexp">
      <UserView />
    </div>
    <InfoUpdate/>
    <p>{{ data.name }}</p>
    <p>{{ data.email }}</p>
  </div>
</template>

<script>

import jsonData from './dataBase/dataBase.json'
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
      data: jsonData
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
