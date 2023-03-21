<template>
    <div class="userList" v-for="dt, id in datas" :key="id">
      {{ dt.firstname }}

    </div>
</template>
<script>
// import CardUser from '../components/Common/Card.vue'
  export default {
  name: "UserView",
  data() {
    return {
      datas: []
    };
  },
  methods: {
    async fetchData() {
        const response = await fetch('http://localhost:3000/users');
        const jsonData = await response.json();
        this.datas = jsonData;
      },
  },
  mounted() {
    this.fetchData()
  }
  
}
</script>
<style lang="scss" scoped>
   .userList{
    width: 100%;
    background-color: rgb(221, 221, 221);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
   }
</style>