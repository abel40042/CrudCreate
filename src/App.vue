<template>
  <div id="app">
    <InputRequest/>
    <p>{{ data.name }}</p>
    <p>{{ data.email }}</p>
  </div>
</template>

<script>
import jsonData from './dataBase/dataBase.json'
import InputRequest from './container/InputRequest.vue';
export default {
  name: 'App',
  components: {
    InputRequest,
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
