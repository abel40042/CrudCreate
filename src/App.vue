<template>
  <div id="app">
    <InputRequest/>
    <UserView/>
    
</div>
</template>

<script>
import jsonData from './dataBase/dataBase.json'
import InputRequest from './container/InputRequest.vue';
import UserView from './container/UserView.vue';

export default {
  name: 'App',
  components: {
    InputRequest,
    UserView,
},
data() {
    return {
      data: jsonData,
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
