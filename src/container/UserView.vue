<template>
    <div class="userList">
      <CardUser/>

    </div>
</template>
<script>
import CardUser from '../components/Common/Card.vue'

export default {
  name: "UserView",
  components:{
    CardUser,
  },
  data() {
    return {
      dataCardArticle: [],
    };
  },
  mounted() {
    this.getCardData();
  },
  methods: {
    async getCardData() {
      try {
        await this.simulateRequest();
        this.dataCardArticle = [
          {
            firstname: "Anarana",
            lastname: "Feno",
            email: "anarana@test.com",
            age: 42,
            role: "Back-end",
            skills: [],
            image:'url',
            author: {
              firstname: "olona",
              lastname: "VElona",
            },
            
          },
          {
            firstname: "Anarana",
            lastname: "TsyAmpy",
            email: "tsyampy@test.com",
            age: 35,
            role: "Front-end",
            skills: [],
            author: {
              firstname: "mpanoratra",
              lastname: "code",
            },
          }
        ]

      } catch (err) {
        console.error(err);
      }
    },
    simulateRequest() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
    handleDelete(indexDelete) {
      this.dataCardArticle = this.dataCardArticle.filter((_, index) => index !== indexDelete
      );
    },
  },
 
  
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