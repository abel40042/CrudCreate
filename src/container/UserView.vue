<template>
  <div class="showUserContainer">
    <h3>User List</h3>
    <div class="templateCard">
      <div class="userList" v-for=" (item, index) in datas" :key="index">
      <CardUser :json-data="item" />
    </div>
    </div>
  </div>
</template>
<script>
import CardUser from '../components/Common/Card.vue'
  export default {
  name: "UserView",
  data() {
    return {
      datas: [],

    };
  },
  components:{
    CardUser,
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
  .showUserContainer{
    width: 100%;
    max-width: 955px;
    display: flex;
    flex-direction: column;
    h3{
      font-size: 20px;
      margin: 0 0 10px;
      font-weight: bolder;
  }
  }
  
  .templateCard {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-inline: 25px ;
    flex-wrap: wrap;

  }
   .userList{
    background-color: rgb(221, 221, 221);
    display: flex;
    flex-direction: row;

   }
   h3 {
    font-weight: bolder;
    font-size: 43px;
   }
</style>