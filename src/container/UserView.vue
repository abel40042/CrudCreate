<template>
    <div class="userList" v-for=" (item, index) in datas" :key="index">
      <CardUser :json-data="item" />
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
   .userList{
    width: 100%;
    background-color: rgb(221, 221, 221);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
   }
</style>